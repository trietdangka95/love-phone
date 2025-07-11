import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '../types';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/product/ProductCard';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with API call
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

    setTimeout(() => {
      setFeaturedProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Love Phone
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Cửa hàng điện thoại uy tín hàng đầu Việt Nam
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Khám phá ngay
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-lg text-gray-600">
              Những sản phẩm được yêu thích nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Danh mục sản phẩm
            </h2>
            <p className="text-lg text-gray-600">
              Chọn danh mục bạn quan tâm
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Smartphone', icon: '📱', count: 50 },
              { name: 'Laptop', icon: '💻', count: 30 },
              { name: 'Tablet', icon: '📱', count: 20 },
              { name: 'Phụ kiện', icon: '🎧', count: 100 },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count} sản phẩm</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 