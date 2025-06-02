import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles, Heart, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';
import KeyFeatures from '@/components/KeyFeatures';

const Home = () => {
  const featuredWorks = [{
    id: '1',
    name: 'Custom Pet Portrait',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
    category: 'Pencil Art',
    description: 'Capturing the essence of your beloved pet in detailed pencil work'
  }, {
    id: '2',
    name: 'Ocean Wave Resin Tray',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
    category: 'Resin Art',
    description: 'Handcrafted serving tray with beautiful ocean wave design'
  }, {
    id: '3',
    name: 'Botanical Resin Bookmark',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=400&fit=crop',
    category: 'Resin Gifts',
    description: 'Delicate bookmarks featuring real pressed flowers'
  }, {
    id: '4',
    name: 'Family Portrait Sketch',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
    category: 'Pencil Art',
    description: 'Capturing precious family moments in artistic detail'
  }];
  const testimonials = [{
    name: 'Sarah Johnson',
    rating: 5,
    review: 'The custom pet portrait exceeded all my expectations! The detail and emotion captured in pencil is absolutely stunning.',
    product: 'Custom Pet Portrait'
  }, {
    name: 'Mike Chen',
    rating: 5,
    review: 'Beautiful resin coasters that look amazing in our living room. The ocean theme is so realistic and the quality is outstanding.',
    product: 'Ocean Resin Coasters'
  }, {
    name: 'Emily Davis',
    rating: 5,
    review: 'Perfect gift for my book-loving sister! The botanical bookmark is delicate and gorgeous. Fast shipping too!',
    product: 'Botanical Bookmark'
  }];
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-green-100" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pink-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-purple-200/30 rounded-full animate-bounce" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-green-200/30 rounded-full animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-pink-100/40 rounded-full animate-bounce" style={{
          animationDelay: '3s'
        }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Handcrafted with Love</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          </div>

          <h1 className="font-dancing text-6xl md:text-8xl text-gray-800 mb-6 relative">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Narpavi Gifts
            </span>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
              <Palette className="w-8 h-8 md:w-12 md:h-12 text-pink-400 animate-bounce" />
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Transform precious memories into stunning 
            <span className="font-semibold text-pink-600"> pencil portraits</span> and 
            <span className="font-semibold text-purple-600"> resin masterpieces</span>
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Each piece tells a unique story, lovingly crafted to capture life's most beautiful moments
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/gallery" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore Our Gallery
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <Link to="/custom-orders" className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Commission Art
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <span>500+ Happy Customers</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>✨ Handcrafted Quality</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>🚚 Worldwide Shipping</span>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Discover More</span>
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <div className="w-32 h-32 border-2 border-pink-200/50 rounded-full animate-spin" style={{
          animationDuration: '20s'
        }}></div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <div className="w-24 h-24 border-2 border-purple-200/50 rounded-full animate-spin" style={{
          animationDuration: '15s',
          animationDirection: 'reverse'
        }}></div>
        </div>
      </section>

      {/* Key Features Section */}
      <KeyFeatures />

      {/* Brand Story */}
      <section className="py-20 bg-white scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every piece begins with a vision and ends with a masterpiece. We combine traditional 
              pencil artistry with modern resin techniques to create one-of-a-kind gifts that 
              celebrate life's special moments. From custom portraits to decorative art pieces, 
              each creation is infused with passion and attention to detail.
            </p>
            <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50 scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most cherished handcrafted pieces, each one unique and made with love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredWorks.map((work, index) => <div key={work.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white rounded-lg" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative overflow-hidden">
                  <img src={work.image} alt={work.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                
                <div className="p-4">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{work.category}</p>
                    <h3 className="font-semibold text-gray-800 group-hover:text-pink-400 transition-colors">
                      {work.name}
                    </h3>
                    <p className="text-sm text-gray-600">{work.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-pink-400 hover:bg-pink-500 text-white px-8">
              <Link to="/gallery">View Complete Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">What We Create</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From custom portraits to unique resin art, we specialize in creating meaningful pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50">
              <h3 className="font-dancing text-2xl text-gray-800 mb-4">Custom Portraits</h3>
              <p className="text-gray-600">Bringing your loved ones to life through detailed pencil artistry</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-green-50">
              <h3 className="font-dancing text-2xl text-gray-800 mb-4">Resin Art</h3>
              <p className="text-gray-600">Functional art pieces that blend beauty with everyday utility</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-pink-50">
              <h3 className="font-dancing text-2xl text-gray-800 mb-4">Custom Gifts</h3>
              <p className="text-gray-600">Personalized keepsakes that celebrate special moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of customers who have received our handcrafted pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <div key={index} style={{
            animationDelay: `${index * 150}ms`
          }}>
                <TestimonialCard {...testimonial} />
              </div>)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-400 to-purple-400 scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="font-dancing text-4xl md:text-5xl mb-6">Ready to Create Something Special?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life with a custom piece that's uniquely yours
            </p>
            <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-3 text-pink-500">
              <Link to="/custom-orders">Start Your Commission</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
