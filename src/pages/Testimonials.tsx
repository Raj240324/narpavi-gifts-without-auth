import React, { useState, useEffect } from 'react';
import { Star, Quote, Filter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReviewForm } from '@/components/ReviewForm';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';

interface Review {
  id: number;
  user_id: string;
  name: string;
  rating: number;
  review: string;
  product: string;
  category: string;
  date: string;
  location: string;
  verified: boolean;
}

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [search, setSearch] = useState('');
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const categories = ['all', 'Pet Portrait', 'Resin Art', 'Resin Gifts', 'Family Portrait', 'Memorial', 'Wedding Art', 'Landscape Art'];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)
    : '0.0';
  const totalReviews = testimonials.length;

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Customer Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            See what our customers say about their experience with our handcrafted art pieces
          </p>
          
          {/* Rating Summary */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">{averageRating}</span>
            </div>
            <p className="text-gray-600">
              Based on {totalReviews} verified reviews
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        {testimonials.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Featured Review</h2>
            <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="relative">
                    <Quote className="w-16 h-16 text-pink-400 absolute -top-4 -left-4" />
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-pink-400">
                        {testimonials[0].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 italic leading-relaxed mb-4">
                      "{testimonials[0].review}"
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-semibold">{testimonials[0].name}</p>
                      <p>{testimonials[0].location} • {testimonials[0].product}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Testimonials Carousel */}
        {testimonials.length > 1 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">More Reviews</h2>
            <div className="testimonial-carousel">
              <Slider {...settings}>
                {sortedTestimonials.slice(1).map((testimonial) => (
                  <div key={testimonial.id} className="px-3">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}

        {/* Leave Review CTA */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Love Your Narpavi Gifts Piece?</h2>
          <p className="text-lg mb-8">Share your experience and help others discover our unique handcrafted art.</p>
          <ReviewForm onReviewSubmitted={fetchReviews} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
