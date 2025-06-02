import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from './supabase';

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
  addToWishlist: (item: WishlistItem) => Promise<void>;
  removeFromWishlist: (itemId: string) => Promise<void>;
  isInWishlist: (itemId: string) => boolean;
  loading: boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Load wishlist from Supabase when user logs in
  useEffect(() => {
    if (user) {
      loadWishlist();
    } else {
      setWishlist([]);
      setLoading(false);
    }
  }, [user]);

  const loadWishlist = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('wishlist')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWishlist(data || []);
    } catch (error) {
      console.error('Error loading wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (item: WishlistItem) => {
    if (!user) {
      throw new Error('Please sign in to add items to your wishlist');
    }

    try {
      const { error } = await supabase
        .from('wishlist')
        .insert([
          {
            user_id: user.id,
            item_id: item.id,
            title: item.title,
            image: item.image,
            category: item.category,
            description: item.description,
          },
        ]);

      if (error) throw error;
      setWishlist((prev) => [...prev, item]);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      throw error;
    }
  };

  const removeFromWishlist = async (itemId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', user.id)
        .eq('item_id', itemId);

      if (error) throw error;
      setWishlist((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      throw error;
    }
  };

  const isInWishlist = (itemId: string) => {
    return wishlist.some((item) => item.id === itemId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        loading,
      }}
    >
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