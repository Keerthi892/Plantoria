// Authentication API types

export interface User {
  id: string;
  email?: string;
  mobile?: string;
  name: string;
  authMethod: 'email' | 'mobile';
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user?: User;
    sessionToken?: string;
    email?: string;
    mobile?: string;
    name?: string;
    authMethod?: 'email' | 'mobile';
  };
}

export interface SignupRequest {
  email?: string;
  mobile?: string;
  name: string;
  authMethod: 'email' | 'mobile';
}

export interface LoginRequest {
  email?: string;
  mobile?: string;
  authMethod: 'email' | 'mobile';
}

export interface VerifyOTPRequest {
  email?: string;
  mobile?: string;
  otp: string;
  name?: string;
  isSignup?: boolean;
  authMethod: 'email' | 'mobile';
}

export interface ResendOTPRequest {
  email?: string;
  mobile?: string;
  authMethod: 'email' | 'mobile';
}

export interface GetCurrentUserResponse {
  success: boolean;
  message?: string;
  data?: {
    user: User;
  };
}
