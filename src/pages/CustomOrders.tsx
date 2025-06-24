import React, { useState, useRef } from 'react';
import { Upload, Calendar, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const CustomOrders = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    size: '',
    timeline: '',
    budget: '',
    description: '',
    referenceImages: null as FileList | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, referenceImages: e.target.files }));
      // Simulate file upload preview
      const fileNames = Array.from(e.target.files).map(file => file.name);
      setUploadedFiles(fileNames);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Custom Order Submitted!",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        size: '',
        timeline: '',
        budget: '',
        description: '',
        referenceImages: null
      });
      setUploadedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const customWorks = [
    {
      title: 'Wedding Portrait',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      description: 'Detailed pencil portrait of the happy couple'
    },
    {
      title: 'Memorial Pet Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      description: 'Loving tribute to a beloved family pet'
    },
    {
      title: 'Baby Keepsake',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop',
      description: 'Resin piece with hospital bracelet and footprints'
    },
    {
      title: 'Family Tree Art',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Multi-generational family portrait composition'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Custom Orders</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bring your vision to life with a personalized piece. Whether it's a portrait, memorial piece, 
            or unique gift, we'll work with you to create something truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div className="order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Custom Order</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours with a quote and timeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Project Details</h3>
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pencil-portrait">Pencil Portrait</SelectItem>
                          <SelectItem value="resin-art">Resin Art</SelectItem>
                          <SelectItem value="custom-painting">Custom Painting</SelectItem>
                          <SelectItem value="digital-art">Digital Art</SelectItem>
                          <SelectItem value="mixed-media">Mixed Media</SelectItem>
                          <SelectItem value="memorial-piece">Memorial Piece</SelectItem>
                          <SelectItem value="wedding-art">Wedding Art</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="size">Size Preference</Label>
                        <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (8x10 inches)</SelectItem>
                            <SelectItem value="medium">Medium (11x14 inches)</SelectItem>
                            <SelectItem value="large">Large (16x20 inches)</SelectItem>
                            <SelectItem value="custom">Custom Size</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                            <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                            <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100">Under $100</SelectItem>
                          <SelectItem value="100-250">$100 - $250</SelectItem>
                          <SelectItem value="250-500">$250 - $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1000</SelectItem>
                          <SelectItem value="over-1000">Over $1000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Project Description</h3>
                    <div>
                      <Label htmlFor="description">Detailed Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Tell us about your vision, any specific requirements, colors, style preferences, and the story behind your project..."
                        rows={6}
                        required
                      />
                    </div>
                  </div>

                  {/* Reference Images */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Reference Images</h3>
                    <div>
                      <Label htmlFor="referenceImages">Upload Reference Images</Label>
                      <div className="mt-2">
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="referenceImages"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full"
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">Uploaded files:</p>
                          <ul className="text-sm text-gray-500">
                            {uploadedFiles.map((fileName, index) => (
                              <li key={index}>{fileName}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-pink-600 hover:bg-pink-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Custom Order Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Information and Examples */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Submit Your Request</h4>
                    <p className="text-sm text-gray-600">Fill out the form with your vision and requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Get a Quote</h4>
                    <p className="text-sm text-gray-600">We'll review your request and provide a detailed quote</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Approval & Creation</h4>
                    <p className="text-sm text-gray-600">Once approved, we'll start creating your custom piece</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Delivery</h4>
                    <p className="text-sm text-gray-600">Your finished piece will be carefully packaged and shipped</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pencil Portraits</span>
                  <span className="font-semibold">$50 - $200</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Resin Art</span>
                  <span className="font-semibold">$100 - $500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Custom Paintings</span>
                  <span className="font-semibold">$150 - $800</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Digital Art</span>
                  <span className="font-semibold">$75 - $300</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    * Prices vary based on size, complexity, and materials. 
                    We'll provide a detailed quote for your specific project.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Example Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Example Custom Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {customWorks.map((work, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-24 object-cover rounded-lg mb-2"
                      />
                      <h4 className="font-semibold text-sm text-gray-800">{work.title}</h4>
                      <p className="text-xs text-gray-600">{work.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;
