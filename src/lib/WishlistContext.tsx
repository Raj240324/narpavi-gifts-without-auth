import { createContext, useContext, useState, useEffect } from 'react';

type WishlistItem = {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  created_at: string;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  loading: boolean;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (itemId: string) => void;
  isInWishlist: (itemId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('royalresinz-wishlist') || localStorage.getItem('narpavi-wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error parsing saved wishlist:', error);
        setWishlist([]);
      }
    }
    setLoading(false);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('royalresinz-wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, loading]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      // Check if item already exists
      const exists = prev.some(wishlistItem => wishlistItem.id === item.id);
      if (exists) {
        return prev; // Don't add if already exists
      }
      return [...prev, { ...item, created_at: new Date().toISOString() }];
    });
  };

  const removeFromWishlist = (itemId: string) => {
    setWishlist((prev) => prev.filter(item => item.id !== itemId));
  };

  const isInWishlist = (itemId: string) => {
    return wishlist.some(item => item.id === itemId);
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      loading, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}