import { Metadata } from 'next';
import { Section, SectionHeader, Button, Card, CardTitle, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Sourcing & Quality',
  description: 'Learn how AM Seafood sources premium seafood from American fisheries with complete traceability, sustainable practices, and rigorous quality standards.',
};

const sourcingPrinciples = [
  {
    title: 'American Fisheries Only',
    description: 'We exclusively source from U.S. waters—the Gulf of Mexico, Atlantic Coast, and beyond. This ensures regulatory compliance, supports American fishing communities, and guarantees the highest quality standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3m18 18V3M12 21V3m-3 18h6M6 12h12M6 6h12M6 18h12" />
      </svg>
    ),
  },
  {
    title: 'Direct Relationships',
    description: 'We work directly with fishermen and fishing cooperatives, cutting out unnecessary middlemen. This means fresher product, better prices, and stronger accountability throughout the supply chain.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Seasonal Awareness',
    description: 'We respect natural cycles and seasonal availability. This means you get seafood at its peak quality while supporting sustainable fishing practices that protect fish populations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

const qualityStandards = [
  {
    title: 'Dock-Side Inspection',
    description: 'Our team inspects product at the point of landing, ensuring only the highest quality seafood enters our supply chain.',
    step: '01',
  },
  {
    title: 'Temperature Control',
    description: 'Strict cold-chain management from catch to delivery. Product is maintained at optimal temperatures throughout handling.',
    step: '02',
  },
  {
    title: 'Processing Standards',
    description: 'All processing occurs in HACCP-certified facilities with rigorous sanitation and quality control protocols.',
    step: '03',
  },
  {
    title: 'Packaging & Handling',
    description: 'Professional packaging designed to maintain freshness. Proper labeling with all required information.',
    step: '04',
  },
  {
    title: 'Transportation',
    description: 'Temperature-controlled logistics with real-time monitoring. We partner with trusted carriers who share our standards.',
    step: '05',
  },
  {
    title: 'Final Inspection',
    description: 'Quality verification before every shipment leaves our facility. We stand behind every product we deliver.',
    step: '06',
  },
];

const certifications = [
  {
    name: 'HACCP Certified',
    description: 'Hazard Analysis Critical Control Points—the gold standard for food safety management.',
  },
  {
    name: 'FDA Registered',
    description: 'Fully compliant with FDA regulations for seafood handling and distribution.',
  },
  {
    name: 'State Licensed',
    description: 'Licensed and inspected by Florida Department of Agriculture and Consumer Services.',
  },
  {
    name: 'Sustainable Sourcing',
    description: 'Committed to sourcing from fisheries with sustainable management practices.',
  },
];

const traceabilityFeatures = [
  {
    title: 'Vessel Information',
    description: 'Know which boat caught your seafood and when.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Catch Location',
    description: 'Specific fishing grounds and regulatory zones.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Harvest Date',
    description: 'Exact date of catch for maximum freshness assurance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Processing Records',
    description: 'Complete documentation of handling and processing.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function SourcingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ocean-deep via-ocean-mid to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-ocean-light bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Sourcing & Quality
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              From American Waters to <span className="text-ocean-light">Your Table</span>
            </h1>
            <p className="text-xl text-white/90">
              Complete transparency. Uncompromising quality. Every product we sell is 
              fully traceable to its source in American fisheries.
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

      {/* Key Callouts */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
              ),
              title: 'Sustainably Sourced',
              description: 'We partner with fisheries committed to responsible practices that protect ocean ecosystems.'
            },
            { 
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              ),
              title: 'Fully Traceable',
              description: 'Complete chain of custody from vessel to delivery. Know exactly where your seafood comes from.'
            },
            { 
              icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ),
              title: 'Quality-Checked',
              description: 'Rigorous inspection at every step ensures only the finest product reaches your kitchen.'
            },
          ].map((item) => (
            <div 
              key={item.title}
              className="flex items-start gap-4 p-6 bg-ocean-foam/30 rounded-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-ocean-deep flex items-center justify-center text-white">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-driftwood text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sourcing Principles */}
      <Section background="gradient" padding="xl">
        <SectionHeader 
          title="How We Source"
          subtitle="Our sourcing philosophy ensures you get the best American seafood while supporting sustainable fishing communities."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sourcingPrinciples.map((principle) => (
            <Card key={principle.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                {principle.icon}
              </div>
              <CardTitle className="mb-3">{principle.title}</CardTitle>
              <CardContent>
                <p>{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Quality Process */}
      <Section background="white" padding="xl">
        <SectionHeader 
          title="Our Quality Process"
          subtitle="From catch to customer, every step is carefully managed to ensure peak quality."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualityStandards.map((standard) => (
            <div 
              key={standard.step}
              className="relative p-6 bg-white border border-gray-200 rounded-xl hover:border-ocean-mid hover:shadow-lg transition-all group"
            >
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-ocean-deep text-white text-sm font-bold rounded-full flex items-center justify-center group-hover:bg-coral transition-colors">
                {standard.step}
              </span>
              <h3 className="text-lg font-semibold text-navy mb-2 mt-2">{standard.title}</h3>
              <p className="text-driftwood text-sm">{standard.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Traceability Section */}
      <Section background="ocean" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Complete Traceability
            </h2>
            <p className="text-ocean-light text-lg mb-8">
              Every product we sell comes with complete documentation. You&apos;ll always 
              know exactly where your seafood came from, when it was caught, and how 
              it was handled.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traceabilityFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
                >
                  <div className="flex-shrink-0 text-ocean-light">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                    <p className="text-ocean-light/80 text-xs">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto text-ocean-light mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-white font-semibold text-lg">Full Documentation</p>
                <p className="text-ocean-light text-sm">Available for every order</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section background="light" padding="xl">
        <SectionHeader 
          title="Certifications & Compliance"
          subtitle="We maintain the highest standards of food safety and regulatory compliance."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.name}
              className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ocean-foam flex items-center justify-center">
                <svg className="w-8 h-8 text-ocean-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{cert.name}</h3>
              <p className="text-driftwood text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Questions About Our Sourcing?
          </h2>
          <p className="text-xl text-driftwood mb-8">
            We&apos;re happy to discuss our sourcing practices, quality standards, or 
            provide documentation for any of our products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button href="/products" variant="outline" size="lg">
              View Products
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

