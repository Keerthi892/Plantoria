import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, ArrowLeft, RefreshCw, CheckCircle, Leaf, Phone, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PhoneInput, usePhoneValidation } from '@/components/PhoneInput';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

type AuthStep = 'choose' | 'login' | 'signup' | 'otp';
type AuthMethod = 'email' | 'mobile';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, signup, verifyOTP, resendOTP } = useAuth();
  const { toast } = useToast();

  const [step, setStep] = useState<AuthStep>(
    searchParams.get('mode') === 'signup' ? 'signup' : 'choose'
  );
  const [authMethod, setAuthMethod] = useState<AuthMethod>('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // Phone validation
  const { isValid: isMobileValid, error: mobileError } = usePhoneValidation(mobile);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contact = authMethod === 'email' ? email : mobile;

    if (!contact.trim()) {
      toast({
        title: "Error",
        description: `Please enter your ${authMethod === 'email' ? 'email address' : 'mobile number'}`,
        variant: "destructive"
      });
      return;
    }

    if (authMethod === 'mobile' && !isMobileValid) {
      toast({
        title: "Error",
        description: mobileError || "Please enter a valid mobile number",
        variant: "destructive"
      });
      return;
    }

    if (step === 'signup' && !name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      let result;
      if (step === 'signup') {
        result = await signup(contact, name, authMethod);
        setIsSignup(true);
      } else {
        result = await login(contact, authMethod);
        setIsSignup(false);
      }

      if (result.success) {
        setStep('otp');
        toast({
          title: "OTP Sent",
          description: result.message,
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim() || otp.length !== 6) {
      toast({
        title: "Error",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const contact = authMethod === 'email' ? email : mobile;
      const result = await verifyOTP(contact, otp, authMethod, name, isSignup);

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        });
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);

    try {
      const contact = authMethod === 'email' ? email : mobile;
      const result = await resendOTP(contact, authMethod);
      if (result.success) {
        toast({
          title: "OTP Resent",
          description: result.message,
        });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to resend OTP. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setMobile('');
    setName('');
    setOtp('');
    setStep('choose');
    setIsSignup(false);
    setAuthMethod('email');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-sage-50 to-moss-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-forest-500 rounded-full mr-3">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-forest-800">🌿 Plantoria</h1>
          </div>
          <p className="text-forest-600">Join the plant community</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-forest-800">
              {step === 'choose' && 'Welcome'}
              {step === 'login' && 'Sign In'}
              {step === 'signup' && 'Create Account'}
              {step === 'otp' && 'Verify Email'}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Choose Auth Method */}
            {step === 'choose' && (
              <div className="space-y-4">
                <p className="text-center text-forest-600 text-sm">
                  Choose how you'd like to continue
                </p>
                
                <Button 
                  onClick={() => setStep('login')}
                  className="w-full bg-forest-500 hover:bg-forest-600 h-12"
                  size="lg"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Sign In with Email
                </Button>
                
                <Button
                  onClick={() => setStep('signup')}
                  variant="outline"
                  className="w-full border-forest-200 text-forest-700 hover:bg-forest-50 h-12"
                  size="lg"
                >
                  Create New Account
                </Button>

                <Button
                  onClick={() => navigate('/')}
                  variant="ghost"
                  className="w-full text-forest-600 hover:text-forest-700 h-12"
                  size="lg"
                >
                  Continue Browsing Without Account
                </Button>

                <div className="text-center">
                  <p className="text-xs text-forest-500">
                    We use email OTP for secure, password-free authentication
                  </p>
                </div>
              </div>
            )}

            {/* Login/Signup Form */}
            {(step === 'login' || step === 'signup') && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>
                )}

                {/* Auth Method Tabs */}
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-3">
                    Sign in with
                  </label>
                  <Tabs value={authMethod} onValueChange={(value) => setAuthMethod(value as AuthMethod)}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </TabsTrigger>
                      <TabsTrigger value="mobile" className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Mobile
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="email" className="mt-4">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required={authMethod === 'email'}
                        className="h-12"
                      />
                    </TabsContent>

                    <TabsContent value="mobile" className="mt-4">
                      <PhoneInput
                        value={mobile}
                        onChange={setMobile}
                        placeholder="Enter mobile number"
                        required={authMethod === 'mobile'}
                        className="h-12"
                      />
                      {authMethod === 'mobile' && mobile && mobileError && (
                        <p className="text-sm text-red-600 mt-2">{mobileError}</p>
                      )}
                    </TabsContent>
                  </Tabs>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || (authMethod === 'mobile' && mobile && !isMobileValid)}
                  className="w-full bg-forest-500 hover:bg-forest-600 h-12"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      {authMethod === 'email' ? (
                        <Mail className="h-4 w-4 mr-2" />
                      ) : (
                        <Phone className="h-4 w-4 mr-2" />
                      )}
                      Send Verification Code
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep('choose')}
                  className="w-full text-forest-600 hover:text-forest-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                {step === 'login' && (
                  <div className="text-center">
                    <p className="text-sm text-forest-600">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setStep('signup')}
                        className="text-forest-500 hover:text-forest-700 font-medium"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                )}

                {step === 'signup' && (
                  <div className="text-center">
                    <p className="text-sm text-forest-600">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setStep('login')}
                        className="text-forest-500 hover:text-forest-700 font-medium"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                )}
              </form>
            )}

            {/* OTP Verification */}
            {step === 'otp' && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center">
                      {authMethod === 'email' ? (
                        <Mail className="h-8 w-8 text-forest-600" />
                      ) : (
                        <Smartphone className="h-8 w-8 text-forest-600" />
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-forest-600 mb-2">
                    We've sent a 6-digit verification code to your {authMethod}
                  </p>
                  <Badge variant="outline" className="bg-forest-50 text-forest-700">
                    {authMethod === 'email' ? email : mobile}
                  </Badge>
                </div>

                <form onSubmit={handleOTPSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2 text-center">
                      Enter Verification Code
                    </label>
                    <Input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="000000"
                      className="h-12 text-center text-2xl tracking-widest font-mono"
                      maxLength={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading || otp.length !== 6}
                    className="w-full bg-forest-500 hover:bg-forest-600 h-12"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Verify & Continue
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center space-y-2">
                  <p className="text-sm text-forest-600">
                    Didn't receive the code?
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleResendOTP}
                    disabled={isLoading}
                    className="border-forest-200 text-forest-600 hover:bg-forest-50"
                  >
                    {isLoading ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2" />
                    )}
                    Resend Code
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  onClick={resetForm}
                  className="w-full text-forest-600 hover:text-forest-700"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Start Over
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-xs text-forest-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
