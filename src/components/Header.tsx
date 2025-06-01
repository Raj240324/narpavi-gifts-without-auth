
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, X, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/custom-orders' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    toast({
      title: "Search",
      description: `Searching for "${searchQuery}"...`,
    });
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in placing an order for your pencil art and resin gifts.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp for quick orders...",
    });
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/artisanresin', '_blank');
    toast({
      title: "Opening Instagram",
      description: "Check out our latest work on Instagram...",
    });
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AR</span>
            </div>
            <span className="font-dancing text-2xl text-gray-800">Artisan Resin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-pink-400 ${
                  isActive(item.path) ? 'text-pink-400' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Quick Order Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleInstagramClick}
                className="text-purple-600 hover:text-purple-700"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            {/* Mobile Quick Order Buttons */}
            <div className="mb-4 px-4 flex space-x-2">
              <Button
                onClick={handleWhatsAppClick}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Order
              </Button>
              <Button
                onClick={handleInstagramClick}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                size="sm"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>

            {/* Mobile Search */}
            <div className="mb-4 px-4">
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm" className="bg-pink-400 hover:bg-pink-500">
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </div>
            
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-pink-400 ${
                    isActive(item.path) ? 'text-pink-400' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
