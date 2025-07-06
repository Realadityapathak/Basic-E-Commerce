import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    description: 'High-quality wireless headphones with active noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    tags: ['wireless', 'headphones', 'audio', 'premium'],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    stockCount: 45,
    brand: 'AudioTech',
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Noise Cancellation': 'Active',
      'Weight': '250g'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and waterproof design. Track your workouts and stay connected.',
    images: [
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    tags: ['fitness', 'smartwatch', 'health', 'waterproof'],
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    stockCount: 32,
    brand: 'FitTech',
    specifications: {
      'Battery Life': '7 days',
      'Water Resistance': '50m',
      'Display': '1.4" AMOLED',
      'Sensors': 'Heart Rate, GPS, Accelerometer'
    }
  },
  {
    id: '3',
    name: 'Minimalist Laptop Stand',
    price: 79.99,
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle. Improve your posture and productivity.',
    images: [
      'https://images.pexels.com/photos/7542/tools-school-colorful-creativity.jpg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Accessories',
    tags: ['laptop', 'stand', 'ergonomic', 'aluminum'],
    rating: 4.7,
    reviewCount: 56,
    inStock: true,
    stockCount: 78,
    brand: 'DeskPro',
    specifications: {
      'Material': 'Aluminum',
      'Adjustable': 'Height & Angle',
      'Compatibility': 'Up to 17" laptops',
      'Weight': '1.2kg'
    }
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    description: 'Soft, comfortable organic cotton t-shirt with sustainable production. Available in multiple colors and sizes.',
    images: [
      'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Clothing',
    tags: ['organic', 'cotton', 'sustainable', 'casual'],
    rating: 4.5,
    reviewCount: 203,
    inStock: true,
    stockCount: 156,
    brand: 'EcoWear',
    specifications: {
      'Material': '100% Organic Cotton',
      'Fit': 'Regular',
      'Care': 'Machine Washable',
      'Origin': 'Sustainably Sourced'
    }
  },
  {
    id: '5',
    name: 'Premium Coffee Beans',
    price: 24.99,
    description: 'Single-origin coffee beans from Guatemala, medium roast with notes of chocolate and caramel. Perfect for coffee enthusiasts.',
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Food & Beverage',
    tags: ['coffee', 'beans', 'single-origin', 'premium'],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    stockCount: 89,
    brand: 'Mountain Peak Coffee',
    specifications: {
      'Origin': 'Guatemala',
      'Roast': 'Medium',
      'Notes': 'Chocolate, Caramel',
      'Weight': '12oz (340g)'
    }
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    price: 39.99,
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    images: [
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    tags: ['wireless', 'charging', 'qi', 'fast'],
    rating: 4.4,
    reviewCount: 67,
    inStock: true,
    stockCount: 134,
    brand: 'ChargeTech',
    specifications: {
      'Power': '15W Fast Charging',
      'Compatibility': 'Qi-enabled devices',
      'Indicator': 'LED Status Light',
      'Safety': 'Over-heat Protection'
    }
  },
  {
    id: '7',
    name: 'Leather Messenger Bag',
    price: 149.99,
    originalPrice: 199.99,
    description: 'Handcrafted leather messenger bag with multiple compartments. Perfect for work or travel.',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1152076/pexels-photo-1152076.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Accessories',
    tags: ['leather', 'bag', 'messenger', 'handcrafted'],
    rating: 4.6,
    reviewCount: 91,
    inStock: true,
    stockCount: 23,
    brand: 'Heritage Leather',
    specifications: {
      'Material': 'Genuine Leather',
      'Dimensions': '15" x 11" x 4"',
      'Compartments': 'Multiple',
      'Closure': 'Magnetic Flap'
    }
  },
  {
    id: '8',
    name: 'Bamboo Cutting Board Set',
    price: 34.99,
    description: 'Set of 3 bamboo cutting boards in different sizes. Eco-friendly, antimicrobial, and durable.',
    images: [
      'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home & Kitchen',
    tags: ['bamboo', 'cutting', 'board', 'eco-friendly'],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    stockCount: 67,
    brand: 'Green Kitchen',
    specifications: {
      'Material': '100% Bamboo',
      'Set Size': '3 Boards',
      'Sizes': 'Small, Medium, Large',
      'Care': 'Hand Wash Only'
    }
  }
];

export const categories = [
  'All Categories',
  'Electronics',
  'Clothing',
  'Accessories',
  'Home & Kitchen',
  'Food & Beverage'
];

export const brands = [
  'All Brands',
  'AudioTech',
  'FitTech',
  'DeskPro',
  'EcoWear',
  'Mountain Peak Coffee',
  'ChargeTech',
  'Heritage Leather',
  'Green Kitchen'
];