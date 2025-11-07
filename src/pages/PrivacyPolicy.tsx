import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating about your orders and custom requests</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Customer support and assistance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="mb-4">We do not sell or rent your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers (shipping, payment processing)</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure payment processing</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve website functionality</li>
                <li>Remember your preferences</li>
                <li>Analyze website usage</li>
                <li>Provide personalized content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: privacy@royalresinz.com</li>
                <li>Phone: [Your Phone Number]</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Updates to Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
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

export default PrivacyPolicy;