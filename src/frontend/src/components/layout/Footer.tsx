import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'ilf-home';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-foreground">ILF Home</h3>
            <p className="text-sm text-muted-foreground">
              Providing safe housing and comprehensive support for homeless individuals, 
              lower-income families, people re-entering from incarceration, and aged-out teens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="/community" className="hover:text-primary transition-colors">Community</a>
              </li>
              <li>
                <a href="/housing" className="hover:text-primary transition-colors">Housing</a>
              </li>
              <li>
                <a href="/support" className="hover:text-primary transition-colors">Support</a>
              </li>
              <li>
                <a href="/volunteer" className="hover:text-primary transition-colors">Get Involved</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                Phone: <a href="tel:8133998071" className="hover:text-primary transition-colors">(813) 399-8071</a>
              </li>
              <li>
                Email: <a href="mailto:camillia@myptcs.com" className="hover:text-primary transition-colors">camillia@myptcs.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} ILF Home. Built with <Heart className="w-4 h-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
