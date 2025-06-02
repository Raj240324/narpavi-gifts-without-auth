import React, { useState } from 'react';
import { Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          email: newsletterEmail
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
      
      setNewsletterEmail('');
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
    const message = encodeURIComponent("Hi! I'm interested in your gifts from Narpavi Gifts. Could you please share more details about your services?");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp for instant communication...",
    });
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/narpavi_gifts?igsh=cWowMHlidXB5M3V1', '_blank');
    toast({
      title: "Opening Instagram",
      description: "Check out our latest work on Instagram...",
    });
  };

  const handleFAQClick = () => {
    window.location.href = '/faq';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our gifts or ready to start a custom project? We'd love to hear from you!
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Quick Contact for Orders</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-6 py-3 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp for Orders
            </Button>
            <Button 
              onClick={handleInstagramClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center gap-2 px-6 py-3 text-lg"
            >
              <Instagram className="w-5 h-5" />
              View Our Work
            </Button>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            For instant responses and quick orders, message us on WhatsApp or check our latest work on Instagram
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="custom-order">Custom Order Question</SelectItem>
                        <SelectItem value="existing-order">Existing Order</SelectItem>
                        <SelectItem value="shipping">Shipping & Returns</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or ask us anything..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-pink-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@narpavigifts.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-gray-600 hover:text-green-500"
                      onClick={handleWhatsAppClick}
                    >
                      Message us for quick orders
                    </Button>
                    <p className="text-sm text-gray-500">Instant responses during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-pink-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Studio Location</h3>
                    <p className="text-gray-600">India</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-pink-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Monday - Saturday, 9AM - 6PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Follow Our Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  See our latest work and behind-the-scenes content on social media
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-gradient-to-r from-purple-400 to-pink-400 text-purple-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white"
                    onClick={handleInstagramClick}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow on Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-green-400 text-green-600 hover:bg-green-400 hover:text-white"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Subscribe to our newsletter for exclusive previews, special offers, and art tips
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <Input 
                    type="email"
                    placeholder="Your email address" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-12">
          <h2 className="font-dancing text-4xl text-gray-800 mb-4">Quick Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions for instant answers about our services, 
            shipping, and custom orders.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8"
            onClick={handleFAQClick}
          >
            View FAQ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
