
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew = false 
}) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-pink-400 text-white text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{category}</p>
          <h3 className="font-semibold text-gray-800 group-hover:text-pink-400 transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">${price}</span>
            <Button 
              size="sm" 
              className="bg-pink-400 hover:bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
