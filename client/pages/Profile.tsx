import { useState } from 'react';
import { User, Mail, Calendar, Edit, Save, X, Leaf, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function ProfileContent() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || '');

  const handleSave = () => {
    // In a real app, you would update the user's name via API
    console.log('Saving name:', editedName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(user?.name || '');
    setIsEditing(false);
  };

  const memberSince = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-forest-600" />
                </div>
                <div>
                  <CardTitle className="text-forest-800">My Profile</CardTitle>
                  <p className="text-forest-600">Manage your account information</p>
                </div>
              </div>
              <Badge className="bg-forest-100 text-forest-700">
                <Leaf className="h-3 w-3 mr-1" />
                Plant Parent
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Profile Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-forest-800">Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-forest-700">Full Name</label>
              {isEditing ? (
                <div className="flex space-x-2">
                  <Input
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSave}
                    size="sm"
                    className="bg-forest-500 hover:bg-forest-600"
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={handleCancel}
                    size="sm"
                    variant="outline"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-forest-800">{user?.name}</span>
                  <Button
                    onClick={() => setIsEditing(true)}
                    size="sm"
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Information */}
            {user?.email && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-forest-700">Email Address</label>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-forest-500" />
                  <span className="text-forest-800">{user?.email}</span>
                  <Badge variant="outline" className="text-xs">Verified</Badge>
                </div>
              </div>
            )}

            {user?.mobile && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-forest-700">Mobile Number</label>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-forest-500" />
                  <span className="text-forest-800">{user?.mobile}</span>
                  <Badge variant="outline" className="text-xs">Verified</Badge>
                </div>
              </div>
            )}

            {/* Member Since */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-forest-700">Member Since</label>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-forest-500" />
                <span className="text-forest-800">{memberSince}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plant Preferences */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-forest-800">Plant Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-forest-600" />
                </div>
                <p className="text-sm font-medium text-forest-700">House Plants</p>
                <p className="text-xs text-forest-500">12 purchased</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-sage-600" />
                </div>
                <p className="text-sm font-medium text-forest-700">Trees</p>
                <p className="text-xs text-forest-500">3 purchased</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-earth-600" />
                </div>
                <p className="text-sm font-medium text-forest-700">Flowers</p>
                <p className="text-xs text-forest-500">8 purchased</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-moss-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-moss-600" />
                </div>
                <p className="text-sm font-medium text-forest-700">Seeds</p>
                <p className="text-xs text-forest-500">5 purchased</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-forest-800">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="justify-start border-forest-200 text-forest-700 hover:bg-forest-50"
              >
                View Orders
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-forest-200 text-forest-700 hover:bg-forest-50"
              >
                Care Reminders
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-forest-200 text-forest-700 hover:bg-forest-50"
              >
                Wishlist
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
