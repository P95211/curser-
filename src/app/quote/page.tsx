import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request Export Quote - GlobalExport | Get Competitive Pricing',
  description: 'Get detailed export quotes for Indian products. Competitive pricing, complete documentation support, and fast delivery to 50+ countries worldwide.',
  keywords: 'export quote, Indian exports, international trade, export pricing, global shipping',
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}