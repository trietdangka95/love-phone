import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/product/ProductCard';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 35000000,
    description: 'iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera 48MP',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop',
    category: 'smartphone',
    inStock: true,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 28000000,
    description: 'Samsung Galaxy S24 Ultra với S Pen tích hợp',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop',
    category: 'smartphone',
    inStock: true,
  },
  {
    id: '3',
    name: 'MacBook Pro M3',
    price: 45000000,
    description: 'MacBook Pro với chip M3, hiệu năng vượt trội',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
    category: 'laptop',
    inStock: true,
  },
  {
    id: '4',
    name: 'iPad Pro 12.9',
    price: 25000000,
    description: 'iPad Pro 12.9 inch với chip M2',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
    category: 'tablet',
    inStock: false,
  },
  {
    id: '5',
    name: 'AirPods Pro 2',
    price: 6500000,
    description: 'AirPods Pro 2 với Active Noise Cancellation',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
    category: 'accessories',
    inStock: true,
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    price: 12000000,
    description: 'Apple Watch Series 9 với tính năng sức khỏe nâng cao',
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop',
    category: 'accessories',
    inStock: true,
  },
  {
    id: '7',
    name: 'Dell XPS 13',
    price: 32000000,
    description: 'Dell XPS 13 với thiết kế InfinityEdge',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
    category: 'laptop',
    inStock: true,
  },
  {
    id: '8',
    name: 'Samsung Galaxy Tab S9',
    price: 18000000,
    description: 'Samsung Galaxy Tab S9 với màn hình AMOLED',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    category: 'tablet',
    inStock: true,
  },
];

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(mockProducts.map(product => product.category)));
    return uniqueCategories;
  }, []);

  // Filter products based on search, category, and stock status
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesStock = !showInStockOnly || product.inStock;
      
      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [products, searchTerm, selectedCategory, showInStockOnly]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setShowInStockOnly(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tất cả sản phẩm</h1>
          <p className="text-lg text-gray-600">Khám phá các sản phẩm nổi bật của Love Phone</p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
            {/* Search Input */}
            <div className="flex-1 min-w-0">
              <Input
                label="Tìm kiếm sản phẩm"
                placeholder="Nhập tên sản phẩm..."
                value={searchTerm}
                onChange={setSearchTerm}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-gray-700 text-left mb-1">
                Loại sản phẩm
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Tất cả loại</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* In Stock Filter */}
            <div className="flex items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showInStockOnly}
                  onChange={(e) => setShowInStockOnly(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Chỉ hiện còn hàng</span>
              </label>
            </div>

            {/* Clear Filters Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="whitespace-nowrap"
            >
              Xóa bộ lọc
            </Button>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Hiển thị {filteredProducts.length} sản phẩm
            {(searchTerm || selectedCategory || showInStockOnly) && (
              <span className="text-blue-600"> (đã lọc)</span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">
              Không tìm thấy sản phẩm phù hợp
            </div>
            <p className="text-gray-400">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="mt-4"
            >
              Xóa bộ lọc
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage; 