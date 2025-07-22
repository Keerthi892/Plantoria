import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, AuthResponse, GetCurrentUserResponse } from '@shared/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (contact: string, authMethod: 'email' | 'mobile') => Promise<AuthResponse>;
  signup: (contact: string, name: string, authMethod: 'email' | 'mobile') => Promise<AuthResponse>;
  verifyOTP: (contact: string, otp: string, authMethod: 'email' | 'mobile', name?: string, isSignup?: boolean) => Promise<AuthResponse>;
  resendOTP: (contact: string, authMethod: 'email' | 'mobile') => Promise<AuthResponse>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  // Get session token from localStorage
  const getSessionToken = (): string | null => {
    return localStorage.getItem('sessionToken');
  };

  // Set session token in localStorage
  const setSessionToken = (token: string): void => {
    localStorage.setItem('sessionToken', token);
  };

  // Remove session token from localStorage
  const removeSessionToken = (): void => {
    localStorage.removeItem('sessionToken');
  };

  // API call helper with auth headers
  const apiCall = async (url: string, options: RequestInit = {}): Promise<Response> => {
    const sessionToken = getSessionToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(sessionToken && { Authorization: `Bearer ${sessionToken}` }),
      ...options.headers,
    };

    return fetch(url, {
      ...options,
      headers,
    });
  };

  // Login function
  const login = async (contact: string, authMethod: 'email' | 'mobile'): Promise<AuthResponse> => {
    try {
      const requestBody = {
        authMethod,
        ...(authMethod === 'email' ? { email: contact } : { mobile: contact })
      };

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.',
      };
    }
  };

  // Signup function
  const signup = async (contact: string, name: string, authMethod: 'email' | 'mobile'): Promise<AuthResponse> => {
    try {
      const requestBody = {
        name,
        authMethod,
        ...(authMethod === 'email' ? { email: contact } : { mobile: contact })
      };

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Signup error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.',
      };
    }
  };

  // Verify OTP function
  const verifyOTP = async (
    contact: string,
    otp: string,
    authMethod: 'email' | 'mobile',
    name?: string,
    isSignup?: boolean
  ): Promise<AuthResponse> => {
    try {
      const requestBody = {
        otp,
        authMethod,
        name,
        isSignup,
        ...(authMethod === 'email' ? { email: contact } : { mobile: contact })
      };

      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: AuthResponse = await response.json();

      if (data.success && data.data?.user && data.data?.sessionToken) {
        setUser(data.data.user);
        setSessionToken(data.data.sessionToken);
      }

      return data;
    } catch (error) {
      console.error('Verify OTP error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.',
      };
    }
  };

  // Resend OTP function
  const resendOTP = async (contact: string, authMethod: 'email' | 'mobile'): Promise<AuthResponse> => {
    try {
      const requestBody = {
        authMethod,
        ...(authMethod === 'email' ? { email: contact } : { mobile: contact })
      };

      const response = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Resend OTP error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.',
      };
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    try {
      await apiCall('/api/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      removeSessionToken();
    }
  };

  // Refresh user data
  const refreshUser = async (): Promise<void> => {
    const sessionToken = getSessionToken();
    if (!sessionToken) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiCall('/api/auth/me');
      const data: GetCurrentUserResponse = await response.json();

      if (data.success && data.data?.user) {
        setUser(data.data.user);
      } else {
        // Invalid token, clear it
        removeSessionToken();
        setUser(null);
      }
    } catch (error) {
      console.error('Refresh user error:', error);
      removeSessionToken();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize authentication state
  useEffect(() => {
    refreshUser();
  }, []);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    signup,
    verifyOTP,
    resendOTP,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
