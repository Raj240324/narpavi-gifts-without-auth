import React from 'react';
import { Palette, Heart, Truck, Shield, Star, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const KeyFeatures = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      title: "Handcrafted Art",
      description: "Each piece is lovingly created by hand with attention to every detail"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Custom Portraits",
      description: "Transform your precious memories into stunning pencil portraits"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Resin Masterpieces",
      description: "Beautiful functional art pieces that blend elegance with utility"
    },
    {
      icon: "🚚",
      title: "India Shipping",
      description: "We offer fast and reliable shipping throughout India.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Quality Guarantee",
      description: "We stand behind every piece with our commitment to excellence"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Quick Turnaround",
      description: "Fast processing and delivery without compromising on quality"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">
            Why Choose Narpavi Gifts?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating meaningful art that celebrates life's special moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
