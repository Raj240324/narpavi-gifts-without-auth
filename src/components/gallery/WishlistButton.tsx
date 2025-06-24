import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/lib/WishlistContext';
import { useToast } from '@/components/ui/use-toast';

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
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleToggleWishlist = () => {
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
      toast({
        title: 'Removed from wishlist',
        description: `${item.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(item);
      toast({
        title: 'Added to wishlist',
        description: `${item.title} has been added to your wishlist.`,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleWishlist}
      className={`${className} ${
        isInWishlist(item.id)
          ? 'text-pink-500 hover:text-pink-600'
          : 'text-gray-400 hover:text-pink-500'
      }`}
    >
      <Heart className={`w-5 h-5 ${isInWishlist(item.id) ? 'fill-current' : ''}`} />
    </Button>
  );
} 