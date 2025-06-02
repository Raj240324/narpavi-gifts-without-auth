import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Palette, Brush, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';

const CustomOrders = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <GradientText variant="large" className="text-4xl mb-4">Custom Orders</GradientText>
            <p className="text-gray-600">Transform your ideas into unique, handcrafted masterpieces</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Palette className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom Art Creation</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Personalized Portraits</span>
                    <p className="text-sm mt-1">Custom portraits from your photos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Resin Art</span>
                    <p className="text-sm mt-1">Custom designs and colors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Mixed Media</span>
                    <p className="text-sm mt-1">Combining various art forms</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <Brush className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design Process</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Consultation</span>
                    <p className="text-sm mt-1">Discuss your vision and requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Design Approval</span>
                    <p className="text-sm mt-1">Review and approve the concept</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-pink-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Creation & Delivery</span>
                    <p className="text-sm mt-1">Handcrafted with care and attention</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Custom Orders?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Unique Design</h3>
                <p className="text-gray-600">One-of-a-kind pieces tailored to your vision</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Quality Materials</h3>
                <p className="text-gray-600">Premium materials for lasting beauty</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">Skilled artists bringing your ideas to life</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Custom Order</h2>
            <p className="text-gray-600 mb-6">Let's create something special together</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/gallery">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders; 