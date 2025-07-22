import { Info, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export function BrowsingInfo() {
  const { isAuthenticated } = useAuth();

  // Don't show if user is already authenticated
  if (isAuthenticated) return null;

  return (
    <div className="bg-forest-50 border border-forest-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <Info className="h-5 w-5 text-forest-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="text-sm font-medium text-forest-800 mb-1">
            Browse & Learn Freely
          </h4>
          <p className="text-sm text-forest-600">
            You can explore all our plants, read descriptions, and check prices without an account. 
            <span className="inline-flex items-center ml-1">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Sign in only when you're ready to add items to cart and purchase.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
