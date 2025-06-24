import { useWishlist } from '@/lib/WishlistContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Wishlist() {
  const { wishlist, loading, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">Loading your wishlist...</div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Wishlist is Empty</CardTitle>
            <CardDescription>Browse our gallery and save your favorite pieces</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/gallery')}>Browse Gallery</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Wishlist</h1>
        <p className="text-gray-600">Your saved favorite pieces</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {item.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // Handle contact for custom order
                      navigate('/contact', { 
                        state: { 
                          message: `I'm interested in: ${item.title}` 
                        } 
                      });
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Inquire
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('tel:+1234567890')}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 