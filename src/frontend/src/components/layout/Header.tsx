import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Community', path: '/community' },
    { label: 'Housing', path: '/housing' },
    { label: 'Support', path: '/support' },
    { label: 'Get Involved', path: '/volunteer' },
  ];

  const handleNavigation = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="font-bold text-xl text-foreground">ILF Home</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPath === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary ${
                      currentPath === item.path
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
