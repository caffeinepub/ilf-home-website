import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Key, Shield, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function HousingPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: 'Emergency Shelter',
      description: 'Immediate, safe housing for individuals and families experiencing homelessness, providing a stable foundation to begin rebuilding.',
    },
    {
      icon: Key,
      title: 'Transitional Housing',
      description: 'Temporary housing with supportive services to help residents develop skills and resources needed for permanent housing.',
    },
    {
      icon: Shield,
      title: 'Permanent Supportive Housing',
      description: 'Long-term affordable housing combined with ongoing support services for those with complex needs.',
    },
    {
      icon: Lightbulb,
      title: 'Housing Navigation',
      description: 'Assistance finding and securing housing, including help with applications, deposits, and landlord relationships.',
    },
  ];

  const eligibility = [
    'Individuals experiencing homelessness',
    'Families with children in need of stable housing',
    'People re-entering society from incarceration',
    'Aged-out teens (18-24) transitioning from foster care',
    'Low-income individuals and families at risk of homelessness',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Safe, Stable Housing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Everyone deserves a safe place to call home. We provide housing solutions 
              tailored to meet individuals and families where they are on their journey to stability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Housing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From emergency shelter to permanent housing, we offer a continuum of care 
              designed to help you achieve housing stability.
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

      {/* Eligibility Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
              Who We Serve
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Eligibility</CardTitle>
                <CardDescription>
                  Our housing programs are designed to serve the following populations:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1 text-primary">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t">
                  <p className="text-muted-foreground mb-4">
                    If you or someone you know needs housing assistance, we're here to help.
                  </p>
                  <Button 
                    size="lg" 
                    onClick={() => navigate({ to: '/support' })}
                    className="w-full md:w-auto"
                  >
                    Get Help Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
