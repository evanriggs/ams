import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Sourcing & Quality', href: '/sourcing' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    { name: 'Gulf Shrimp', href: '/products?category=shellfish' },
    { name: 'Atlantic Grouper', href: '/products?category=finfish' },
    { name: 'Yellowfin Tuna', href: '/products?category=finfish' },
    { name: 'Snow Crab', href: '/products?category=shellfish' },
    { name: 'All Products', href: '/products' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Wave decoration */}
      <div className="relative h-16 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full text-navy"
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            fill="currentColor" 
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg 
                className="w-10 h-10 text-ocean-light"
                viewBox="0 0 40 40" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4C12 4 6 10 6 18c0 4 2 8 5 11l9 7 9-7c3-3 5-7 5-11 0-8-6-14-14-14zm0 4c2 0 4 1 5 2-1 1-3 2-5 2s-4-1-5-2c1-1 3-2 5-2zm-8 6c2-1 5-2 8-2s6 1 8 2c0 4-2 7-4 9l-4 3-4-3c-2-2-4-5-4-9z"/>
              </svg>
              <span className="text-2xl font-bold">AM Seafood</span>
            </Link>
            <p className="text-ocean-light/80 mb-4 max-w-md">
              American Caught. American Made. Premium seafood sourced directly from 
              American fisheries, delivered with integrity to restaurants, distributors, 
              and culinary professionals nationwide.
            </p>
            <p className="text-sm text-ocean-light/60">
              Owned and operated by Roger Riggs in Fernandina Beach, Florida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ocean-light">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ocean-light">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-ocean-deep/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-ocean-light/70">
              <a 
                href="mailto:info@amseafood.com" 
                className="hover:text-white transition-colors"
              >
                info@amseafood.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a 
                href="tel:+15555555555" 
                className="hover:text-white transition-colors"
              >
                (555) 555-5555
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Fernandina Beach, Florida</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-ocean-light/70 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ocean-deep/50 py-6 text-center text-sm text-ocean-light/50">
          <p>
            © {new Date().getFullYear()} American Made Seafood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

