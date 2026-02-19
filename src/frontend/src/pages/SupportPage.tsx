import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Heart, Phone } from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';

export default function SupportPage() {
  const services = [
    {
      icon: Briefcase,
      title: 'Employment Services',
      description: 'Job training, resume building, interview preparation, and job placement assistance to help you achieve financial independence.',
    },
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'GED preparation, college readiness programs, and educational counseling to help you reach your academic goals.',
    },
    {
      icon: Heart,
      title: 'Case Management',
      description: 'Personalized support from dedicated case managers who help coordinate services and advocate for your needs.',
    },
    {
      icon: Phone,
      title: 'Crisis Intervention',
      description: '24/7 support for urgent situations, connecting you with emergency resources and immediate assistance.',
    },
  ];

  const populations = [
    {
      title: 'Re-Entry Support',
      description: 'For individuals returning from incarceration, we provide housing assistance, employment support, and community connections to help you successfully reintegrate.',
    },
    {
      title: 'Aged-Out Teen Services',
      description: 'Young adults transitioning from foster care receive specialized support including independent living skills, education assistance, and mentorship.',
    },
    {
      title: 'Family Services',
      description: 'Lower-income families access comprehensive support including housing stability, childcare resources, and financial literacy programs.',
    },
    {
      title: 'Homeless Services',
      description: 'Individuals experiencing homelessness receive immediate shelter, meals, case management, and pathways to permanent housing.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Comprehensive Support Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Beyond housing, we provide the resources and support you need to build a 
              stable, independent life. Our holistic approach addresses the whole person.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of services designed to help you overcome barriers 
              and achieve your goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Population-Specific Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tailored Support for Each Population
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand that different populations have unique needs. Our programs 
              are designed to address the specific challenges you face.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {populations.map((pop, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{pop.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pop.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
