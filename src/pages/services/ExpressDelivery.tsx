import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Truck, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';

const ExpressDelivery = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <GradientText variant="large" className="text-4xl mb-4">Express Delivery Service</GradientText>
            <p className="text-gray-600">Fast and reliable delivery options for your precious gifts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Truck className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Same Day Delivery</h3>
              <p className="text-gray-600">For urgent orders within city limits</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Order before 12 PM</li>
                <li>• Delivery by 6 PM</li>
                <li>• Real-time tracking</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Clock className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Next Day Delivery</h3>
              <p className="text-gray-600">For orders across the country</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Order before 6 PM</li>
                <li>• Delivery next day</li>
                <li>• Priority handling</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Shield className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Shipping</h3>
              <p className="text-gray-600">For international deliveries</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• 3-5 business days</li>
                <li>• Insurance included</li>
                <li>• Tracking provided</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Areas & Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Local Delivery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Same day: $15</li>
                  <li>• Next day: $10</li>
                  <li>• Standard (2-3 days): $5</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">National Delivery</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Express (1-2 days): $25</li>
                  <li>• Standard (3-5 days): $15</li>
                  <li>• Economy (5-7 days): $10</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Order?</h2>
            <p className="text-gray-600 mb-6">Choose your preferred delivery option during checkout</p>
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

export default ExpressDelivery; 