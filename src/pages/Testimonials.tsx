
import React, { useState } from 'react';
import { Star, Quote, Filter, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      review: 'The custom pet portrait of my golden retriever Max exceeded all my expectations! The detail and emotion captured in pencil is absolutely stunning. Every whisker and the sparkle in his eyes - it\'s like looking at a photograph but with so much more soul. I cried happy tears when I opened the package.',
      product: 'Custom Pet Portrait',
      category: 'Pet Portrait',
      date: '2024-05-20',
      location: 'Portland, OR',
      verified: true
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      review: 'Beautiful resin coasters that look amazing in our living room. The ocean theme is so realistic and the quality is outstanding. Guests always ask where we got them! They\'re functional art pieces that start conversations every time.',
      product: 'Ocean Resin Coasters',
      category: 'Resin Art',
      date: '2024-05-18',
      location: 'Seattle, WA',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 5,
      review: 'Perfect gift for my book-loving sister! The botanical bookmark is delicate and gorgeous. Fast shipping too! She uses it every day and says it makes reading feel even more special. The pressed flowers are beautifully preserved.',
      product: 'Botanical Bookmark',
      category: 'Resin Gifts',
      date: '2024-05-15',
      location: 'Austin, TX',
      verified: true
    },
    {
      id: 4,
      name: 'Jennifer Williams',
      rating: 5,
      review: 'I commissioned a family portrait for my parents\' 50th anniversary. The artist captured not just their faces but their love story. The way she drew their hands clasped together brought tears to everyone\'s eyes at the party. It\'s now the centerpiece of their living room.',
      product: 'Family Portrait',
      category: 'Family Portrait',
      date: '2024-05-12',
      location: 'Denver, CO',
      verified: true
    },
    {
      id: 5,
      name: 'Robert Martinez',
      rating: 5,
      review: 'Ordered a memorial piece for our beloved cat who passed away. The resin keepsake with her paw print and a photo is beautiful and comforting. It helps us remember her with joy rather than just sadness. The quality and care put into this piece is evident.',
      product: 'Memorial Pet Keepsake',
      category: 'Memorial',
      date: '2024-05-10',
      location: 'Phoenix, AZ',
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      rating: 5,
      review: 'The wedding portrait sketch is absolutely perfect! It captures our special day beautifully. The artist even included small details from our venue in the background. It\'s hanging in our bedroom and makes us smile every morning.',
      product: 'Wedding Portrait',
      category: 'Wedding Art',
      date: '2024-05-08',
      location: 'Nashville, TN',
      verified: true
    },
    {
      id: 7,
      name: 'David Kim',
      rating: 5,
      review: 'Bought resin jewelry as a birthday gift for my wife. She absolutely loves the unique design and gets compliments whenever she wears it. The craftsmanship is top-notch and it arrived beautifully packaged.',
      product: 'Resin Jewelry Set',
      category: 'Resin Gifts',
      date: '2024-05-05',
      location: 'San Francisco, CA',
      verified: true
    },
    {
      id: 8,
      name: 'Amanda Rodriguez',
      rating: 5,
      review: 'The landscape pencil drawing of our favorite hiking spot is incredible. It brings back all the memories of our adventures there. The detail in the mountains and trees is amazing - you can almost feel the fresh air!',
      product: 'Landscape Drawing',
      category: 'Landscape Art',
      date: '2024-05-02',
      location: 'Boulder, CO',
      verified: true
    },
    {
      id: 9,
      name: 'Mark Wilson',
      rating: 5,
      review: 'Communication was excellent throughout the custom order process. I was kept updated with progress photos and the final result exceeded my expectations. Professional service and incredible artistic talent.',
      product: 'Custom House Portrait',
      category: 'House Portrait',
      date: '2024-04-28',
      location: 'Chicago, IL',
      verified: true
    },
    {
      id: 10,
      name: 'Rachel Green',
      rating: 5,
      review: 'The baby keepsake with hospital bracelet and footprints is so precious. It\'s a beautiful way to preserve those tiny details from when our daughter was born. The resin work is flawless and it will be treasured forever.',
      product: 'Baby Keepsake',
      category: 'Baby Art',
      date: '2024-04-25',
      location: 'Miami, FL',
      verified: true
    }
  ];

  const categories = ['all', 'Pet Portrait', 'Resin Art', 'Resin Gifts', 'Family Portrait', 'Memorial', 'Wedding Art', 'Landscape Art'];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  const averageRating = 5.0; // All testimonials are 5 stars in this example
  const totalReviews = testimonials.length;

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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.slice(1).map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mb-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8"
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            Load More Reviews
          </Button>
        </div>

        {/* Leave Review CTA */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg p-12 text-center text-white">
          <h2 className="font-dancing text-4xl mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Received one of our pieces? We'd love to hear about your experience! 
            Your review helps other customers and means the world to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-pink-400 px-8"
            >
              Write a Review
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-pink-400 px-8"
            >
              Share on Social Media
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
