
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  rating: number;
  review: string;
  product: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  review,
  product,
  avatar
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
          
          {/* Review */}
          <p className="text-gray-600 italic leading-relaxed">"{review}"</p>
          
          {/* Product */}
          <p className="text-sm text-pink-400 font-medium">Product: {product}</p>
          
          {/* Customer */}
          <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-xs text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
