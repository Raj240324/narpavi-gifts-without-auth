import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">By accessing and using Narpavi Gifts' website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Custom Orders and Commissions</h2>
              <p className="mb-4">When placing custom orders or commissions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All custom requests must be submitted through our official channels</li>
                <li>A 50% deposit is required to begin work on custom pieces</li>
                <li>Final payment is due upon completion and before shipping</li>
                <li>Custom orders are non-refundable once work has begun</li>
                <li>Estimated completion times are provided but not guaranteed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payment and Pricing</h2>
              <p className="mb-4">Our payment terms include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prices are in Indian Rupees (INR)</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be made through our secure payment system</li>
                <li>Additional shipping charges may apply</li>
                <li>Custom orders may require additional fees</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Shipping and Delivery</h2>
              <p className="mb-4">Our shipping policies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shipping times are estimates and not guaranteed</li>
                <li>We are not responsible for delays beyond our control</li>
                <li>International shipping may be subject to customs fees</li>
                <li>Fragile items are carefully packaged but shipping insurance is recommended</li>
                <li>Tracking information will be provided when available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Returns and Refunds</h2>
              <p className="mb-4">Our return policy:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom orders are non-refundable</li>
                <li>Ready-made items may be returned within 7 days of delivery</li>
                <li>Items must be in original condition</li>
                <li>Shipping costs for returns are the customer's responsibility</li>
                <li>Refunds will be processed within 14 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
              <p className="mb-4">Regarding intellectual property:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All artwork and designs are the property of Narpavi Gifts</li>
                <li>Custom designs may not be reproduced without permission</li>
                <li>Photographs of our work may not be used commercially</li>
                <li>We retain the right to display commissioned work in our portfolio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">Narpavi Gifts is not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or data</li>
                <li>Delays in shipping or delivery</li>
                <li>Damage during shipping (unless insured)</li>
                <li>Color variations in photographs vs. actual items</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="mb-4">For any questions regarding these terms, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: terms@narpavigifts.com</li>
                <li>Phone: [Your Phone Number]</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of the modified terms.</p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <Link to="/">
              <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 