import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, Gift, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';

const GiftCards = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <GradientText variant="large" className="text-4xl mb-4">Gift Cards</GradientText>
            <p className="text-gray-600">Let your loved ones choose their perfect gift with our flexible gift card options</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <CreditCard className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Gift Cards</h3>
              <p className="text-gray-600">Instant delivery via email</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Instant delivery</li>
                <li>• Custom amounts</li>
                <li>• Personal message</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Gift className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Physical Gift Cards</h3>
              <p className="text-gray-600">Beautifully designed cards</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Premium design</li>
                <li>• Gift box included</li>
                <li>• Express shipping</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Package className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Gift Cards</h3>
              <p className="text-gray-600">For business gifting</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Bulk orders</li>
                <li>• Custom branding</li>
                <li>• Volume discounts</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Digital Gift Cards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Choose amount</li>
                  <li>• Add personal message</li>
                  <li>• Pay securely</li>
                  <li>• Instant delivery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Physical Gift Cards</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Select design</li>
                  <li>• Choose amount</li>
                  <li>• Add message</li>
                  <li>• Express shipping</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Purchase a Gift Card?</h2>
            <p className="text-gray-600 mb-6">Choose your preferred gift card type and amount</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/gallery">Browse Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards; 