import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, Users, Package, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';

const CorporateGifting = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/services" className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="space-y-8">
          <div className="text-center">
            <GradientText variant="large" className="text-4xl mb-4">Corporate Gifting</GradientText>
            <p className="text-gray-600">Elevate your corporate relationships with thoughtful, custom gifts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Building2 className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Gifts</h3>
              <p className="text-gray-600">Strengthen client relationships</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Custom branding</li>
                <li>• Premium packaging</li>
                <li>• Bulk discounts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Users className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Employee Recognition</h3>
              <p className="text-gray-600">Celebrate your team</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Milestone gifts</li>
                <li>• Team events</li>
                <li>• Custom designs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Events</h3>
              <p className="text-gray-600">Make events memorable</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Event favors</li>
                <li>• Welcome gifts</li>
                <li>• Custom themes</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Corporate Gifting Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mb-2">1</div>
                <h3 className="font-medium text-gray-900 mb-2">Consultation</h3>
                <p className="text-sm text-gray-600">Understand your needs and goals</p>
              </div>
              <div>
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mb-2">2</div>
                <h3 className="font-medium text-gray-900 mb-2">Design</h3>
                <p className="text-sm text-gray-600">Create custom gift concepts</p>
              </div>
              <div>
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mb-2">3</div>
                <h3 className="font-medium text-gray-900 mb-2">Production</h3>
                <p className="text-sm text-gray-600">Handcraft with care</p>
              </div>
              <div>
                <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center mb-2">4</div>
                <h3 className="font-medium text-gray-900 mb-2">Delivery</h3>
                <p className="text-sm text-gray-600">On-time shipping & tracking</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Corporate Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">For Your Business</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Brand reinforcement</li>
                  <li>• Client retention</li>
                  <li>• Employee satisfaction</li>
                  <li>• Tax benefits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Our Commitment</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quality assurance</li>
                  <li>• Timely delivery</li>
                  <li>• Custom solutions</li>
                  <li>• Dedicated support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Corporate Gifting Program</h2>
            <p className="text-gray-600 mb-6">Let's create meaningful connections through thoughtful gifts</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/gallery">View Corporate Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateGifting; 