'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  TruckIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface QuoteFormData {
  // Company Information
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  
  // Product Requirements
  productCategory: string;
  productDescription: string;
  quantity: string;
  unit: string;
  targetPrice: string;
  currency: string;
  
  // Shipping & Terms
  incoterms: string;
  destinationPort: string;
  deliveryTimeline: string;
  paymentTerms: string;
  
  // Additional Information
  qualityRequirements: string;
  certificationNeeds: string;
  additionalNotes: string;
  
  // Sample Requirements
  sampleRequired: boolean;
  sampleBudget: string;
}

const productCategories = [
  'Textiles & Garments',
  'Spices & Food Products',
  'Engineering Goods',
  'Pharmaceuticals',
  'Chemicals',
  'Handicrafts',
  'Leather Products',
  'Agricultural Products',
  'Electronics',
  'Other (Please specify)'
];

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
];

const incoterms = [
  'FOB (Free on Board)',
  'CIF (Cost, Insurance & Freight)',
  'CFR (Cost & Freight)',
  'EXW (Ex Works)',
  'FCA (Free Carrier)',
  'CPT (Carriage Paid To)',
  'CIP (Carriage & Insurance Paid)',
  'DAP (Delivered at Place)',
  'DDP (Delivered Duty Paid)'
];

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<QuoteFormData>();

  const sampleRequired = watch('sampleRequired');

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Quote Request:', data);
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <EnvelopeIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Submitted!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest. Our export team will review your requirements and 
          get back to you within 24 hours with a detailed quote.
        </p>
        <div className="text-sm text-green-600">
          Reference ID: QR-{Date.now().toString().slice(-6)}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Quote</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get a detailed quote for your export requirements. Our team will provide 
          competitive pricing, shipping options, and complete documentation support.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <GlobeAltIcon className="h-6 w-6 mr-2 text-blue-600" />
            Company Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                {...register('companyName', { required: 'Company name is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Company Name"
              />
              {errors.companyName && (
                <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                {...register('contactPerson', { required: 'Contact person is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Full Name"
              />
              {errors.contactPerson && (
                <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="email@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone', { required: 'Phone number is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 234 567 8900"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <input
                type="text"
                {...register('country', { required: 'Country is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="United States"
              />
              {errors.country && (
                <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Product Requirements */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-2 text-blue-600" />
            Product Requirements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Category *
              </label>
              <select
                {...register('productCategory', { required: 'Product category is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Category</option>
                {productCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.productCategory && (
                <p className="mt-1 text-sm text-red-600">{errors.productCategory.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Currency *
              </label>
              <select
                {...register('currency', { required: 'Currency is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Currency</option>
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
              {errors.currency && (
                <p className="mt-1 text-sm text-red-600">{errors.currency.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Description *
              </label>
              <textarea
                {...register('productDescription', { required: 'Product description is required' })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Detailed description of the product you need..."
              />
              {errors.productDescription && (
                <p className="mt-1 text-sm text-red-600">{errors.productDescription.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity *
              </label>
              <input
                type="text"
                {...register('quantity', { required: 'Quantity is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="1000"
              />
              {errors.quantity && (
                <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit *
              </label>
              <input
                type="text"
                {...register('unit', { required: 'Unit is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="pieces, kg, tons, etc."
              />
              {errors.unit && (
                <p className="mt-1 text-sm text-red-600">{errors.unit.message}</p>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Price Range
              </label>
              <input
                type="text"
                {...register('targetPrice')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., $10-15 per unit"
              />
            </div>
          </div>
        </div>

        {/* Shipping & Terms */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <TruckIcon className="h-6 w-6 mr-2 text-blue-600" />
            Shipping & Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Incoterms *
              </label>
              <select
                {...register('incoterms', { required: 'Incoterms is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Incoterms</option>
                {incoterms.map((term) => (
                  <option key={term} value={term}>{term}</option>
                ))}
              </select>
              {errors.incoterms && (
                <p className="mt-1 text-sm text-red-600">{errors.incoterms.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination Port *
              </label>
              <input
                type="text"
                {...register('destinationPort', { required: 'Destination port is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="New York, USA"
              />
              {errors.destinationPort && (
                <p className="mt-1 text-sm text-red-600">{errors.destinationPort.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Timeline *
              </label>
              <input
                type="text"
                {...register('deliveryTimeline', { required: 'Delivery timeline is required' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="30-45 days"
              />
              {errors.deliveryTimeline && (
                <p className="mt-1 text-sm text-red-600">{errors.deliveryTimeline.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Terms
              </label>
              <input
                type="text"
                {...register('paymentTerms')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="L/C at sight, T/T advance, etc."
              />
            </div>
          </div>
        </div>

        {/* Sample Requirements */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <input
              type="checkbox"
              {...register('sampleRequired')}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-lg font-semibold text-gray-900">
              Sample Required
            </label>
          </div>
          
          {sampleRequired && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sample Budget
                </label>
                <input
                  type="text"
                  {...register('sampleBudget')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Budget for samples including shipping"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quality Requirements & Standards
              </label>
              <textarea
                {...register('qualityRequirements')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Specific quality standards, testing requirements, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certification Needs
              </label>
              <textarea
                {...register('certificationNeeds')}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Required certifications (ISO, FDA, CE, etc.)"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                {...register('additionalNotes')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any other requirements or information you'd like to share..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              'Submit Quote Request'
            )}
          </button>
          <p className="mt-4 text-sm text-gray-600">
            We'll respond within 24 hours with a detailed quote and next steps.
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default QuoteForm;