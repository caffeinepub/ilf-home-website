import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Home, Users, HandHeart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import HeroSection from '@/components/sections/HeroSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Home,
      title: 'Housing Support',
      description: 'Safe, stable housing for homeless individuals and families in need.',
      image: '/assets/generated/icon-housing.dim_128x128.png',
      path: '/housing',
    },
    {
      icon: Users,
      title: 'Community Programs',
      description: 'Building connections and support networks for vulnerable populations.',
      image: '/assets/generated/icon-community.dim_128x128.png',
      path: '/community',
    },
    {
      icon: Heart,
      title: 'Support Services',
      description: 'Comprehensive assistance for re-entry, aged-out teens, and families.',
      image: '/assets/generated/icon-support.dim_128x128.png',
      path: '/support',
    },
    {
      icon: HandHeart,
      title: 'Get Involved',
      description: 'Join us in making a difference through volunteering and donations.',
      image: '/assets/generated/icon-volunteer.dim_128x128.png',
      path: '/volunteer',
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                About ILF Home
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                ILF Home is dedicated to serving those who need it most: homeless individuals, 
                lower-income families, people re-entering society from incarceration, and 
                aged-out teens transitioning to independence.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe everyone deserves a safe place to call home and the support needed 
                to build a brighter future. Through compassionate care, practical resources, 
                and community connection, we help individuals and families overcome challenges 
                and achieve lasting stability.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate({ to: '/support' })}
                className="bg-primary hover:bg-primary/90"
              >
                Learn More About Our Mission
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/generated/home-welcome.dim_800x600.png"
                alt="ILF Home community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive programs address the unique needs of each population we serve, 
              providing pathways to stability and independence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate({ to: service.path })}
                >
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="w-full">
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
