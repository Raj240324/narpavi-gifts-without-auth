
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Capturing Pet Personalities in Pencil',
      excerpt: 'Learn about the techniques and considerations that go into creating lifelike pet portraits that truly capture your furry friend\'s unique spirit.',
      author: 'Sarah Johnson',
      date: '2024-05-15',
      readTime: '5 min read',
      category: 'Techniques',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: '5 Creative Gift Ideas Using Resin Art',
      excerpt: 'Discover unique ways to incorporate resin art into meaningful gifts for your loved ones, from bookmarks to jewelry.',
      author: 'Sarah Johnson',
      date: '2024-05-10',
      readTime: '4 min read',
      category: 'Gift Ideas',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Caring for Your Resin Art: A Complete Guide',
      excerpt: 'Essential tips for maintaining and preserving your resin art pieces to ensure they last for generations.',
      author: 'Sarah Johnson',
      date: '2024-05-05',
      readTime: '3 min read',
      category: 'Care Tips',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'The History and Meaning Behind Memorial Art',
      excerpt: 'Explore how memorial art has evolved and why personalized pieces provide comfort during difficult times.',
      author: 'Sarah Johnson',
      date: '2024-04-28',
      readTime: '6 min read',
      category: 'History',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Wedding Art: Preserving Your Special Day',
      excerpt: 'Discover beautiful ways to commemorate your wedding with custom art pieces that capture the magic of your celebration.',
      author: 'Sarah Johnson',
      date: '2024-04-20',
      readTime: '4 min read',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Behind the Scenes: My Creative Process',
      excerpt: 'Take a peek into my studio and learn about the step-by-step process behind creating each unique piece.',
      author: 'Sarah Johnson',
      date: '2024-04-15',
      readTime: '7 min read',
      category: 'Behind the Scenes',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const categories = ['All', 'Techniques', 'Gift Ideas', 'Care Tips', 'History', 'Wedding', 'Behind the Scenes'];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover art techniques, gift ideas, care tips, and stories behind our creations
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <span className="text-pink-400 text-sm font-medium uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white w-fit">
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-pink-400 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-pink-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white px-8"
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg p-12 text-center text-white">
          <h2 className="font-dancing text-4xl mb-4">Never Miss a Post</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest art tips, behind-the-scenes content, 
            and exclusive tutorials delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800"
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-pink-400"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
