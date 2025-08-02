'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  GlobeAltIcon, 
  ShieldCheckIcon, 
  TruckIcon,
  UsersIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const stats = [
  { value: '50+', label: 'Countries Served', icon: GlobeAltIcon },
  { value: '15+', label: 'Years Experience', icon: ShieldCheckIcon },
  { value: '1000+', label: 'Happy Clients', icon: UsersIcon },
  { value: '24/7', label: 'Export Support', icon: TruckIcon },
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='30' cy='30' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <ShieldCheckIcon className="h-4 w-4" />
              <span>ISO 9001:2015 Certified Export Company</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Indian
                <span className="text-transparent bg-clip-text bg-gradient-primary"> Exports</span>
                <br />to Global Markets
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Your trusted partner for high-quality exports from India. We deliver 
                excellence across 50+ countries with complete documentation support, 
                competitive pricing, and guaranteed quality assurance.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <TruckIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <GlobeAltIcon className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">Global Reach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <UsersIcon className="h-5 w-5 text-orange-600" />
                </div>
                <span className="text-gray-700 font-medium">Expert Support</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/quote" className="btn-primary inline-flex items-center justify-center group">
                Get Free Quote
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/products" className="btn-secondary inline-flex items-center justify-center">
                View Products
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center space-x-6 pt-6 border-t border-gray-200"
            >
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Trusted by:</span> Fortune 500 companies worldwide
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Export Dashboard</h3>
                  <p className="text-gray-600">Real-time global operations</p>
                </div>

                {/* World Map Representation */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                  <GlobeAltIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-2xl text-blue-600">50+</div>
                      <div className="text-gray-600">Countries</div>
                    </div>
                    <div>
                      <div className="font-bold text-2xl text-green-600">1000+</div>
                      <div className="text-gray-600">Clients</div>
                    </div>
                  </div>
                </div>

                {/* Active Shipments */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Active Shipments</h4>
                  {[
                    { country: 'USA', status: 'In Transit', color: 'bg-green-500' },
                    { country: 'Germany', status: 'Customs', color: 'bg-yellow-500' },
                    { country: 'Japan', status: 'Delivered', color: 'bg-blue-500' },
                  ].map((shipment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${shipment.color}`} />
                        <span className="font-medium">{shipment.country}</span>
                      </div>
                      <span className="text-sm text-gray-600">{shipment.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99.8%</div>
                  <div className="text-xs text-gray-600">On-time Delivery</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-primary p-3 rounded-xl w-fit mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;