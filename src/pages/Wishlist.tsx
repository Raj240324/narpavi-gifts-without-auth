import { useWishlist } from '@/lib/WishlistContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function Wishlist() {
  const { wishlist, loading, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Sign In Required</CardTitle>
            <CardDescription>Please sign in to view your wishlist</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/auth')}>Sign In</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <Card key={item.id} className="group">
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => removeFromWishlist(item.id)}
              >
                <Heart className="w-5 h-5 fill-pink-500 text-pink-500" />
              </Button>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{item.title}</CardTitle>
              <CardDescription className="line-clamp-2">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/1234567890?text=${encodeURIComponent(`Hi! I'm interested in this artwork: ${item.title}`)}`, '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = 'tel:+1234567890'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Inquire
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 