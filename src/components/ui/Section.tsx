import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'ocean' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const backgroundStyles = {
  white: 'bg-white',
  light: 'bg-ocean-foam/30',
  ocean: 'bg-ocean-deep text-white',
  gradient: 'bg-gradient-to-br from-ocean-foam via-white to-sand-light/30',
};

const paddingStyles = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
};

export function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg',
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-driftwood max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

