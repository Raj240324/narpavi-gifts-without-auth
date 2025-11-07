import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Search, X, Heart, Gift, User, Phone, MessageCircle, ChevronDown, Truck, CreditCard, Package, Palette, Brush, Pencil, Droplets, Paintbrush, Monitor, Layers, Sparkles, Cake, Heart as HeartIcon, Building2, Home, GraduationCap, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import GradientText from '@/components/ui/gradient-text';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Gallery', 
      path: '/gallery',
      submenu: [
        {
          title: 'Art Categories',
          items: [
            { name: 'Pencil Portraits', path: '/gallery?category=pencil-portraits', description: 'Hand-drawn portraits capturing precious moments', icon: Pencil },
            { name: 'Resin Art', path: '/gallery?category=resin-art', description: 'Unique resin creations with stunning effects', icon: Droplets },
            { name: 'Custom Paintings', path: '/gallery?category=custom-paintings', description: 'Personalized paintings in various styles', icon: Paintbrush },
            { name: 'Digital Art', path: '/gallery?category=digital-art', description: 'Modern digital illustrations and designs', icon: Monitor },
            { name: 'Mixed Media', path: '/gallery?category=mixed-media', description: 'Combined art forms for unique pieces', icon: Layers },
          ]
        },
        {
          title: 'Gift Collections',
          items: [
            { name: 'Anniversary Gifts', path: '/gallery?category=anniversary', description: 'Celebrate love with special gifts', icon: Sparkles },
            { name: 'Birthday Gifts', path: '/gallery?category=birthday', description: 'Make birthdays memorable', icon: Cake },
            { name: 'Wedding Gifts', path: '/gallery?category=wedding', description: 'Unique gifts for the special day', icon: HeartIcon },
            { name: 'Corporate Gifts', path: '/gallery?category=corporate', description: 'Professional gifts for businesses', icon: Building2 },
            { name: 'Housewarming Gifts', path: '/gallery?category=housewarming', description: 'Welcome to your new home', icon: Home },
            { name: 'Graduation Gifts', path: '/gallery?category=graduation', description: 'Celebrate academic achievements', icon: GraduationCap },
            { name: 'Baby Shower Gifts', path: '/gallery?category=baby-shower', description: 'Welcome the little one', icon: Baby },
          ]
        }
      ]
    },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { 
          name: 'Gift Wrapping', 
          path: '/services/gift-wrapping',
          description: 'Elegant wrapping with premium materials and custom designs',
          icon: Gift
        },
        { 
          name: 'Express Delivery', 
          path: '/services/express-delivery',
          description: 'Fast and reliable delivery options for your precious gifts',
          icon: Truck
        },
        { 
          name: 'Gift Cards', 
          path: '/services/gift-cards',
          description: 'Let your loved ones choose their perfect gift',
          icon: CreditCard
        },
        { 
          name: 'Custom Orders', 
          path: '/services/custom-orders',
          description: 'Commission your unique piece of art',
          icon: Palette
        },
        { 
          name: 'Corporate Gifting', 
          path: '/services/corporate-gifting',
          description: 'Elevate your corporate relationships with thoughtful gifts',
          icon: Package
        }
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Navigate to gallery with search query
    navigate(`/gallery?search=${encodeURIComponent(searchQuery.trim())}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your artwork and would like to know more about your services.");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp for inquiries...",
    });
  };

  return (
    <header className="bg-gradient-to-r from-pink-50 to-purple-50 shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden sm:block bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@royalresinz.com" className="hover:text-pink-400 transition-colors">
                hello@royalresinz.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-4">
                <Link to="/testimonials" className="hover:text-pink-400 transition-colors">Testimonials</Link>
                <Link to="/faq" className="hover:text-pink-400 transition-colors">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/np-logo.png" 
                alt="Royal Resinz By Narpavi Gifts Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-dancing text-xl sm:text-2xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Royal Resinz By Narpavi Gifts</span>
              <GradientText variant="default" className="text-xs whitespace-nowrap">Handcrafted with Love</GradientText>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative"
                >
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors relative group`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 p-4 animate-in fade-in-50 slide-in-from-top-5 duration-200"
                      style={{ width: item.name === 'Gallery' ? '700px' : '500px' }}
                    >
                      {item.name === 'Gallery' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.submenu.map((section, index) => (
                            <div key={index} className="space-y-2">
                              <h3 className="font-medium text-base text-gray-900 border-b border-gray-100 pb-1.5">{section.title}</h3>
                              <div className="space-y-1.5">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block p-2 rounded-md hover:bg-pink-50 transition-all duration-200 group/item"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="flex items-start gap-2">
                                      <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center group-hover/item:bg-pink-100 transition-colors">
                                        <subItem.icon className="w-3.5 h-3.5 text-pink-500" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-medium text-sm text-gray-900 group-hover/item:text-pink-600 transition-colors">{subItem.name}</div>
                                        <div className="text-xs text-gray-500 group-hover/item:text-gray-600">{subItem.description}</div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-3">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block p-2 rounded-md hover:bg-pink-50 transition-all duration-200 group/item"
                              onClick={handleLinkClick}
                            >
                              <div className="flex items-start gap-2">
                                <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center group-hover/item:bg-pink-100 transition-colors">
                                  <subItem.icon className="w-3.5 h-3.5 text-pink-500" />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-sm text-gray-900 group-hover/item:text-pink-600 transition-colors">{subItem.name}</div>
                                  <div className="text-xs text-gray-500 group-hover/item:text-gray-600">{subItem.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                  </span>
                </Link>
              )
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-700 hover:text-pink-400"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Link to="/wishlist" className="text-gray-700 hover:text-pink-400">
              <Heart className="w-5 h-5" />
            </Link>

            {/* WhatsApp Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleWhatsAppClick}
              className="text-gray-700 hover:text-pink-400"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-gray-700 hover:text-pink-400"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-pink-50 to-purple-50 p-0">
                {/* Mobile menu content */}
                <div className="flex flex-col h-full">
                  {/* Navigation items */}
                  <nav className="flex-1 py-2">
                    {navItems.map((item) => (
                      <div key={item.name} className="mb-2">
                        {item.submenu ? (
                          <div>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors flex items-center justify-between"
                            >
                              {item.name}
                              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                            </button>
                            {activeDropdown === item.name && (
                              <div className="pl-4 space-y-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                                    onClick={handleLinkClick}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Bottom section */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="space-y-3">
                      <Link
                        to="/wishlist"
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-pink-600 transition-colors"
                        onClick={handleLinkClick}
                      >
                        <Heart className="w-4 h-4" />
                        Wishlist
                      </Link>
                      <button
                        onClick={handleWhatsAppClick}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-pink-600 transition-colors w-full text-left"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contact via WhatsApp
                      </button>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone className="w-4 h-4" />
                        +1 (234) 567-890
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Search Gallery</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <form onSubmit={handleSearch}>
              <Input
                type="text"
                placeholder="Search for artwork, categories, or themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="mb-4"
                autoFocus
              />
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Search
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
