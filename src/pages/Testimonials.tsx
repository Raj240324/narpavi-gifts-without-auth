import React, { useState, useEffect } from 'react';
import { Star, Filter, Search, Heart, Quote, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialsService } from '@/lib/testimonialsService';
import { Review } from '@/lib/supabase';
import { ReviewForm } from '@/components/ReviewForm';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showForm, setShowForm] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    averageRating: 0,
    fiveStarCount: 0,
    recentCount: 0
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const data = await TestimonialsService.getAllTestimonials();
      setTestimonials(data);
      
      // Calculate stats
      const total = data.length;
      const averageRating = total > 0 ? data.reduce((sum, t) => sum + t.rating, 0) / total : 0;
      const fiveStarCount = data.filter(t => t.rating === 5).length;
      const recentCount = data.filter(t => {
        const reviewDate = new Date(t.created_at);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return reviewDate > weekAgo;
      }).length;

      setStats({ total, averageRating, fiveStarCount, recentCount });
    } catch (error) {
      console.error('Error loading testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedTestimonials = testimonials
    .filter(testimonial => {
      const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonial.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           testimonial.review.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = ratingFilter === 'all' || testimonial.rating === parseInt(ratingFilter);
      return matchesSearch && matchesRating;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const handleNewReview = async (review: Omit<Review, 'id' | 'created_at'>) => {
    try {
      const newReview = await TestimonialsService.createTestimonial(review);
      setTestimonials(prev => [newReview, ...prev]);
      setShowForm(false);
      loadTestimonials(); // Reload to update stats
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-600 bg-green-50 border-green-200';
    if (rating >= 3) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Heart className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Customer Reviews</span>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Our Customers Say
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover why hundreds of customers choose Royal Resinz By Narpavi Gifts for their most precious moments. 
              Each review tells a story of love, craftsmanship, and unforgettable memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Share Your Experience
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <Award className="w-5 h-5 mr-2" />
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stats.total}</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Users className="w-4 h-4" />
                <span>Total Reviews</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stats.averageRating.toFixed(1)}
              </div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Average Rating</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stats.fiveStarCount}</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>5-Star Reviews</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stats.recentCount}</div>
              <div className="text-gray-600 flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4" />
                <span>This Week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/70 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search reviews, products, or customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 backdrop-blur-sm border-gray-200 focus:border-pink-400 focus:ring-pink-400"
                />
              </div>
              
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-full sm:w-48 bg-white/80 backdrop-blur-sm border-gray-200">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 bg-white/80 backdrop-blur-sm border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="name">Customer Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="w-4 h-4" />
              <span>{filteredAndSortedTestimonials.length} reviews found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-6">
              <ReviewForm onReviewSubmitted={handleNewReview} />
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">Loading customer reviews...</p>
            </div>
          ) : filteredAndSortedTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-gray-200/50 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">{testimonial.product}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {renderStars(testimonial.rating)}
                            </div>
                            <Badge className={`text-xs font-medium ${getRatingColor(testimonial.rating)}`}>
                              {testimonial.rating}.0
                            </Badge>
                          </div>
                        </div>
                        <Quote className="w-8 h-8 text-pink-200 group-hover:text-pink-400 transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed mb-4 line-clamp-4">
                        "{testimonial.review}"
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(testimonial.created_at)}</span>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Verified Purchase</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No reviews found</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || ratingFilter !== 'all' 
                    ? 'Try adjusting your search or filters to see more reviews.'
                    : 'Be the first to share your experience with our community!'
                  }
                </p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Write First Review
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your experience helps others discover the perfect gift. Join our community of happy customers!
          </p>
          <Button 
            onClick={() => setShowForm(true)}
            size="lg"
            className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Heart className="w-5 h-5 mr-2" />
            Write a Review
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
