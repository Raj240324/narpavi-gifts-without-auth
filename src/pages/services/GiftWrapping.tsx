import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';

const GiftWrapping = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <GradientText variant="large" className="text-4xl mb-4">Gift Wrapping Service</GradientText>
            <p className="text-gray-600">Add an extra touch of elegance to your gifts with our premium wrapping service</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Our Wrapping Options</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Premium Paper</h3>
                    <p className="text-gray-600">High-quality wrapping paper with elegant patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Ribbon & Bows</h3>
                    <p className="text-gray-600">Luxurious ribbons and decorative bows</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Custom Tags</h3>
                    <p className="text-gray-600">Personalized gift tags with your message</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">How It Works</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 font-medium mr-3">1</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Select Your Gift</h3>
                    <p className="text-gray-600">Choose from our collection or bring your own gift</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 font-medium mr-3">2</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Choose Wrapping Style</h3>
                    <p className="text-gray-600">Select from our premium wrapping options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 font-medium mr-3">3</span>
                  <div>
                    <h3 className="font-medium text-gray-900">Add Personal Touch</h3>
                    <p className="text-gray-600">Include a custom message or special instructions</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Wrap Your Gift?</h2>
            <p className="text-gray-600 mb-6">Add our premium wrapping service to your order or visit our store</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/gallery">Shop Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftWrapping; 