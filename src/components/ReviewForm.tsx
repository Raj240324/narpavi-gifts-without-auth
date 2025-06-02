import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

interface ReviewFormProps {
  onReviewSubmitted?: () => void;
}

export function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [product, setProduct] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to leave a review.",
        variant: "destructive",
      });
      setOpen(false);
      navigate('/auth');
      return;
    }

    if (!product) {
      toast({
        title: "Product Required",
        description: "Please select a product for your review.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // First, ensure the user exists in the auth.users table
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (userError && userError.code !== 'PGRST116') {
        // If user doesn't exist in users table, create them
        const { error: insertError } = await supabase
          .from('users')
          .insert([
            {
              id: user.id,
              email: user.email,
              full_name: user.user_metadata?.full_name || 'Anonymous',
              created_at: new Date().toISOString()
            }
          ]);

        if (insertError) throw insertError;
      }

      // Now insert the review
      const { error: reviewError } = await supabase
        .from('reviews')
        .insert([
          {
            user_id: user.id,
            rating,
            review,
            product,
            category: product, // Using product as category for now
            location,
            name: user.user_metadata?.full_name || 'Anonymous',
            date: new Date().toISOString(),
            verified: true
          }
        ]);

      if (reviewError) throw reviewError;
      
      toast({
        title: "Success",
        description: "Thank you for your review!",
      });
      
      setOpen(false);
      setReview('');
      setProduct('');
      setLocation('');
      setRating(5);
      
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (error: any) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
          Leave a Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Share Your Experience</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="product">Product</Label>
            <Select value={product} onValueChange={setProduct}>
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Custom Pet Portrait">Custom Pet Portrait</SelectItem>
                <SelectItem value="Resin Art">Resin Art</SelectItem>
                <SelectItem value="Resin Gifts">Resin Gifts</SelectItem>
                <SelectItem value="Custom Paintings">Custom Paintings</SelectItem>
                <SelectItem value="Digital Art">Digital Art</SelectItem>
                <SelectItem value="Mixed Media">Mixed Media</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, State"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="review">Your Review</Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with our product..."
              required
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 