import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Loader2, Leaf } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 via-sage-50 to-moss-50">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-forest-500 rounded-full animate-pulse">
              <Leaf className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Loader2 className="h-4 w-4 animate-spin text-forest-600" />
            <span className="text-forest-600">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, show custom fallback or redirect to auth
  if (!isAuthenticated) {
    if (fallback) {
      return <>{fallback}</>;
    }

    // Store the attempted location to redirect back after login
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // User is authenticated, render the protected content
  return <>{children}</>;
}

// Component for pages that should show login prompt instead of redirecting
export function LoginPrompt({ 
  title = "Sign In Required", 
  message = "Please sign in to access this feature" 
}: { 
  title?: string; 
  message?: string; 
}) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-forest-600" />
              </div>
            </div>
            <CardTitle className="text-forest-800">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-forest-600">{message}</p>
            <div className="space-y-2">
              <Button 
                asChild 
                className="w-full bg-forest-500 hover:bg-forest-600"
              >
                <a href="/auth">Sign In</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-forest-200 text-forest-700 hover:bg-forest-50"
              >
                <a href="/auth?mode=signup">Create Account</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
