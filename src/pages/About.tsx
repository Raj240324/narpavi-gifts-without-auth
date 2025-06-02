import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import GradientText from '@/components/ui/gradient-text';
import { Heart, Palette, Star, Gift, Shield, Sparkles, Brush, Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border-2 border-pink-200/50 rounded-full animate-spin-slow"></div>
            <div className="absolute w-32 h-32 border-2 border-purple-200/50 rounded-full animate-spin-slow animation-delay-1000" style={{ animationDirection: 'reverse' }}></div>
          </div>
          <div className="relative">
            <h1 className="font-dancing text-6xl md:text-7xl text-gray-800 mb-6">About Narpavi Gifts</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Where <GradientText variant="bold">creativity meets tradition</GradientText>, and every piece tells a unique story
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card className="bg-gradient-to-br from-pink-50 to-purple-50 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl border-0">
            <CardContent className="p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/20 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/20 rounded-full -ml-20 -mb-20"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-pink-500" />
                  <h2 className="font-dancing text-4xl text-gray-800">
                    <GradientText variant="large">Our Mission</GradientText>
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To create <GradientText variant="bold">meaningful connections</GradientText> through art, 
                  transforming precious moments into timeless pieces that capture emotions and tell unique stories. 
                  We strive to deliver exceptional craftsmanship and personalized experiences that make every gift 
                  truly special.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl border-0">
            <CardContent className="p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200/20 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200/20 rounded-full -ml-20 -mb-20"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Brush className="w-6 h-6 text-purple-500" />
                  <h2 className="font-dancing text-4xl text-gray-800">
                    <GradientText variant="large">Our Vision</GradientText>
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the <GradientText variant="bold">premier destination</GradientText> for handcrafted gifts 
                  that celebrate life's most precious moments. We envision a world where every gift tells a story, 
                  where art bridges connections, and where our creations become cherished heirlooms passed down 
                  through generations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 rounded-full"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-pink-500" />
                <h2 className="font-dancing text-4xl text-gray-800">
                  <GradientText variant="large">Our Story</GradientText>
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Welcome to Narpavi Gifts, where creativity meets tradition. Our journey began with a 
                simple passion for creating meaningful, personalized gifts that capture life's most 
                precious moments. We believe that every gift should tell a story and hold a special 
                place in someone's heart.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Our expertise lies in two distinct art forms: the timeless beauty of pencil art and 
                the modern elegance of resin creations. Each pencil portrait is meticulously crafted 
                to capture not just the likeness, but the essence and personality of the subject. 
                Our resin art pieces, on the other hand, transform everyday items into stunning 
                works of art that blend functionality with beauty.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                What sets us apart is our commitment to personalization. We work closely with our 
                clients to understand their vision and create pieces that are truly one-of-a-kind. 
                Whether it's a custom portrait, a resin art piece, or a unique gift, each creation 
                is infused with care, attention to detail, and a touch of tradition.
              </p>
              <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Link to="/custom-orders" className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Commission Your Piece
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl -z-10"></div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop" 
                alt="Artist at work"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop" 
                alt="Studio workspace"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=300&fit=crop" 
                alt="Art supplies"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop" 
                alt="Work in progress"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Palette className="w-8 h-8 text-pink-500" />
              <h2 className="font-dancing text-4xl text-gray-800">
                <GradientText variant="large">Our Creative Process</GradientText>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every piece is carefully crafted through a detailed process that ensures exceptional quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Consultation", description: "We discuss your vision, review reference materials, and plan the perfect piece" },
              { icon: <Palette className="w-8 h-8" />, title: "Sketching", description: "Initial sketches are created and refined until we capture the perfect likeness" },
              { icon: <Star className="w-8 h-8" />, title: "Creation", description: "Using professional-grade materials, your piece is carefully crafted by hand" },
              { icon: <Shield className="w-8 h-8" />, title: "Delivery", description: "Your finished piece is carefully packaged and shipped with love" }
            ].map((step, index) => (
              <Card key={index} className="text-center transform hover:scale-105 transition-all duration-500 border-0">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-50"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="text-pink-500 mb-6">{step.icon}</div>
                    <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-16 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-8 h-8 text-pink-500" />
              <h2 className="font-dancing text-4xl text-gray-800">
                <GradientText variant="large">Our Values</GradientText>
              </h2>
            </div>
            <p className="text-xl text-gray-600">What drives us to create exceptional art every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Quality Craftsmanship", description: "Every piece is created with meticulous attention to detail using only the finest materials" },
              { title: "Personal Connection", description: "We take time to understand your story and ensure every piece reflects your unique vision" },
              { title: "Lasting Memories", description: "Our art is designed to be treasured for generations, capturing moments that matter most" }
            ].map((value, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {index === 0 ? <Brush className="w-8 h-8 text-white" /> :
                   index === 1 ? <Heart className="w-8 h-8 text-white" /> :
                   <Camera className="w-8 h-8 text-white" />}
                </div>
                <h3 className="font-semibold text-2xl text-gray-800 mb-4">
                  <GradientText variant="bold">{value.title}</GradientText>
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Behind the Scenes */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-8 h-8 text-pink-500" />
            <h2 className="font-dancing text-4xl text-gray-800">
              <GradientText variant="large">Behind the Scenes</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop", title: "Our Studio" },
              { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", title: "Our Tools" },
              { image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop", title: "Work in Progress" }
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-2xl transform group-hover:scale-110 transition-transform duration-500">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
