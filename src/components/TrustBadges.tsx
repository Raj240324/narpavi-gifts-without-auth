import React from 'react';
import { Shield, Award, Star, Heart, Clock, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: "Secure Payments",
      description: "100% secure payment processing"
    },
    {
      icon: <Award className="w-8 h-8 text-pink-400" />,
      title: "Quality Assured",
      description: "Handcrafted with premium materials"
    },
    {
      icon: <Star className="w-8 h-8 text-pink-400" />,
      title: "5-Star Rated",
      description: "Trusted by 1000+ customers"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Made with Love",
      description: "Personalized attention to detail"
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-400" />,
      title: "Quick Turnaround",
      description: "Fast delivery within India"
    },
    {
      icon: <Truck className="w-8 h-8 text-pink-400" />,
      title: "Free Shipping",
      description: "On orders above ₹5,000"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-dancing text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {badge.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges; 