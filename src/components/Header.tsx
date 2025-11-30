import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className={`hidden xl:block transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 py-2'} bg-gray-900 text-white`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@royalresinz.com" className="hover:text-pink-400 transition-colors">
                hello@royalresinz.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/testimonials" className="hover:text-pink-400 transition-colors">Testimonials</Link>
              <Link to="/faq" className="hover:text-pink-400 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
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
              <span className={`font-dancing text-xl sm:text-2xl transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}>
                Royal Resinz
              </span>
              <span className="text-[10px] sm:text-xs text-pink-500 font-medium tracking-wider uppercase">
                By Narpavi Gifts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              item.submenu ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors relative py-2 ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
                  >
                    <span className="relative">
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        style={{ width: item.name === 'Gallery' ? '700px' : '500px' }}
                      >
                        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-pink-100 p-6 overflow-hidden">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-3xl pointer-events-none"></div>
                          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-100/50 rounded-full blur-3xl pointer-events-none"></div>

                          {item.name === 'Gallery' ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                              {item.submenu.map((section, index) => (
                                <div key={index} className="space-y-3">
                                  <h3 className="font-dancing text-xl text-gray-900 border-b border-pink-100 pb-2 flex items-center gap-2">
                                    {index === 0 ? <Palette className="w-4 h-4 text-pink-500" /> : <Gift className="w-4 h-4 text-purple-500" />}
                                    {section.title}
                                  </h3>
                                  <div className="space-y-1">
                                    {section.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.path}
                                        className="block p-2 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group/item"
                                        onClick={handleLinkClick}
                                      >
                                        <div className="flex items-start gap-3">
                                          <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-pink-100 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                            <subItem.icon className="w-4 h-4 text-pink-500" />
                                          </div>
                                          <div className="flex-1">
                                            <div className="font-medium text-sm text-gray-900 group-hover/item:text-pink-600 transition-colors">{subItem.name}</div>
                                            <div className="text-xs text-gray-500 group-hover/item:text-gray-600 line-clamp-1">{subItem.description}</div>
                                          </div>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-2 relative z-10">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block p-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group/item"
                                  onClick={handleLinkClick}
                                >
                                  <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-pink-100 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                      <subItem.icon className="w-5 h-5 text-pink-500" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-medium text-sm text-gray-900 group-hover/item:text-pink-600 transition-colors">{subItem.name}</div>
                                      <div className="text-xs text-gray-500 group-hover/item:text-gray-600">{subItem.description}</div>
                                    </div>
                                    <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-[-10px] group-hover/item:translate-x-0 transition-all duration-300">
                                      <ChevronDown className="w-4 h-4 text-pink-400 -rotate-90" />
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group py-2 ${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-gray-800 hover:text-pink-600'}`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-pink-400 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
                  </span>
                </Link>
              )
            ))}
          </nav>

          {/* Right Side Icons - Hidden on Mobile */}
          <div className="hidden xl:flex items-center space-x-3 sm:space-x-4 flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-700 hover:text-pink-400 hover:bg-pink-50/50"
            >
              <Search className="w-5 h-5" />
            </Button>

            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-400 hover:bg-pink-50/50">
                <Heart className="w-5 h-5" />
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleWhatsAppClick}
              className="text-gray-700 hover:text-pink-400 hover:bg-pink-50/50"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden text-gray-700 hover:text-pink-400"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-b from-pink-50 to-purple-50 p-0 border-l-pink-100">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-pink-100/50">
                  <div className="flex items-center space-x-2">
                    <img src="/np-logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="font-dancing text-xl text-gray-800">Royal Resinz</span>
                  </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="mb-1">
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50/50 transition-colors flex items-center justify-between"
                          >
                            {item.name}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-white/50"
                              >
                                <div className="py-2">
                                  {item.name === 'Gallery' ? (
                                    item.submenu.map((section: any, index: number) => (
                                      <div key={index} className="mb-4 last:mb-0">
                                        <div className="px-6 py-1 text-xs font-semibold text-pink-500 uppercase tracking-wider">
                                          {section.title}
                                        </div>
                                        {section.items.map((subItem: any) => (
                                          <Link
                                            key={subItem.name}
                                            to={subItem.path}
                                            className="block px-8 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors flex items-center gap-2"
                                            onClick={handleLinkClick}
                                          >
                                            <subItem.icon className="w-3 h-3" />
                                            {subItem.name}
                                          </Link>
                                        ))}
                                      </div>
                                    ))
                                  ) : (
                                    item.submenu.map((subItem: any) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.path}
                                        className="block px-8 py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors flex items-center gap-2"
                                        onClick={handleLinkClick}
                                      >
                                        <subItem.icon className="w-3 h-3" />
                                        {subItem.name}
                                      </Link>
                                    ))
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50/50 transition-colors"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-6 border-t border-pink-100/50 bg-white/30">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <Button variant="outline" size="icon" className="w-full border-pink-200 hover:bg-pink-50 hover:text-pink-600" onClick={() => setIsSearchOpen(true)}>
                      <Search className="w-4 h-4" />
                    </Button>
                    <Link to="/wishlist">
                      <Button variant="outline" size="icon" className="w-full border-pink-200 hover:bg-pink-50 hover:text-pink-600">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="w-full border-pink-200 hover:bg-pink-50 hover:text-pink-600" onClick={handleWhatsAppClick}>
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Need help? Call us</p>
                    <a href="tel:+1234567890" className="text-sm font-medium text-pink-600 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-24 px-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Search Gallery</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for artwork, categories, or themes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="pl-10 py-6 text-lg bg-gray-50 border-gray-200 focus:border-pink-300 focus:ring-pink-100 rounded-xl"
                    autoFocus
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-xl">
                    Search
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
