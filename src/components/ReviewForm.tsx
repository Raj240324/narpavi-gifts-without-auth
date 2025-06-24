import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Star, MessageCircle, MapPin, Heart } from 'lucide-react';
import { TestimonialsService, CreateReviewData } from '@/lib/testimonialsService';
import { Card, CardContent } from '@/components/ui/card';

type ReviewFormProps = {
  onReviewSubmitted?: (review: any) => void;
};

export function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [product, setProduct] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name for the review.",
        variant: "destructive",
      });
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

    if (!review.trim()) {
      toast({
        title: "Review Required",
        description: "Please enter your review comment.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Create review data for Supabase
      const reviewData: CreateReviewData = {
        name: name.trim(),
        rating,
        review: review.trim(),
        product,
        category: product, // Using product as category for now
        location: location.trim() || '',
        verified: false // New reviews start as unverified
      };

      // Submit to Supabase
      const newReview = await TestimonialsService.createTestimonial(reviewData);

      if (newReview) {
        toast({
          title: "Review Submitted Successfully!",
          description: "Thank you for your review! It has been added to our testimonials.",
        });
        resetForm();
        onReviewSubmitted?.(newReview);
      } else {
        throw new Error('Failed to create review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Error Submitting Review",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setRating(5);
    setReview('');
    setProduct('');
    setLocation('');
  };

  return (
    <Card className="h-full min-h-[450px] bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header with icon and title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-3">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-lg font-semibold text-gray-800">Share Your Experience</h4>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          {/* Rating Section */}
          <div className="mb-6">
            <Label className="text-sm font-medium text-gray-700 mb-3 block">Your Rating</Label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-3xl hover:scale-110 transition-transform duration-200"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300 hover:text-yellow-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Review Textarea */}
          <div className="flex-1 mb-6">
            <Label className="text-sm font-medium text-gray-700 mb-3 block">Your Review</Label>
            <Textarea
              placeholder="Tell us about your experience with our handcrafted pieces..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              required
              className="text-gray-700 text-sm leading-relaxed resize-none border-gray-200 focus:border-pink-300 focus:ring-pink-200 h-full min-h-[120px] rounded-xl"
            />
          </div>
          
          {/* Product Selection */}
          <div className="space-y-4 mb-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">Product/Service</Label>
              <Select value={product} onValueChange={setProduct}>
                <SelectTrigger className="border-gray-200 focus:border-pink-300 focus:ring-pink-200 rounded-xl">
                  <SelectValue placeholder="Select a product or service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Custom Pet Portrait">Custom Pet Portrait</SelectItem>
                  <SelectItem value="Resin Art">Resin Art</SelectItem>
                  <SelectItem value="Custom Painting">Custom Painting</SelectItem>
                  <SelectItem value="Digital Art">Digital Art</SelectItem>
                  <SelectItem value="Memorial Portrait">Memorial Portrait</SelectItem>
                  <SelectItem value="Family Portrait">Family Portrait</SelectItem>
                  <SelectItem value="Landscape Art">Landscape Art</SelectItem>
                  <SelectItem value="Gift Wrapping">Gift Wrapping</SelectItem>
                  <SelectItem value="Express Delivery">Express Delivery</SelectItem>
                  <SelectItem value="Custom Order">Custom Order</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {product && (
              <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-xs px-3 py-1 rounded-full font-medium">
                {product}
              </span>
            )}
          </div>
          
          {/* Submit Button */}
          <div className="mb-6">
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Submit Review
                </div>
              )}
            </Button>
          </div>
          
          {/* Customer Info Section */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 mt-auto">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md">
              {name.charAt(0) || '?'}
            </div>
            
            <div className="flex-1 space-y-2 min-w-0">
              <div>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="font-semibold text-gray-800 text-sm border-gray-200 focus:border-pink-300 focus:ring-pink-200 h-8 rounded-lg"
                />
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                <Input
                  placeholder="City, State (optional)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-xs text-gray-600 border-gray-200 focus:border-pink-300 focus:ring-pink-200 h-6 rounded-lg"
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
} 