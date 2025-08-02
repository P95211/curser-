'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon,
  StarIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: ShieldCheckIcon,
    color: 'text-blue-600 bg-blue-100',
    verified: true
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    icon: GlobeAltIcon,
    color: 'text-green-600 bg-green-100',
    verified: true
  },
  {
    name: 'HACCP Certified',
    description: 'Food Safety Management',
    icon: AcademicCapIcon,
    color: 'text-purple-600 bg-purple-100',
    verified: true
  },
  {
    name: 'FIEO Member',
    description: 'Federation of Indian Export Organizations',
    icon: BuildingOfficeIcon,
    color: 'text-orange-600 bg-orange-100',
    verified: true
  }
];

const testimonials = [
  {
    name: 'Michael Johnson',
    company: 'Global Trading Corp, USA',
    rating: 5,
    text: 'Outstanding quality and service. GlobalExport has been our trusted partner for 5+ years. Their attention to detail and timely delivery is exceptional.',
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Sarah Chen',
    company: 'Pacific Imports, Australia',
    rating: 5,
    text: 'Professional team with deep export knowledge. They handle all documentation seamlessly and their products consistently exceed our expectations.',
    image: '/api/placeholder/60/60'
  },
  {
    name: 'Hans Mueller',
    company: 'European Distributors, Germany',
    rating: 5,
    text: 'Reliable supplier with competitive pricing. Their compliance with international standards and quality certifications gives us complete confidence.',
    image: '/api/placeholder/60/60'
  }
];

const stats = [
  { value: '1000+', label: 'Happy Clients', sublabel: 'Across 50+ countries' },
  { value: '99.8%', label: 'On-time Delivery', sublabel: 'Consistent performance' },
  { value: '15+', label: 'Years Experience', sublabel: 'In global trade' },
  { value: '24/7', label: 'Support Available', sublabel: 'Expert assistance' }
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-gray-50">
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
            Trusted by Global Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, compliance, and customer satisfaction has earned us 
            the trust of leading companies worldwide.
          </p>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards of quality and compliance with 
              internationally recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`${cert.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <cert.icon className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {cert.description}
                </p>
                {cert.verified && (
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <ShieldCheckIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our global clients 
              have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Verified & Trusted Export Partner
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-green-100 p-3 rounded-full">
                  <ShieldCheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Government Verified
                </div>
                <div className="text-xs text-gray-600">IEC Registered</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Bank Verified
                </div>
                <div className="text-xs text-gray-600">Credit Approved</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-purple-100 p-3 rounded-full">
                  <GlobeAltIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Global Reach
                </div>
                <div className="text-xs text-gray-600">50+ Countries</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-orange-100 p-3 rounded-full">
                  <UserGroupIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  Client Satisfaction
                </div>
                <div className="text-xs text-gray-600">4.9/5 Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;