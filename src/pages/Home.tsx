import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles, Heart, Palette, Star, Gift, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TestimonialCard from '@/components/TestimonialCard';
import KeyFeatures from '@/components/KeyFeatures';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const featuredWorks = [{
    id: '1',
    name: 'Custom Portrait',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
    category: 'Pencil Art',
    description: 'Handcrafted pencil portraits that capture the essence of your loved ones'
  }, {
    id: '2',
    name: 'Resin Art Tray',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
    category: 'Resin Art',
    description: 'Beautiful resin trays with unique designs and patterns'
  }, {
    id: '3',
    name: 'Custom Bookmark',
    image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=400&fit=crop',
    category: 'Resin Gifts',
    description: 'Personalized resin bookmarks with embedded designs'
  }, {
    id: '4',
    name: 'Family Portrait',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
    category: 'Pencil Art',
    description: 'Detailed family portraits that capture precious moments'
  }];

  const galleryCategories = [
    {
      id: '1',
      name: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
      count: 24
    },
    {
      id: '2',
      name: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
      count: 18
    },
    {
      id: '3',
      name: 'Custom Gifts',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&h=600&fit=crop',
      count: 32
    },
    {
      id: '4',
      name: 'Seasonal Collection',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=600&fit=crop',
      count: 15
    }
  ];

  const processSteps = [
    {
      id: '1',
      title: 'Choose Your Design',
      description: 'Browse our gallery or share your vision',
      icon: <Palette className="w-8 h-8" />
    },
    {
      id: '2',
      title: 'Customize Details',
      description: 'Add personal touches and preferences',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: '3',
      title: 'Crafting Process',
      description: 'We create your piece with care',
      icon: <Gift className="w-8 h-8" />
    },
    {
      id: '4',
      title: 'Quality Check',
      description: 'Thorough inspection before delivery',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const testimonials = [{
    name: 'Priya Sharma',
    rating: 5,
    review: 'The custom portrait exceeded all my expectations! The detail and emotion captured in pencil is absolutely stunning.',
    product: 'Custom Portrait'
  }, {
    name: 'Rahul Patel',
    rating: 5,
    review: 'Beautiful resin coasters that look amazing in our living room. The quality and craftsmanship is outstanding.',
    product: 'Resin Coasters'
  }, {
    name: 'Ananya Singh',
    rating: 5,
    review: 'Perfect gift for my book-loving sister! The custom bookmark is delicate and gorgeous. Fast shipping too!',
    product: 'Custom Bookmark'
  },
   {
    name: 'Vikram Mehta',
    rating: 5,
    review: 'The family portrait was incredibly accurate and captured our bond perfectly. Thank you!',
    product: 'Family Portrait'
  },
  {
    name: 'Neha Gupta',
    rating: 5,
    review: 'Absolutely stunning resin wall art! It adds such a vibrant touch to my living room. Highly recommend!',
    product: 'Resin Wall Art'
  }
  ];

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

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
            <Link to="/gallery" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Our Gallery
              </Button>
            </Link>
            <Link to="/custom-orders" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <Heart className="w-5 h-5 mr-2" />
                Commission Art
              </Button>
            </Link>
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
            <span>🚚 India Shipping</span>
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

      {/* Gallery Categories Section */}
      <section className="py-20 bg-white scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">Explore Our Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of handcrafted gifts and art pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80">{category.count} items</p>
                  <Link to={`/gallery?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button variant="ghost" className="mt-4 text-white hover:text-pink-200 hover:bg-white/10">
                      View Collection
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple and transparent process ensures your perfect gift
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-pink-500 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most cherished handcrafted pieces, each one unique and made with love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorks.map((work, index) => (
              <div 
                key={work.id} 
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
                  <img 
                    src={work.image} 
                    alt={work.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-sm text-white/80">{work.category}</span>
                      <h3 className="text-xl font-semibold text-white mb-2">{work.name}</h3>
                      <p className="text-white/90 text-sm">{work.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 scroll-animate opacity-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-4xl md:text-5xl text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have found their perfect gift
            </p>
          </div>
          
          <Slider {...settings} className="px-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 scroll-animate opacity-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-dancing text-4xl md:text-5xl text-white mb-6">Ready to Create Your Perfect Gift?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's transform your vision into a beautiful, handcrafted masterpiece
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg">
              <Link to="/custom-orders" className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Start Your Order
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-pink-600
             hover:bg-white/10 px-8 py-4 text-lg">
              <Link to="/contact" className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
