import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/lib/WishlistContext';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/AuthContext';
import { useNavigate } from 'react-router-dom';

type WishlistButtonProps = {
  item: {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
  };
  className?: string;
};

export function WishlistButton({ item, className = '' }: WishlistButtonProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleWishlistClick = async () => {
    try {
      if (!user) {
        toast({
          title: 'Sign in required',
          description: 'Please sign in to add items to your wishlist',
          action: (
            <Button
              variant="default"
              onClick={() => navigate('/auth')}
              className="mt-2"
            >
              Sign In
            </Button>
          ),
        });
        return;
      }

      if (isInWishlist(item.id)) {
        await removeFromWishlist(item.id);
        toast({
          title: 'Removed from wishlist',
          description: `${item.title} has been removed from your wishlist`,
        });
      } else {
        await addToWishlist({
          ...item,
          created_at: new Date().toISOString(),
        });
        toast({
          title: 'Added to wishlist',
          description: `${item.title} has been added to your wishlist`,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleWishlistClick}
      className={`hover:bg-pink-50 ${className}`}
    >
      <Heart
        className={`w-5 h-5 ${
          isInWishlist(item.id)
            ? 'fill-pink-500 text-pink-500'
            : 'text-gray-400 hover:text-pink-500'
        }`}
      />
    </Button>
  );
} 