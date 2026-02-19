import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, DollarSign, Users, Package } from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';

export default function VolunteerPage() {
  const opportunities = [
    {
      icon: HandHeart,
      title: 'Volunteer Your Time',
      description: 'Join us as a volunteer mentor, tutor, event coordinator, or administrative support. Your time and skills make a real difference.',
    },
    {
      icon: DollarSign,
      title: 'Make a Donation',
      description: 'Financial contributions help us provide housing, meals, and essential services to those in need. Every dollar counts.',
    },
    {
      icon: Package,
      title: 'Donate Goods',
      description: 'We accept donations of clothing, household items, furniture, and other essentials that help residents establish stable homes.',
    },
    {
      icon: Users,
      title: 'Corporate Partnerships',
      description: 'Partner with us through employee volunteer programs, fundraising campaigns, or in-kind donations from your business.',
    },
  ];

  const impact = [
    {
      stat: '500+',
      label: 'Individuals Served Annually',
    },
    {
      stat: '85%',
      label: 'Housing Stability Rate',
    },
    {
      stat: '200+',
      label: 'Active Volunteers',
    },
    {
      stat: '24/7',
      label: 'Support Available',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Your support makes our mission possible. Whether you volunteer your time, 
              make a donation, or spread the word, you're helping transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ways to Support ILF Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are many ways to get involved and make a difference in your community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                    <CardDescription className="text-base">
                      {opportunity.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thanks to supporters like you, we're making a real difference in our community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {impact.map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                    {item.stat}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {item.label}
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
