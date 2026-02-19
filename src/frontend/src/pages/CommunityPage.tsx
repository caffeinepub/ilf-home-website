import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, MessageCircle, Sparkles } from 'lucide-react';

export default function CommunityPage() {
  const programs = [
    {
      icon: Users,
      title: 'Support Groups',
      description: 'Regular peer support meetings where individuals share experiences, build connections, and encourage one another on their journey to stability.',
    },
    {
      icon: Calendar,
      title: 'Community Events',
      description: 'Monthly gatherings, workshops, and social activities that foster belonging and help participants develop new skills and friendships.',
    },
    {
      icon: MessageCircle,
      title: 'Mentorship Program',
      description: 'One-on-one mentoring relationships that provide guidance, accountability, and encouragement from those who have walked similar paths.',
    },
    {
      icon: Sparkles,
      title: 'Life Skills Workshops',
      description: 'Practical training in budgeting, job readiness, parenting, cooking, and other essential skills for independent living.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Building Community Together
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Connection and belonging are essential to healing and growth. Our community programs 
              create safe spaces where individuals support one another and build lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Community Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a variety of programs designed to foster connection, build skills, 
              and create a supportive network for all participants.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">
                      {program.description}
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The Power of Community
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Research shows that strong social connections are one of the most important factors 
              in overcoming homelessness and achieving long-term stability. Our community programs 
              provide the support network that makes lasting change possible.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're seeking support or looking to give back, there's a place for you 
              in the ILF Home community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
