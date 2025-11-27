'use client';

import { useState, FormEvent } from 'react';
import { Section, Button, Card, CardTitle, CardContent, InputField, TextareaField, SelectField } from '@/components/ui';

const subjects = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'products', label: 'Product Information' },
  { value: 'wholesale', label: 'Wholesale Inquiry' },
  { value: 'quality', label: 'Quality / Sourcing Question' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    // In production, replace this with actual API endpoint
    console.log('Contact form submitted:', formData);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact <span className="text-ocean-light">AM Seafood</span>
            </h1>
            <p className="text-xl text-white/90">
              Have questions? We&apos;d love to hear from you. Reach out and our team 
              will get back to you as soon as possible.
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

      {/* Contact Info & Form Section */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Business Name */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">American Made Seafood</h4>
                  <p className="text-driftwood">Premium American-Caught Seafood</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Location</h4>
                  <p className="text-driftwood">Fernandina Beach, Florida</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Phone</h4>
                  <a href="tel:+15555555555" className="text-ocean-mid hover:text-ocean-deep transition-colors">
                    (555) 555-5555
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <a href="mailto:info@amseafood.com" className="text-ocean-mid hover:text-ocean-deep transition-colors">
                    info@amseafood.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ocean-foam flex items-center justify-center text-ocean-deep">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Business Hours</h4>
                  <p className="text-driftwood">Monday - Friday: 7am - 5pm EST</p>
                  <p className="text-driftwood">Saturday: 8am - 12pm EST</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-navy mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/wholesale" className="block text-ocean-mid hover:text-ocean-deep transition-colors">
                  → Wholesale Inquiries
                </a>
                <a href="/products" className="block text-ocean-mid hover:text-ocean-deep transition-colors">
                  → View Products
                </a>
                <a href="/sourcing" className="block text-ocean-mid hover:text-ocean-deep transition-colors">
                  → Sourcing & Quality
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <CardTitle className="mb-4 text-2xl">Message Sent!</CardTitle>
                  <CardContent>
                    <p className="mb-6">
                      Thank you for reaching out. We&apos;ve received your message and will 
                      get back to you within 1-2 business days.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
                    <p className="text-driftwood">
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField
                        label="Name"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        error={errors.name}
                        required
                        placeholder="Your full name"
                      />
                      <InputField
                        label="Email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        error={errors.email}
                        required
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <InputField
                        label="Phone"
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="(555) 555-5555"
                      />
                      <SelectField
                        label="Subject"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        options={subjects}
                        placeholder="Select a subject"
                      />
                    </div>

                    <TextareaField
                      label="Message"
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      error={errors.message}
                      required
                      rows={6}
                      placeholder="How can we help you?"
                    />

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </>
              )}
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Serving Customers Nationwide
          </h2>
          <p className="text-xl text-driftwood max-w-2xl mx-auto">
            Based in Fernandina Beach, Florida, we ship premium American-caught seafood 
            to restaurants, distributors, and retailers across the United States.
          </p>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-ocean-foam">
          {/* Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block">
                <svg className="w-24 h-24 text-ocean-mid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                {/* Location pin for Fernandina Beach */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-coral rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-navy font-semibold text-lg">Fernandina Beach, Florida</p>
              <p className="text-driftwood">Gateway to the Gulf & Atlantic</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-ocean-light/30 rounded-full" />
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-ocean-mid/20 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-ocean-deep/10 rounded-full" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-driftwood mb-4">
            Ready to get started? Request a quote or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/wholesale" variant="primary" size="lg">
              Request Wholesale Quote
            </Button>
            <Button href="tel:+15555555555" variant="outline" size="lg">
              Call (555) 555-5555
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

