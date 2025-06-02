import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: email
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
      }
      
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in placing an order for gifts from Narpavi Gifts.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp for quick orders...",
    });
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/narpavi_gifts?igsh=cWowMHlidXB5M3V1', '_blank');
    toast({
      title: "Opening Instagram",
      description: "Check out our latest work on Instagram...",
    });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@narpavigifts.com';
    toast({
      title: "Opening Email",
      description: "Opening your email client...",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <img 
                  src="/np-logo.png" 
                  alt="Narpavi Gifts Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-dancing text-xl">Narpavi Gifts</span>
            </div>
            <p className="text-gray-400 text-sm">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
                Handcrafted with Love
              </span>
              . Creating unique, personalized pieces that tell your story.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleInstagramClick}
                className="hover:bg-purple-600"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleWhatsAppClick}
                className="hover:bg-green-600"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleEmailClick}
                className="hover:bg-pink-600"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/custom-orders" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact for Orders */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Order Now</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp Orders
                </button>
              </li>
              <li>
                <button 
                  onClick={handleInstagramClick}
                  className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-3 h-3" />
                  Instagram Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3 h-3" />
                  Email Us
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <p className="text-gray-400 text-sm">
              Subscribe for exclusive previews and special offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <Input 
                type="email"
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                required
              />
              <Button 
                type="submit"
                className="bg-pink-400 hover:bg-pink-500"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Narpavi Gifts. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
