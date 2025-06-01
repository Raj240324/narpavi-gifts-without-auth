
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Pet Portrait - Max',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
      description: 'Detailed pencil portrait of a beloved golden retriever'
    },
    {
      id: 2,
      title: 'Ocean Waves Resin Tray',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop',
      description: 'Beautiful ocean-inspired resin serving tray'
    },
    {
      id: 3,
      title: 'Wedding Portrait',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=500&h=500&fit=crop',
      description: 'Romantic couple portrait for anniversary gift'
    },
    {
      id: 4,
      title: 'Botanical Bookmark Set',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop',
      description: 'Set of 3 bookmarks with pressed flowers'
    },
    {
      id: 5,
      title: 'Family Portrait',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop',
      description: 'Multi-generational family portrait'
    },
    {
      id: 6,
      title: 'Abstract Resin Wall Art',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=500&fit=crop',
      description: 'Modern abstract piece with gold accents'
    }
  ];

  const categories = ['all', 'Pencil Art', 'Resin Art', 'Resin Gifts'];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of finished pieces and get inspired for your next custom order
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-pink-400 hover:bg-pink-500" 
                : "border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
              }
            >
              {category === 'all' ? 'All Work' : category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <span className="text-xs text-pink-400 uppercase tracking-wide font-medium">
                  {item.category}
                </span>
                <h3 className="font-semibold text-gray-800 mt-1">{item.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-12">
          <h2 className="font-dancing text-4xl text-gray-800 mb-4">Love What You See?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to commission your own custom piece? Let's bring your vision to life!
          </p>
          <Button 
            size="lg" 
            className="bg-pink-400 hover:bg-pink-500 text-white px-8"
          >
            Start Your Custom Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
