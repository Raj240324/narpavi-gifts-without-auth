import { useState, useEffect } from 'react';
import { TestimonialsService } from '@/lib/testimonialsService';
import { Review } from '@/lib/supabase';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const testimonialsData = await TestimonialsService.getAllTestimonials();
      setTestimonials(testimonialsData);
      
      // Load stats
      const avgRating = await TestimonialsService.getAverageRating();
      const totalCount = await TestimonialsService.getTotalReviewCount();
      
      setAverageRating(avgRating);
      setTotalReviews(totalCount);
      
    } catch (err) {
      console.error('Error loading testimonials:', err);
      setError('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  const addTestimonial = async (testimonialData: any) => {
    try {
      const newTestimonial = await TestimonialsService.createTestimonial(testimonialData);
      if (newTestimonial) {
        setTestimonials(prev => [newTestimonial, ...prev]);
        
        // Update stats
        const avgRating = await TestimonialsService.getAverageRating();
        const totalCount = await TestimonialsService.getTotalReviewCount();
        setAverageRating(avgRating);
        setTotalReviews(totalCount);
        
        return newTestimonial;
      }
    } catch (err) {
      console.error('Error adding testimonial:', err);
      throw err;
    }
  };

  const getTestimonialsByCategory = async (category: string) => {
    try {
      return await TestimonialsService.getTestimonialsByCategory(category);
    } catch (err) {
      console.error('Error fetching testimonials by category:', err);
      return [];
    }
  };

  useEffect(() => {
    loadTestimonials();

    // Set up real-time subscription
    const subscription = TestimonialsService.subscribeToTestimonials((updatedTestimonials) => {
      setTestimonials(updatedTestimonials);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    testimonials,
    loading,
    error,
    averageRating,
    totalReviews,
    addTestimonial,
    getTestimonialsByCategory,
    reloadTestimonials: loadTestimonials
  };
}; 