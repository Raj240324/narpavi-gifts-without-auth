import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

interface FilterOptions {
  category: string;
  priceRange: string;
  sortBy: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = React.useState<FilterOptions>({
    category: 'all',
    priceRange: 'all',
    sortBy: 'newest'
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <Select
        value={filters.category}
        onValueChange={(value) => handleFilterChange('category', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="pencil-art">Pencil Art</SelectItem>
          <SelectItem value="resin-art">Resin Art</SelectItem>
          <SelectItem value="custom-portraits">Custom Portraits</SelectItem>
          <SelectItem value="memorial-gifts">Memorial Gifts</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.priceRange}
        onValueChange={(value) => handleFilterChange('priceRange', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Prices</SelectItem>
          <SelectItem value="under-1000">Under ₹1,000</SelectItem>
          <SelectItem value="1000-3000">₹1,000 - ₹3,000</SelectItem>
          <SelectItem value="3000-5000">₹3,000 - ₹5,000</SelectItem>
          <SelectItem value="above-5000">Above ₹5,000</SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={filters.sortBy}
        onValueChange={(value) => handleFilterChange('sortBy', value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="oldest">Oldest First</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        onClick={() => {
          setFilters({ category: 'all', priceRange: 'all', sortBy: 'newest' });
          onFilterChange({ category: 'all', priceRange: 'all', sortBy: 'newest' });
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};

export default FilterBar; 