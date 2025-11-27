import Link from 'next/link';
import Image from 'next/image';
import { Button, Section, SectionHeader, Card, CardContent, CardTitle } from '@/components/ui';
import { getFeaturedProducts, categories } from '@/data/products';

// Icons for the "Why AM Seafood" section
const features = [
  {
    title: 'American Sourced',
    description: 'Every product comes from American fisheries, supporting U.S. fishing communities and ensuring the highest quality standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3m18 18V3M12 21V3m-3 18h6M6 12h12M6 6h12M6 18h12" />
      </svg>
    ),
  },
  {
    title: 'Fully Traceable',
    description: 'Know exactly where your seafood comes from. Complete chain of custody from dock to delivery.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Sustainably Harvested',
    description: 'We partner with fisheries committed to sustainable practices, protecting our oceans for future generations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
      </svg>
    ),
  },
  {
    title: 'Premium Quality',
    description: 'Rigorous quality control at every step. Temperature-controlled handling from catch to customer.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "AM Seafood has been our go-to supplier for three years. The consistency and quality are unmatched.",
    author: "Chef Michael Torres",
    role: "Executive Chef, The Coastal Table",
  },
  {
    quote: "Finally, a supplier who understands what restaurants need—reliability, quality, and transparency.",
    author: "Sarah Chen",
    role: "Purchasing Director, Ocean Bistro Group",
  },
  {
    quote: "Their Gulf shrimp is the best we've ever had. Our customers can taste the difference.",
    author: "James Williams",
    role: "Owner, Harbor Fresh Market",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-fishing.jpg')`,
          }}
        >
          {/* Fallback gradient if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-ocean-mid to-navy" />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Animated wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            className="w-full h-24 md:h-32 text-white"
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path 
              fill="currentColor" 
              d="M0,64 C240,120 480,20 720,64 C960,108 1200,20 1440,64 L1440,120 L0,120 Z"
              className="animate-wave"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center pt-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-ocean-light bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in-up">
              🇺🇸 American Caught. American Made.
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-100">
              Premium American-Caught Seafood,{' '}
              <span className="text-ocean-light">Delivered with Integrity</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
              From the docks of Fernandina Beach to your kitchen—we source the finest 
              seafood from U.S. fisheries with complete traceability and uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Button href="/products" variant="secondary" size="lg">
                View Products
              </Button>
              <Button href="/wholesale" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-deep">
                Request Wholesale Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why AM Seafood Section */}
      <Section background="white" padding="xl">
        <SectionHeader 
          title="Why American Made Seafood?"
          subtitle="We're more than a supplier—we're your partner in delivering exceptional seafood experiences."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep group-hover:bg-ocean-deep group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <CardTitle className="mb-3">{feature.title}</CardTitle>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Products Section */}
      <Section background="gradient" padding="xl">
        <SectionHeader 
          title="Featured Products"
          subtitle="Explore our selection of premium American-caught seafood, sourced fresh from U.S. waters."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.slice(0, 6).map((product) => (
            <Card key={product.id} padding="none" className="overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-ocean-foam to-ocean-light overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-medium text-ocean-mid bg-ocean-foam rounded-full mb-2 capitalize">
                  {product.category}
                </span>
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <CardContent>
                  <p className="line-clamp-2 mb-3">{product.description}</p>
                  <p className="text-sm text-ocean-mid font-medium">{product.origin}</p>
                </CardContent>
                <div className="mt-4">
                  <Button href={`/products?highlight=${product.id}`} variant="ghost" size="sm" className="w-full">
                    View Details →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/products" variant="primary" size="lg">
            View All Products
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="ocean" padding="xl">
        <SectionHeader 
          title="Trusted by Chefs & Distributors"
          subtitle="See why culinary professionals across the country choose AM Seafood."
          className="text-white [&_h2]:text-white [&_p]:text-ocean-light"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <svg className="w-10 h-10 text-ocean-light mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-white/90 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-ocean-light text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Categories Section */}
      <Section background="light" padding="xl">
        <SectionHeader 
          title="Browse by Category"
          subtitle="Find exactly what you need from our comprehensive selection."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(c => c.id !== 'all').map((category) => (
            <Link 
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-ocean-deep to-ocean-mid p-8 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-ocean-light">{category.description}</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-ocean-light group-hover:text-white transition-colors">
                  Explore {category.name}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ocean-deep via-ocean-mid to-navy p-8 md:p-12 lg:p-16 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-ocean-light mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a restaurant, distributor, or retailer, we&apos;re here to supply 
              you with the finest American-caught seafood.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/wholesale" variant="secondary" size="lg">
                Request Wholesale Quote
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ocean-deep">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
      </Section>
    </>
  );
}
