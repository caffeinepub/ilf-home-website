import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              A Place to Call Home, A Community to Belong
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              ILF Home provides safe housing and compassionate support for those who need it most. 
              Together, we build pathways to stability, independence, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate({ to: '/support' })}
                className="bg-primary hover:bg-primary/90"
              >
                Get Help
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate({ to: '/volunteer' })}
              >
                Get Involved
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/assets/generated/hero-community.dim_1200x600.png"
              alt="ILF Home community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
