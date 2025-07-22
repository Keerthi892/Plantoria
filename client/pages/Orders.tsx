import { useAuth } from '@/contexts/AuthContext';
import { LoginPrompt } from '@/components/ProtectedRoute';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Truck, CheckCircle, Leaf } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Orders() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return (
      <LoginPrompt 
        title="View Your Orders" 
        message="Sign in to view your order history and track your plant deliveries." 
      />
    );
  }

  // Mock order data
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: "$89.97",
      items: [
        { name: "Monstera Deliciosa", price: "$45.99" },
        { name: "Snake Plant", price: "$29.99" },
        { name: "Care Kit", price: "$13.99" }
      ]
    },
    {
      id: "ORD-002", 
      date: "2024-01-10",
      status: "In Transit",
      total: "$34.99",
      items: [
        { name: "Peace Lily", price: "$34.99" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-700';
      case 'In Transit': return 'bg-blue-100 text-blue-700';
      case 'Processing': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle className="h-4 w-4" />;
      case 'In Transit': return <Truck className="h-4 w-4" />;
      case 'Processing': return <Package className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mr-4">
            <Package className="h-6 w-6 text-forest-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-forest-800">My Orders</h1>
            <p className="text-forest-600">Track your plant deliveries and view order history</p>
          </div>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="py-16 text-center">
              <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-forest-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">No Orders Yet</h3>
              <p className="text-forest-600 mb-6">Start your plant journey by placing your first order!</p>
              <a 
                href="/plants"
                className="inline-flex items-center px-6 py-3 bg-forest-500 text-white rounded-lg hover:bg-forest-600 transition-colors"
              >
                Shop Plants
              </a>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-forest-800">Order {order.id}</CardTitle>
                      <p className="text-forest-600 text-sm">Placed on {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </Badge>
                      <p className="text-forest-800 font-semibold mt-1">{order.total}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-forest-700">Items:</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <span className="text-forest-800">{item.name}</span>
                        <span className="text-forest-600">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
