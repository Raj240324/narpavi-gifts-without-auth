import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { WishlistButton } from '@/components/gallery/WishlistButton';

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle category from URL on component mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      const formattedCategory = categoryFromUrl
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setSelectedCategory(formattedCategory);
    }
  }, [searchParams]);

  const galleryItems = [
    // Pencil Art Category
    {
      id: '1',
      title: 'Custom Pet Portrait',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop&auto=format',
      description: 'Detailed pencil portrait capturing your pet\'s unique personality'
    },
    {
      id: '2',
      title: 'Family Portrait Sketch',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&auto=format',
      description: 'Heartwarming family portrait drawn with precision and care'
    },
    {
      id: '3',
      title: 'Couple Portrait Drawing',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1505305130871-e55c3859a09a?w=800&h=800&fit=crop&auto=format',
      description: 'Romantic couple portrait capturing special moments'
    },
    {
      id: '4',
      title: 'Landscape Pencil Art',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1522766008596-dc94c36c844d?w=800&h=800&fit=crop&auto=format',
      description: 'Detailed landscape drawing showcasing natural beauty'
    },
    {
      id: '5',
      title: 'Pet Memorial Portrait',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1580991815919-28c22b70857b?w=800&h=800&fit=crop&auto=format',
      description: 'Touching memorial portrait to honor your beloved pet'
    },
    {
      id: '6',
      title: 'Child Portrait Sketch',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop',
      description: 'Charming portrait capturing childhood innocence'
    },
    {
      id: '7',
      title: 'Nature Scene Drawing',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
      description: 'Serene nature scene drawn with intricate detail'
    },
    {
      id: '8',
      title: 'Architectural Sketch',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=800&fit=crop',
      description: 'Detailed architectural drawing with precise lines'
    },
    {
      id: '9',
      title: 'Wildlife Portrait',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&h=800&fit=crop',
      description: 'Realistic wildlife portrait capturing animal essence'
    },
    {
      id: '10',
      title: 'Abstract Pencil Art',
      category: 'Pencil Art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
      description: 'Creative abstract composition in pencil'
    },

    // Resin Art Category
    {
      id: '11',
      title: 'Ocean Wave Resin Tray',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Beautiful resin tray with ocean wave design'
    },
    {
      id: '12',
      title: 'Abstract Resin Wall Art',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1581714273516-e9c876b50651?w=800&h=800&fit=crop',
      description: 'Stunning abstract wall art with resin pours'
    },
    {
      id: '13',
      title: 'Resin Wall Clock',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Functional art piece combining resin and clock'
    },
    {
      id: '14',
      title: 'Geode Resin Art',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: 'Vibrant geode-inspired resin artwork'
    },
    {
      id: '15',
      title: 'Resin River Table',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
      description: 'Elegant table with flowing resin river design'
    },
    {
      id: '16',
      title: 'Resin Wall Panel',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Modern wall panel with resin inlay'
    },
    {
      id: '17',
      title: 'Resin and Wood Art',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: 'Combining natural wood with colorful resin'
    },
    {
      id: '18',
      title: 'Resin Abstract Pour',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1581714273516-e9c876b50651?w=800&h=800&fit=crop',
      description: 'Fluid abstract art created with resin'
    },
    {
      id: '19',
      title: 'Resin Wall Mirror',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative mirror with resin frame'
    },
    {
      id: '20',
      title: 'Resin Wall Sculpture',
      category: 'Resin Art',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: '3D wall sculpture with resin elements'
    },

    // Resin Gifts Category
    {
      id: '21',
      title: 'Botanical Resin Bookmark',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Elegant bookmark with pressed flowers'
    },
    {
      id: '22',
      title: 'Resin Jewelry Set',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Unique resin jewelry with embedded designs'
    },
    {
      id: '23',
      title: 'Resin Coaster Set',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: 'Set of 4 handmade resin coasters'
    },
    {
      id: '24',
      title: 'Custom Name Keychain',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Personalized keychain with name in resin'
    },
    {
      id: '25',
      title: 'Resin Photo Frame',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Decorative frame with resin border'
    },
    {
      id: '26',
      title: 'Resin Pen Holder',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Stylish desk organizer with resin design'
    },
    {
      id: '27',
      title: 'Resin Phone Stand',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: 'Functional and decorative phone stand'
    },
    {
      id: '28',
      title: 'Resin Wall Hooks',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Decorative hooks with resin elements'
    },
    {
      id: '29',
      title: 'Resin Candle Holder',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Elegant candle holder with resin design'
    },
    {
      id: '30',
      title: 'Resin Wall Clock',
      category: 'Resin Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative clock with resin frame'
    },

    // Custom Paintings Category
    {
      id: '31',
      title: 'Abstract Acrylic Painting',
      category: 'Custom Paintings',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
      description: 'Vibrant abstract painting in acrylic'
    },
    {
      id: '32',
      title: 'Landscape Oil Painting',
      category: 'Custom Paintings',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=800&fit=crop',
      description: 'Serene landscape in oil colors'
    },
    {
      id: '33',
      title: 'Portrait in Watercolor',
      category: 'Custom Paintings',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Delicate portrait using watercolors'
    },
    {
      id: '34',
      title: 'Modern Abstract Art',
      category: 'Custom Paintings',
      image: 'https://images.unsplash.com/photo-1581714273516-e9c876b50651?w=800&h=800&fit=crop',
      description: 'Contemporary abstract composition'
    },
    {
      id: '35',
      title: 'Still Life Painting',
      category: 'Custom Paintings',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=800&fit=crop',
      description: 'Classic still life arrangement'
    },

    // Digital Art Category
    {
      id: '36',
      title: 'Digital Portrait',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop',
      description: 'High-resolution digital portrait'
    },
    {
      id: '37',
      title: 'Digital Landscape',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1522766008596-dc94c36c844d?w=800&h=800&fit=crop',
      description: 'Immersive digital landscape'
    },
    {
      id: '38',
      title: 'Digital Illustration',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&h=800&fit=crop',
      description: 'Creative digital illustration with unique style'
    },
    {
      id: '39',
      title: 'Digital Abstract',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop',
      description: 'Modern digital abstract art'
    },
    {
      id: '40',
      title: 'Digital Character Design',
      category: 'Digital Art',
      image: 'https://images.unsplash.com/photo-1581714273516-e9c876b50651?w=800&h=800&fit=crop',
      description: 'Unique character illustrations'
    },

    // Mixed Media Category
    {
      id: '41',
      title: 'Mixed Media Collage',
      category: 'Mixed Media',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Creative collage combining various materials'
    },
    {
      id: '42',
      title: 'Textured Mixed Media',
      category: 'Mixed Media',
      image: 'https://images.unsplash.com/photo-1610074320828-b042a0e5c577?w=800&h=800&fit=crop',
      description: 'Richly textured mixed media piece'
    },
    {
      id: '43',
      title: 'Mixed Media Portrait',
      category: 'Mixed Media',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Portrait combining multiple techniques'
    },
    {
      id: '44',
      title: 'Abstract Mixed Media',
      category: 'Mixed Media',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Abstract composition in mixed media'
    },
    {
      id: '45',
      title: 'Mixed Media Wall Art',
      category: 'Mixed Media',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art in mixed media'
    },

    // Anniversary Gifts Category
    {
      id: '46',
      title: 'Anniversary Portrait',
      category: 'Anniversary Gifts',
      image: 'https://images.unsplash.com/photo-1505305130871-e55c3859a09a?w=800&h=800&fit=crop',
      description: 'Special portrait for anniversary celebration'
    },
    {
      id: '47',
      title: 'Love Story Art',
      category: 'Anniversary Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Artwork capturing your love story'
    },
    {
      id: '48',
      title: 'Anniversary Frame',
      category: 'Anniversary Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom frame for anniversary photos'
    },
    {
      id: '49',
      title: 'Anniversary Keepsake',
      category: 'Anniversary Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for your anniversary'
    },
    {
      id: '50',
      title: 'Anniversary Wall Art',
      category: 'Anniversary Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art for anniversary'
    },

    // Birthday Gifts Category
    {
      id: '51',
      title: 'Birthday Portrait',
      category: 'Birthday Gifts',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop',
      description: 'Special portrait for birthday celebration'
    },
    {
      id: '52',
      title: 'Birthday Memory Art',
      category: 'Birthday Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Artwork capturing birthday memories'
    },
    {
      id: '53',
      title: 'Birthday Frame',
      category: 'Birthday Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom frame for birthday photos'
    },
    {
      id: '54',
      title: 'Birthday Keepsake',
      category: 'Birthday Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for birthday'
    },
    {
      id: '55',
      title: 'Birthday Wall Art',
      category: 'Birthday Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art for birthday'
    },

    // Wedding Gifts Category
    {
      id: '56',
      title: 'Wedding Portrait',
      category: 'Wedding Gifts',
      image: 'https://images.unsplash.com/photo-1505305130871-e55c3859a09a?w=800&h=800&fit=crop',
      description: 'Special portrait for wedding celebration'
    },
    {
      id: '57',
      title: 'Wedding Memory Art',
      category: 'Wedding Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Artwork capturing wedding memories'
    },
    {
      id: '58',
      title: 'Wedding Frame',
      category: 'Wedding Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom frame for wedding photos'
    },
    {
      id: '59',
      title: 'Wedding Keepsake',
      category: 'Wedding Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for wedding'
    },
    {
      id: '60',
      title: 'Wedding Wall Art',
      category: 'Wedding Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art for wedding'
    },

    // Corporate Gifts Category
    {
      id: '61',
      title: 'Corporate Logo Art',
      category: 'Corporate Gifts',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop',
      description: 'Artistic representation of company logo'
    },
    {
      id: '62',
      title: 'Office Wall Art',
      category: 'Corporate Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Professional wall art for office'
    },
    {
      id: '63',
      title: 'Corporate Awards',
      category: 'Corporate Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom awards and recognition pieces'
    },
    {
      id: '64',
      title: 'Executive Gifts',
      category: 'Corporate Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Premium gifts for executives'
    },
    {
      id: '65',
      title: 'Team Recognition Art',
      category: 'Corporate Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Artwork celebrating team achievements'
    },

    // Housewarming Gifts Category
    {
      id: '66',
      title: 'Home Portrait',
      category: 'Housewarming Gifts',
      image: 'https://images.unsplash.com/photo-1505305130871-e55c3859a09a?w=800&h=800&fit=crop',
      description: 'Artistic portrait of new home'
    },
    {
      id: '67',
      title: 'Housewarming Wall Art',
      category: 'Housewarming Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Decorative art for new home'
    },
    {
      id: '68',
      title: 'Welcome Sign',
      category: 'Housewarming Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom welcome sign for new home'
    },
    {
      id: '69',
      title: 'Home Keepsake',
      category: 'Housewarming Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for new home'
    },
    {
      id: '70',
      title: 'Home Decoration',
      category: 'Housewarming Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative pieces for new home'
    },

    // Graduation Gifts Category
    {
      id: '71',
      title: 'Graduation Portrait',
      category: 'Graduation Gifts',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop',
      description: 'Special portrait for graduation'
    },
    {
      id: '72',
      title: 'Achievement Art',
      category: 'Graduation Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Artwork celebrating graduation'
    },
    {
      id: '73',
      title: 'Diploma Frame',
      category: 'Graduation Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom frame for diploma'
    },
    {
      id: '74',
      title: 'Graduation Keepsake',
      category: 'Graduation Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for graduation'
    },
    {
      id: '75',
      title: 'Graduation Wall Art',
      category: 'Graduation Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art for graduation'
    },

    // Baby Shower Gifts Category
    {
      id: '76',
      title: 'Baby Portrait',
      category: 'Baby Shower Gifts',
      image: 'https://images.unsplash.com/photo-1505305130871-e55c3859a09a?w=800&h=800&fit=crop',
      description: 'Special portrait for baby'
    },
    {
      id: '77',
      title: 'Nursery Art',
      category: 'Baby Shower Gifts',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop',
      description: 'Decorative art for nursery'
    },
    {
      id: '78',
      title: 'Baby Memory Frame',
      category: 'Baby Shower Gifts',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=800&fit=crop',
      description: 'Custom frame for baby photos'
    },
    {
      id: '79',
      title: 'Baby Keepsake',
      category: 'Baby Shower Gifts',
      image: 'https://images.unsplash.com/photo-1615160540027-f1f671c21d7b?w=800&h=800&fit=crop',
      description: 'Special keepsake for baby'
    },
    {
      id: '80',
      title: 'Baby Wall Art',
      category: 'Baby Shower Gifts',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop',
      description: 'Decorative wall art for baby'
    }
  ];

  const categories = [
    'all',
    'Pencil Art',
    'Resin Art',
    'Resin Gifts',
    'Custom Paintings',
    'Digital Art',
    'Mixed Media',
    'Anniversary Gifts',
    'Birthday Gifts',
    'Wedding Gifts',
    'Corporate Gifts',
    'Housewarming Gifts',
    'Graduation Gifts',
    'Baby Shower Gifts'
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-dancing text-5xl md:text-6xl text-gray-800 mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of handcrafted pencil art and unique resin pieces
          </p>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openModal(item.image)}>
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
                <div className="absolute top-2 right-2">
                  <WishlistButton item={item} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Enlarged gallery item" className="max-w-full max-h-[80vh] object-contain" />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                X
              </Button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-12">
          <h2 className="font-dancing text-4xl text-gray-800 mb-4">Love What You See?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to commission your own custom piece? Let's bring your vision to life!
          </p>
          <Link to="/custom-orders">
            <Button 
              size="lg" 
              className="bg-pink-400 hover:bg-pink-500 text-white px-8"
            >
              Start Your Custom Order
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
