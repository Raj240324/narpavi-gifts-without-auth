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
    <Card className="h-full bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div className="space-y-4">
          {/* Stars */}
          <div className="flex space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xl ${i < rating ? 'opacity-100' : 'opacity-30'}`}
              >
                ★
              </span>
            ))}
          </div>
          
          {/* Review */}
          <p className="text-gray-700 text-lg leading-relaxed italic">"{review}"</p>
          
          {/* Product */}
          <p className="text-sm text-pink-600 font-semibold">Product: {product}</p>
        </div>
          
        {/* Customer */}
        <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-gray-200">
          {avatar ? (
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-400">
                <img src={avatar} alt={`${name}'s avatar`} className="w-full h-full object-cover" />
              </div>
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
          
          <div>
            <p className="font-bold text-gray-800 text-base">{name}</p>
            <p className="text-xs text-gray-600">Verified Customer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
