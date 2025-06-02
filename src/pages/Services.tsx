import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gift, Truck, CreditCard, Users, Package, Palette } from 'lucide-react';
import GradientText from '@/components/ui/gradient-text';

const Services = () => {
  const services = [
    {
      title: 'Gift Wrapping',
      description: 'Add an extra touch of elegance to your gifts with our premium wrapping service',
      icon: Gift,
      path: '/services/gift-wrapping',
      features: ['Premium wrapping paper', 'Luxurious ribbons & bows', 'Custom gift tags']
    },
    {
      title: 'Express Delivery',
      description: 'Fast and reliable delivery options for your precious gifts',
      icon: Truck,
      path: '/services/express-delivery',
      features: ['Same day delivery', 'Next day delivery', 'International shipping']
    },
    {
      title: 'Gift Cards',
      description: 'Let your loved ones choose their perfect gift',
      icon: CreditCard,
      path: '/services/gift-cards',
      features: ['Digital gift cards', 'Physical gift cards', 'Custom amounts']
    },
    {
      title: 'Bulk Orders',
      description: 'Special rates for corporate and group orders',
      icon: Users,
      path: '/services/bulk-orders',
      features: ['Corporate gifts', 'Wedding favors', 'Event souvenirs']
    },
    {
      title: 'Custom Orders',
      description: 'Commission your unique piece of art',
      icon: Palette,
      path: '/custom-orders',
      features: ['Personalized designs', 'Custom sizes', 'Special requests']
    },
    {
      title: 'Art Workshops',
      description: 'Learn from our expert artists',
      icon: Package,
      path: '/services/workshops',
      features: ['Group sessions', 'Private lessons', 'Corporate events']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GradientText variant="large" className="text-4xl mb-4">Our Services</GradientText>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium services designed to make your gift-giving experience special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-pink-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full">
                <Link to={service.path}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-pink-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">
            We're here to help you create the perfect gift-giving experience. Contact us for special requests or inquiries.
          </p>
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
  );
};

export default Services; 