import React, { useState, useRef } from 'react';
import { Upload, Calendar, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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
    }
  };

  const uploadFiles = async (files: FileList): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `custom-orders/${fileName}`;

      try {
        const { error: uploadError, data } = await supabase.storage
          .from('custom-orders')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('custom-orders')
          .getPublicUrl(filePath);

        uploadedUrls.push(publicUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
      }
    }

    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let imageUrls: string[] = [];
      
      // Upload files if any
      if (formData.referenceImages && formData.referenceImages.length > 0) {
        imageUrls = await uploadFiles(formData.referenceImages);
      }

      console.log('Submitting form data:', {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        order_type: formData.projectType,
        description: formData.description,
        budget_range: formData.budget,
        timeline: formData.timeline,
        status: 'pending',
        reference_images: imageUrls
      });

      const { data, error } = await supabase
        .from('custom_orders')
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          order_type: formData.projectType,
          description: formData.description,
          budget_range: formData.budget,
          timeline: formData.timeline,
          status: 'pending',
          reference_images: imageUrls
        })
        .select();

      if (error) {
        console.error('Supabase error details:', {
          code: error.code,
          message: error.message,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }

      console.log('Successfully inserted data:', data);

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
    } catch (error) {
      console.error('Error submitting custom order:', error);
      toast({
        title: "Error",
        description: "Failed to submit custom order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <h3 className="font-semibold text-lg">Contact Information</h3>
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
                        <Label htmlFor="email">Email *</Label>
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
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="portrait">Portrait Drawing</SelectItem>
                            <SelectItem value="pet-portrait">Pet Portrait</SelectItem>
                            <SelectItem value="resin-art">Resin Art Piece</SelectItem>
                            <SelectItem value="memorial">Memorial Piece</SelectItem>
                            <SelectItem value="wedding">Wedding Art</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="size">Size Preference</Label>
                        <Select value={formData.size} onValueChange={(value) => handleInputChange('size', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small (8x10)</SelectItem>
                            <SelectItem value="medium">Medium (11x14)</SelectItem>
                            <SelectItem value="large">Large (16x20)</SelectItem>
                            <SelectItem value="custom">Custom Size</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need it?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Rush Order)</SelectItem>
                            <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="flexible">I'm flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5000">Under ₹5000</SelectItem>
                            <SelectItem value="5000-10000">₹5000 - ₹10,000</SelectItem>
                            <SelectItem value="10000-20000">₹10,000 - ₹20,000</SelectItem>
                            <SelectItem value="20000-plus">₹20,000+</SelectItem>
                            <SelectItem value="discuss">Let's discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your vision in detail. Include any specific requirements, color preferences, style notes, etc."
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label htmlFor="images">Reference Images (Optional)</Label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-pink-400 transition-colors">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="text-sm text-gray-600">
                          <label htmlFor="file-upload" className="cursor-pointer text-pink-400 hover:text-pink-500">
                            Upload files
                          </label>
                          <span> or drag and drop</span>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                      <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only" 
                        multiple 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </div>
                    {formData.referenceImages && formData.referenceImages.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          {formData.referenceImages.length} file(s) selected
                        </p>
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-pink-400 hover:bg-pink-500 text-white text-lg py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Custom Order Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Process & Pricing */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-400 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Submit Your Request</h4>
                    <p className="text-sm text-gray-600">Fill out the form below with details about your vision, including project type, size, timeline, and budget. Upload any reference images you have.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-400 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Receive a Personalized Quote & Timeline</h4>
                    <p className="text-sm text-gray-600">We will review your submission and get back to you within 24 hours with a detailed quote and estimated timeline for completion.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-400 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Art Creation & Updates</h4>
                    <p className="text-sm text-gray-600">Once the quote is approved, we begin crafting your custom piece. We'll keep you updated with progress photos during the creation process to ensure it meets your expectations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-400 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold">Final Approval & Delivery</h4>
                    <p className="text-sm text-gray-600">Upon completion, you'll receive final photos for approval. Once approved, your finished piece is carefully packaged and shipped securely to your address in India.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Pricing Guide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Detailed Pricing Guide (Estimates)</CardTitle>
                <CardDescription>
                  Please note that these are starting prices. A final quote will be provided based on the complexity and specific requirements of your custom order.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Pencil Portraits</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Small (8x10 inches): Starting from ₹5000</li>
                    <li>Medium (11x14 inches): Starting from ₹8000</li>
                    <li>Large (16x20 inches): Starting from ₹12000</li>
                    <li>Additional subjects (people/pets): +₹2000 per subject</li>
                    <li>Complex backgrounds: Starting from +₹1000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Resin Art Pieces</h3>
                   <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Coaster Set (4 pcs): Starting from ₹2500</li>
                    <li>Small Tray: Starting from ₹3500</li>
                    <li>Medium Wall Art: Starting from ₹6000</li>
                    <li>Large Wall Art: Starting from ₹10000</li>
                    <li>Inclusions (flowers, glitter, etc.): Prices vary based on material</li>
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold text-xl mb-2">Resin Gifts & Keepsakes</h3>
                   <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Bookmarks: Starting from ₹500</li>
                    <li>Keychains: Starting from ₹300</li>
                    <li>Memorial Pieces: Starting from ₹4000 (varies based on size and inclusions)</li>
                    <li>Jewelry (pendants, earrings): Starting from ₹800</li>
                  </ul>
                </div>
                 <div>
                  <h3 className="font-semibold text-xl mb-2">Timeline Estimates</h3>
                   <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Standard Orders: 2-3 weeks</li>
                    <li>Complex Orders: 3-4 weeks or more</li>
                    <li>Rush Orders: 1 week (additional 50% fee)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery of Past Work */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-dancing text-4xl text-gray-800 mb-4">Past Custom Works</h2>
            <p className="text-gray-600">Get inspired by some of our previous custom pieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customWorks.map((work, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">{work.title}</h3>
                  <p className="text-sm text-gray-600">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;
