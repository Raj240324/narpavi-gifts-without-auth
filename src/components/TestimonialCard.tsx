import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MapPin } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  product: string;
  category: string;
  date: string;
  location: string;
  verified: boolean;
}

// Legacy interface for backward compatibility with Home page
interface LegacyTestimonial {
  name: string;
  rating: number;
  review: string;
  product: string;
}

interface TestimonialCardProps {
  testimonial?: Review;
  // Legacy props for backward compatibility
  name?: string;
  rating?: number;
  review?: string;
  product?: string;
  category?: string;
  date?: string;
  location?: string;
  verified?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  // Handle both new and legacy interfaces
  let testimonialData: Review;
  
  if (props.testimonial) {
    // New interface - testimonial prop
    testimonialData = props.testimonial;
  } else {
    // Legacy interface - individual props
    testimonialData = {
      id: Date.now(), // Generate temporary ID
      name: props.name || 'Anonymous',
      rating: props.rating || 5,
      review: props.review || '',
      product: props.product || 'Product',
      category: props.category || props.product || 'General',
      date: props.date || new Date().toISOString().split('T')[0],
      location: props.location || '',
      verified: props.verified || false
    };
  }

  const { name, rating, review, product, category, date, location, verified } = testimonialData;

  return (
    <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-4">
          {/* Header with rating and date */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          
          {/* Review */}
          <p className="text-gray-700 text-sm leading-relaxed italic">"{review}"</p>
          
          {/* Product and Category */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-800">Product: {product}</p>
            <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
          
        {/* Customer Info */}
        <div className="flex items-center space-x-3 pt-4 mt-4 border-t border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            {name.charAt(0)}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-gray-800 text-sm">{name}</p>
              {verified && (
                <span className="text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded">
                  ✓ Verified
                </span>
              )}
            </div>
            {location && (
              <div className="flex items-center space-x-1 text-xs text-gray-600">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
