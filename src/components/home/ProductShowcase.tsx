'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRightIcon,
  CubeIcon,
  BeakerIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const productCategories = [
  {
    id: 1,
    name: 'Textiles & Garments',
    description: 'Premium quality cotton, silk, and synthetic textiles for global fashion brands',
    features: ['OEKO-TEX Certified', 'MOQ: 1000 pieces', 'Custom designs available'],
    exportData: {
      countries: 25,
      volume: '500+ tons/month',
      certification: 'GOTS Certified'
    },
    icon: SparklesIcon,
    image: '/api/placeholder/400/300',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'Spices & Food Products',
    description: 'Authentic Indian spices and processed food products with global quality standards',
    features: ['HACCP Certified', 'Organic variants available', 'Custom packaging'],
    exportData: {
      countries: 40,
      volume: '200+ tons/month',
      certification: 'FSSAI Approved'
    },
    icon: BeakerIcon,
    image: '/api/placeholder/400/300',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 3,
    name: 'Engineering Goods',
    description: 'Precision-engineered components and machinery for industrial applications',
    features: ['ISO 9001 Quality', 'Custom manufacturing', 'Technical support'],
    exportData: {
      countries: 30,
      volume: '1000+ units/month',
      certification: 'CE Marked'
    },
    icon: CubeIcon,
    image: '/api/placeholder/400/300',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Pharmaceuticals',
    description: 'WHO-GMP certified pharmaceutical products and active ingredients',
    features: ['WHO-GMP Certified', 'Regulatory support', 'Cold chain logistics'],
    exportData: {
      countries: 20,
      volume: '50+ tons/month',
      certification: 'WHO-GMP'
    },
    icon: ShieldCheckIcon,
    image: '/api/placeholder/400/300',
    color: 'from-green-500 to-emerald-500'
  }
];

const ProductShowcase = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Export Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of high-quality products, each meeting 
            international standards and backed by proper certifications.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Quality Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Export Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Global Compliance</span>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-0 overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-90`} />
                  <div className="absolute inset-0 bg-black opacity-20" />
                  <div className="relative z-10 p-6 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <product.icon className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                  
                  {/* Certification Badge */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {product.exportData.certification}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Export Data */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {product.exportData.countries}+
                      </div>
                      <div className="text-xs text-gray-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">
                        {product.exportData.volume}
                      </div>
                      <div className="text-xs text-gray-600">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        ★★★★★
                      </div>
                      <div className="text-xs text-gray-600">Quality</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <Link 
                      href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex-1 btn-primary text-center group"
                    >
                      View Products
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      href={`/quote?category=${product.name}`}
                      className="btn-outline"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See Your Product Category?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We work with a vast network of verified suppliers across India. 
              Let us know your requirements, and we'll source the best products for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/custom-sourcing" className="btn-secondary bg-white text-blue-600 hover:bg-gray-50">
                Custom Sourcing
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
                Discuss Requirements
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Export Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium mb-1">Product Variants</div>
            <div className="text-sm text-gray-600">Across all categories</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700 font-medium mb-1">Export Markets</div>
            <div className="text-sm text-gray-600">Worldwide presence</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-gray-700 font-medium mb-1">Certifications</div>
            <div className="text-sm text-gray-600">Quality assured</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;