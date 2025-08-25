export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Copyright */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-supreme-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-supreme-blue font-bold text-lg">SUPREME</span>
                <span className="text-black font-medium text-xs">GROUP</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              ©2023. All Rights Reserved.
            </p>
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">APPLICATIONS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Apparel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Automotive</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Filtration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Customised Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Innovation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Global Competency</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">MORE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-black font-bold text-sm mb-4">FOLLOW US</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-gray-600 hover:text-supreme-blue transition-colors text-sm">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-end">
            <p className="text-gray-600 text-sm text-right">
              Supreme house 110, 16th Road, Chembur Mumbai - 400071
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
