import { Metadata } from 'next';
import { Section, SectionHeader, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about American Made Seafood, founded by Roger Riggs in Fernandina Beach, Florida. Family-owned and committed to sustainable, American-caught seafood.',
};

const timeline = [
  {
    year: '1995',
    title: 'Roots in the Industry',
    description: 'Roger Riggs begins his career in the seafood industry, working alongside local fishermen in Fernandina Beach.',
  },
  {
    year: '2005',
    title: 'Building Expertise',
    description: 'After a decade of hands-on experience, Roger develops deep relationships with fisheries across the Gulf and Atlantic.',
  },
  {
    year: '2015',
    title: 'AM Seafood Founded',
    description: 'American Made Seafood is established with a mission to connect quality-conscious buyers with the best American fisheries.',
  },
  {
    year: '2020',
    title: 'Expanding Reach',
    description: 'AM Seafood expands operations to serve restaurants and distributors across the Eastern United States.',
  },
  {
    year: 'Today',
    title: 'Continuing the Mission',
    description: 'We continue to grow while staying true to our roots—quality, traceability, and supporting American fishing communities.',
  },
];

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every product is inspected, handled with care, and delivered at peak freshness.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'American Pride',
    description: 'We exclusively source from American fisheries, supporting local communities and ensuring regulatory compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V3m18 18V3M12 21V3m-3 18h6M6 12h12M6 6h12M6 18h12" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description: 'We partner with fisheries committed to sustainable practices, protecting our oceans for generations to come.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description: 'Full traceability from dock to delivery. We believe you should know exactly where your seafood comes from.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Relationships',
    description: 'We build lasting partnerships with our fishermen, customers, and communities. Your success is our success.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We do what we say and say what we do. Honesty and reliability are the foundation of everything we do.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Family-Owned, <span className="text-ocean-light">Community-Driven</span>
            </h1>
            <p className="text-xl text-white/90">
              American Made Seafood was built on a simple belief: that the best seafood 
              comes from American waters, handled by people who care.
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

      {/* Roger's Story Section */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Meet Roger Riggs
            </h2>
            <div className="space-y-4 text-driftwood text-lg">
              <p>
                Roger Riggs grew up on the docks of Fernandina Beach, Florida, where the 
                smell of salt air and the rhythm of the tides became part of his DNA. 
                Watching his father and uncles work alongside local fishermen, he learned 
                early that great seafood is more than a product—it&apos;s a way of life.
              </p>
              <p>
                After spending over two decades in the seafood industry—from the docks to 
                distribution centers to restaurant kitchens—Roger saw an opportunity. Too 
                often, buyers didn&apos;t know where their seafood came from or how it was 
                handled. Quality was inconsistent. The connection between fishermen and 
                end users was broken.
              </p>
              <p>
                In 2015, Roger founded American Made Seafood with a mission to change that. 
                By building direct relationships with American fisheries and implementing 
                rigorous quality standards, he created a supply chain that prioritizes 
                transparency, sustainability, and—above all—exceptional seafood.
              </p>
              <p className="font-semibold text-navy">
                &ldquo;When you buy from AM Seafood, you&apos;re not just getting fish. You&apos;re getting 
                my word that it&apos;s the best I can find.&rdquo;
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ocean-foam to-ocean-light overflow-hidden">
              {/* Placeholder for Roger's photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-ocean-mid/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <p className="text-ocean-mid font-medium">Roger Riggs</p>
                  <p className="text-ocean-mid/70 text-sm">Founder & Owner</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-coral/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-ocean-deep/10 rounded-2xl -z-10" />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gradient" padding="xl">
        <SectionHeader 
          title="Our Values"
          subtitle="These principles guide everything we do at American Made Seafood."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div 
              key={value.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{value.title}</h3>
              <p className="text-driftwood">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="white" padding="xl">
        <SectionHeader 
          title="Our Journey"
          subtitle="From humble beginnings to serving customers nationwide."
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-ocean-light transform md:-translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-ocean-deep rounded-full transform -translate-x-1/2 mt-2 z-10 ring-4 ring-white" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 text-sm font-bold text-ocean-deep bg-ocean-foam rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                  <p className="text-driftwood">{item.description}</p>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Fernandina Beach Section */}
      <Section background="ocean" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proudly Based in Fernandina Beach
            </h2>
            <div className="space-y-4 text-ocean-light text-lg">
              <p>
                Fernandina Beach, Florida isn&apos;t just where we&apos;re located—it&apos;s who we are. 
                This historic fishing community on Amelia Island has been the heart of 
                Florida&apos;s shrimping industry for over a century.
              </p>
              <p>
                Our location gives us direct access to the Gulf of Mexico and Atlantic 
                fisheries, allowing us to source the freshest catch and maintain the 
                relationships that make our business possible.
              </p>
              <p>
                When you partner with AM Seafood, you&apos;re supporting not just our business, 
                but an entire community of fishermen, dock workers, and families who have 
                dedicated their lives to bringing the best of American waters to your table.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden flex items-center justify-center">
              {/* Map placeholder */}
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto text-ocean-light mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-white font-semibold text-lg">Fernandina Beach, Florida</p>
                <p className="text-ocean-light">Serving customers nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Ready to Experience the AM Seafood Difference?
          </h2>
          <p className="text-xl text-driftwood mb-8">
            Whether you&apos;re a chef looking for the finest ingredients or a distributor 
            seeking a reliable partner, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products" variant="primary" size="lg">
              Explore Our Products
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

