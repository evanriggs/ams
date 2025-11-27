'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Section, SectionHeader, Button, Card, CardTitle, CardContent } from '@/components/ui';
import { products, categories, ProductCategory } from '@/data/products';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory | 'all') || 'all';
  const highlightedProduct = searchParams.get('highlight');
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = activeCategory === 'all' 
      ? products 
      : products.filter(p => p.category === activeCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.origin.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  const handleInquire = (productName: string) => {
    // In production, this would open a modal or navigate to a form
    // For now, we'll redirect to the wholesale page with the product pre-selected
    window.location.href = `/wholesale?product=${encodeURIComponent(productName)}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-ocean-deep via-ocean-mid to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-ocean-light bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium American <span className="text-ocean-light">Seafood</span>
            </h1>
            <p className="text-xl text-white/90">
              Browse our selection of sustainably sourced, fully traceable seafood 
              from American fisheries.
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg 
            className="w-full h-16 text-white"
            viewBox="0 0 1440 60" 
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path 
              fill="currentColor" 
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,45 1440,30 L1440,60 L0,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Filters Section */}
      <Section background="light" padding="md">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-ocean-deep text-white shadow-lg'
                    : 'bg-white text-driftwood hover:bg-ocean-foam hover:text-ocean-deep'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white focus:border-ocean-mid focus:ring-2 focus:ring-ocean-light focus:outline-none"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </Section>

      {/* Products Grid */}
      <Section background="white" padding="xl">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-navy mb-2">No products found</h3>
            <p className="text-driftwood mb-4">Try adjusting your search or filter criteria.</p>
            <Button onClick={() => { setActiveCategory('all'); setSearchQuery(''); }} variant="outline">
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-driftwood">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  padding="none" 
                  className={`overflow-hidden group ${
                    highlightedProduct === product.id ? 'ring-2 ring-coral' : ''
                  }`}
                >
                  {/* Product Image */}
                  <div className="relative h-48 bg-gradient-to-br from-ocean-foam to-ocean-light overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-ocean-deep/0 group-hover:bg-ocean-deep/20 transition-colors duration-300" />
                    
                    {/* Featured badge */}
                    {product.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-coral text-white text-xs font-bold rounded-full z-10">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium text-ocean-mid bg-ocean-foam rounded-full capitalize">
                        {product.category}
                      </span>
                    </div>
                    
                    <CardTitle className="mb-2">{product.name}</CardTitle>
                    
                    <CardContent>
                      <p className="text-sm mb-4 line-clamp-2">{product.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-navy">Origin:</span>{' '}
                          <span className="text-driftwood">{product.origin}</span>
                        </div>
                        <div>
                          <span className="font-medium text-navy">Fishery:</span>{' '}
                          <span className="text-driftwood">{product.fishery}</span>
                        </div>
                      </div>

                      {/* Available Formats */}
                      <div className="mt-4">
                        <span className="font-medium text-navy text-sm">Available Formats:</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {product.formats.slice(0, 3).map((format, idx) => (
                            <span 
                              key={idx}
                              className="inline-block px-2 py-1 text-xs bg-gray-100 text-driftwood rounded"
                            >
                              {format}
                            </span>
                          ))}
                          {product.formats.length > 3 && (
                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-driftwood rounded">
                              +{product.formats.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    {/* Action Button */}
                    <div className="mt-6">
                      <Button 
                        onClick={() => handleInquire(product.name)}
                        variant="primary" 
                        size="sm" 
                        className="w-full"
                      >
                        Inquire About This Product
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="ocean" padding="lg">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Something Specific?
          </h2>
          <p className="text-xl text-ocean-light mb-8 max-w-2xl mx-auto">
            Don&apos;t see what you&apos;re looking for? We have access to a wide variety of 
            American-caught seafood. Contact us to discuss your needs.
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
      </Section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ocean-deep mx-auto mb-4"></div>
          <p className="text-driftwood">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

