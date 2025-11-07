import { supabase } from './supabase';
import type { Review, CreateReviewData } from './supabase';

export class TestimonialsService {
  private static TABLE_NAME = 'testimonials';

  // Get all testimonials
  static async getAllTestimonials(): Promise<Review[]> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllTestimonials:', error);
      return [];
    }
  }

  // Get testimonials by category
  static async getTestimonialsByCategory(category: string): Promise<Review[]> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching testimonials by category:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getTestimonialsByCategory:', error);
      return [];
    }
  }

  // Create a new testimonial
  static async createTestimonial(testimonialData: CreateReviewData): Promise<Review | null> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .insert([{
          ...testimonialData,
          date: new Date().toISOString().split('T')[0],
          verified: testimonialData.verified || false,
          location: testimonialData.location || ''
        }])
        .select()
        .single();

      if (error) {
        console.error('Error creating testimonial:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in createTestimonial:', error);
      return null;
    }
  }

  // Update a testimonial (for admin purposes)
  static async updateTestimonial(id: number, updates: Partial<Review>): Promise<Review | null> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating testimonial:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in updateTestimonial:', error);
      return null;
    }
  }

  // Delete a testimonial (for admin purposes)
  static async deleteTestimonial(id: number): Promise<boolean> {
    try {
      const { error } = await supabase
        .from(this.TABLE_NAME)
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting testimonial:', error);
        throw error;
      }

      return true;
    } catch (error) {
      console.error('Error in deleteTestimonial:', error);
      return false;
    }
  }

  // Get testimonials with real-time subscription
  static subscribeToTestimonials(callback: (testimonials: Review[]) => void) {
    return supabase
      .channel('testimonials_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: this.TABLE_NAME
        },
        async () => {
          // Fetch updated data when changes occur
          const testimonials = await this.getAllTestimonials();
          callback(testimonials);
        }
      )
      .subscribe();
  }

  // Get average rating
  static async getAverageRating(): Promise<number> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select('rating');

      if (error) {
        console.error('Error fetching ratings:', error);
        return 0;
      }

      if (!data || data.length === 0) {
        return 0;
      }

      const totalRating = data.reduce((sum, item) => sum + item.rating, 0);
      return Math.round((totalRating / data.length) * 10) / 10; // Round to 1 decimal place
    } catch (error) {
      console.error('Error in getAverageRating:', error);
      return 0;
    }
  }

  // Get total review count
  static async getTotalReviewCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from(this.TABLE_NAME)
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error fetching review count:', error);
        return 0;
      }

      return count || 0;
    } catch (error) {
      console.error('Error in getTotalReviewCount:', error);
      return 0;
    }
  }
} 

export { CreateReviewData };
