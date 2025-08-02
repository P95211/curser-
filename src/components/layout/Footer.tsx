import Link from 'next/link';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">GlobalExport</h2>
                <p className="text-sm text-gray-400">Premium Indian Exports</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Indian export company with 15+ years of experience in delivering 
              high-quality products to global markets. ISO certified and trusted by 
              clients worldwide.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <ShieldCheckIcon className="h-5 w-5 text-green-400" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/markets" className="text-gray-300 hover:text-white transition-colors">Markets We Serve</Link></li>
              <li><Link href="/certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/quote" className="text-gray-300 hover:text-white transition-colors">Request Quote</Link></li>
              <li><Link href="/sample-request" className="text-gray-300 hover:text-white transition-colors">Sample Request</Link></li>
              <li><Link href="/trade-resources" className="text-gray-300 hover:text-white transition-colors">Trade Resources</Link></li>
              <li><Link href="/export-documentation" className="text-gray-300 hover:text-white transition-colors">Export Documentation</Link></li>
              <li><Link href="/quality-assurance" className="text-gray-300 hover:text-white transition-colors">Quality Assurance</Link></li>
              <li><Link href="/logistics-support" className="text-gray-300 hover:text-white transition-colors">Logistics Support</Link></li>
              <li><Link href="/buyer-portal" className="text-gray-300 hover:text-white transition-colors">Buyer Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Export House, Industrial Area<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 22 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">export@globalexport.com</p>
                  <p className="text-gray-300">info@globalexport.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BuildingOfficeIcon className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">IEC: 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Our Certifications & Memberships</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-blue-600 font-bold text-sm">ISO 9001:2015</div>
              <div className="text-xs text-gray-600">Quality Management</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-green-600 font-bold text-sm">ISO 14001</div>
              <div className="text-xs text-gray-600">Environmental</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-purple-600 font-bold text-sm">HACCP</div>
              <div className="text-xs text-gray-600">Food Safety</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-orange-600 font-bold text-sm">FIEO</div>
              <div className="text-xs text-gray-600">Member</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-red-600 font-bold text-sm">DGFT</div>
              <div className="text-xs text-gray-600">Registered</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-blue-800 font-bold text-sm">CII</div>
              <div className="text-xs text-gray-600">Member</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 GlobalExport. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="/export-policy" className="hover:text-white transition-colors">Export Policy</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>🇮🇳 Made in India</span>
              <span>|</span>
              <span>🌍 Exported Globally</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;