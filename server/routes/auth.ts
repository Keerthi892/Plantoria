import { RequestHandler } from "express";
import crypto from "crypto";

// In-memory storage for demo purposes
// In production, use a proper database
interface User {
  id: string;
  email?: string;
  mobile?: string;
  name: string;
  authMethod: 'email' | 'mobile';
  createdAt: Date;
}

interface OTPData {
  email?: string;
  mobile?: string;
  otp: string;
  expiresAt: Date;
  verified: boolean;
  authMethod: 'email' | 'mobile';
}

const users: Map<string, User> = new Map();
const otpStore: Map<string, OTPData> = new Map();
const sessions: Map<string, string> = new Map(); // sessionToken -> userId

// Generate random OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Generate session token
function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// Simulate email sending (in production, use real email service)
function sendOTPEmail(email: string, otp: string): Promise<boolean> {
  console.log(`📧 Sending OTP to ${email}: ${otp}`);
  // In production, integrate with email service like SendGrid, Mailgun, etc.
  return Promise.resolve(true);
}

// Simulate SMS sending (in production, use real SMS service)
function sendOTPSMS(mobile: string, otp: string): Promise<boolean> {
  console.log(`📱 Sending OTP to ${mobile}: ${otp}`);
  // In production, integrate with SMS service like Twilio, AWS SNS, etc.
  return Promise.resolve(true);
}

// Helper function to send OTP via email or SMS
function sendOTP(authMethod: 'email' | 'mobile', contact: string, otp: string): Promise<boolean> {
  if (authMethod === 'email') {
    return sendOTPEmail(contact, otp);
  } else {
    return sendOTPSMS(contact, otp);
  }
}

// Signup endpoint
export const handleSignup: RequestHandler = async (req, res) => {
  try {
    const { email, mobile, name, authMethod } = req.body;

    if (!name || !authMethod) {
      return res.status(400).json({
        success: false,
        message: "Name and authentication method are required"
      });
    }

    if (authMethod === 'email' && !email) {
      return res.status(400).json({
        success: false,
        message: "Email is required for email authentication"
      });
    }

    if (authMethod === 'mobile' && !mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required for mobile authentication"
      });
    }

    const contact = authMethod === 'email' ? email : mobile;

    // Check if user already exists
    const existingUser = Array.from(users.values()).find(user =>
      authMethod === 'email' ? user.email === email : user.mobile === mobile
    );
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: `User already exists with this ${authMethod}`
      });
    }

    // Generate OTP
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP
    otpStore.set(contact, {
      ...(authMethod === 'email' ? { email } : { mobile }),
      otp,
      expiresAt,
      verified: false,
      authMethod
    });

    // Send OTP
    await sendOTP(authMethod, contact, otp);

    res.json({
      success: true,
      message: `OTP sent to your ${authMethod}`,
      data: {
        ...(authMethod === 'email' ? { email } : { mobile }),
        name,
        authMethod
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Login endpoint
export const handleLogin: RequestHandler = async (req, res) => {
  try {
    const { email, mobile, authMethod } = req.body;

    if (!authMethod) {
      return res.status(400).json({
        success: false,
        message: "Authentication method is required"
      });
    }

    if (authMethod === 'email' && !email) {
      return res.status(400).json({
        success: false,
        message: "Email is required for email authentication"
      });
    }

    if (authMethod === 'mobile' && !mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required for mobile authentication"
      });
    }

    const contact = authMethod === 'email' ? email : mobile;

    // Check if user exists
    const existingUser = Array.from(users.values()).find(user =>
      authMethod === 'email' ? user.email === email : user.mobile === mobile
    );
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: `No account found with this ${authMethod}. Please sign up first.`
      });
    }

    // Generate OTP
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP
    otpStore.set(contact, {
      ...(authMethod === 'email' ? { email } : { mobile }),
      otp,
      expiresAt,
      verified: false,
      authMethod
    });

    // Send OTP
    await sendOTP(authMethod, contact, otp);

    res.json({
      success: true,
      message: `OTP sent to your ${authMethod}`,
      data: {
        ...(authMethod === 'email' ? { email } : { mobile }),
        name: existingUser.name,
        authMethod
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Verify OTP endpoint
export const handleVerifyOTP: RequestHandler = async (req, res) => {
  try {
    const { email, mobile, otp, name, isSignup, authMethod } = req.body;

    if (!authMethod || !otp) {
      return res.status(400).json({
        success: false,
        message: "Authentication method and OTP are required"
      });
    }

    if (authMethod === 'email' && !email) {
      return res.status(400).json({
        success: false,
        message: "Email is required for email authentication"
      });
    }

    if (authMethod === 'mobile' && !mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required for mobile authentication"
      });
    }

    const contact = authMethod === 'email' ? email : mobile;

    // Get OTP data
    const otpData = otpStore.get(contact);
    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "OTP not found or expired"
      });
    }

    // Check if OTP is expired
    if (new Date() > otpData.expiresAt) {
      otpStore.delete(contact);
      return res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new one."
      });
    }

    // Verify OTP
    if (otpData.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    let user: User;

    if (isSignup) {
      // Create new user
      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Name is required for signup"
        });
      }

      const userId = crypto.randomUUID();
      user = {
        id: userId,
        ...(authMethod === 'email' ? { email } : { mobile }),
        name,
        authMethod,
        createdAt: new Date()
      };
      users.set(userId, user);
    } else {
      // Get existing user
      const existingUser = Array.from(users.values()).find(u =>
        authMethod === 'email' ? u.email === email : u.mobile === mobile
      );
      if (!existingUser) {
        return res.status(400).json({
          success: false,
          message: "User not found"
        });
      }
      user = existingUser;
    }

    // Generate session token
    const sessionToken = generateSessionToken();
    sessions.set(sessionToken, user.id);

    // Mark OTP as verified and clean up
    otpStore.delete(contact);

    res.json({
      success: true,
      message: isSignup ? "Account created successfully!" : "Logged in successfully!",
      data: {
        user: {
          id: user.id,
          email: user.email,
          mobile: user.mobile,
          name: user.name,
          authMethod: user.authMethod
        },
        sessionToken
      }
    });

  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Get current user endpoint
export const handleGetCurrentUser: RequestHandler = (req, res) => {
  try {
    const sessionToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (!sessionToken) {
      return res.status(401).json({ 
        success: false, 
        message: "No session token provided" 
      });
    }

    const userId = sessions.get(sessionToken);
    if (!userId) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid session token" 
      });
    }

    const user = users.get(userId);
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      }
    });

  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

// Logout endpoint
export const handleLogout: RequestHandler = (req, res) => {
  try {
    const sessionToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (sessionToken) {
      sessions.delete(sessionToken);
    }

    res.json({
      success: true,
      message: "Logged out successfully"
    });

  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
};

// Resend OTP endpoint
export const handleResendOTP: RequestHandler = async (req, res) => {
  try {
    const { email, mobile, authMethod } = req.body;

    if (!authMethod) {
      return res.status(400).json({
        success: false,
        message: "Authentication method is required"
      });
    }

    if (authMethod === 'email' && !email) {
      return res.status(400).json({
        success: false,
        message: "Email is required for email authentication"
      });
    }

    if (authMethod === 'mobile' && !mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required for mobile authentication"
      });
    }

    const contact = authMethod === 'email' ? email : mobile;

    // Generate new OTP
    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Store OTP
    otpStore.set(contact, {
      ...(authMethod === 'email' ? { email } : { mobile }),
      otp,
      expiresAt,
      verified: false,
      authMethod
    });

    // Send OTP
    await sendOTP(authMethod, contact, otp);

    res.json({
      success: true,
      message: `New OTP sent to your ${authMethod}`
    });

  } catch (error) {
    console.error("Resend OTP error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
