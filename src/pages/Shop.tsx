import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductCard from '@/components/ProductCard';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;

  const allProducts = [
    {
      id: '1',
      name: 'Custom Pet Portrait',
      price: 89,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      category: 'Pencil Art',
      isNew: true
    },
    {
      id: '2',
      name: 'Ocean Wave Resin Tray',
      price: 45,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      category: 'Resin Art',
      isNew: false
    },
    {
      id: '3',
      name: 'Botanical Resin Bookmark',
      price: 25,
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=400&fit=crop',
      category: 'Resin Gifts',
      isNew: true
    },
    {
      id: '4',
      name: 'Family Portrait Sketch',
      price: 120,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
      category: 'Pencil Art',
      isNew: false
    },
    {
      id: '5',
      name: 'Abstract Resin Wall Art',
      price: 75,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop',
      category: 'Resin Art',
      isNew: true
    },
    {
      id: '6',
      name: 'Couple Portrait Drawing',
      price: 95,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      category: 'Pencil Art',
      isNew: false
    },
    {
      id: '7',
      name: 'Resin Jewelry Set',
      price: 35,
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=400&fit=crop',
      category: 'Resin Gifts',
      isNew: true
    },
    {
      id: '8',
      name: 'Landscape Pencil Art',
      price: 65,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop',
      category: 'Pencil Art',
      isNew: false
    }
  ];

  const categories = ['all', 'Pencil Art', 'Resin Art', 'Resin Gifts', 'Custom Orders'];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const filtered = allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.isNew ? 1 : -1;
        default: // popularity
          return 0;
      }
    });

    setFilteredProducts(sorted);
    setLoading(false);
  }, [selectedCategory, searchTerm, sortBy]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    const nextPageProducts = allProducts.slice(
      (page * productsPerPage),
      ((page + 1) * productsPerPage)
    );
    setFilteredProducts(prev => [...prev, ...nextPageProducts]);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Our Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of handcrafted pencil art and unique resin pieces
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
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

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setSortBy('popularity');
              }}
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="mt-4 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-pink-400 hover:bg-pink-500 text-white px-8"
              onClick={handleLoadMore}
              disabled={filteredProducts.length >= allProducts.length}
            >
              {filteredProducts.length >= allProducts.length ? 'No More Products' : 'Load More Products'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
