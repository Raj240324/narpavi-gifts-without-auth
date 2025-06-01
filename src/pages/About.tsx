
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">About Artisan Resin</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the passion and craftsmanship behind every unique piece we create
          </p>
        </div>

        {/* Artist Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="font-dancing text-4xl text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              What started as a simple hobby in my college dorm room has blossomed into a passion-driven 
              business that brings joy to families across the country. I'm Sarah, the artist behind 
              Artisan Resin, and I believe that every moment worth remembering deserves to be captured 
              in something beautiful and lasting.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey began with pencil portraits of my friends' pets. I was amazed by how a simple 
              drawing could capture not just their appearance, but their personality and spirit. This 
              led me to explore resin art, where I discovered the magic of preserving memories in 
              crystal-clear, touchable keepsakes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, I combine traditional pencil artistry with modern resin techniques to create 
              one-of-a-kind pieces that tell your story. Each commission is a collaboration between 
              my artistic vision and your cherished memories.
            </p>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white">
              <Link to="/custom-orders">Commission Your Piece</Link>
            </Button>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop" 
              alt="Artist at work"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop" 
              alt="Studio workspace"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl text-gray-800 mb-4">Our Creative Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every piece is carefully crafted through a detailed process that ensures exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  We discuss your vision, review reference materials, and plan the perfect piece
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Sketching</h3>
                <p className="text-gray-600 text-sm">
                  Initial sketches are created and refined until we capture the perfect likeness
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Creation</h3>
                <p className="text-gray-600 text-sm">
                  Using professional-grade materials, your piece is carefully crafted by hand
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2">Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Your finished piece is carefully packaged and shipped with love
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us to create exceptional art every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every piece is created with meticulous attention to detail using only the finest materials
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Personal Connection</h3>
              <p className="text-gray-600">
                We take time to understand your story and ensure every piece reflects your unique vision
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Lasting Memories</h3>
              <p className="text-gray-600">
                Our art is designed to be treasured for generations, capturing moments that matter most
              </p>
            </div>
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="text-center">
          <h2 className="font-dancing text-4xl text-gray-800 mb-8">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop" 
                alt="Studio workspace"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Our Studio</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
                alt="Art supplies"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Our Tools</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop" 
                alt="Work in progress"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">Work in Progress</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
