export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-serif text-primary-foreground mb-4">Pizzeria Picasso</h3>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-primary-foreground mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('speisekarte');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                >
                  Speisekarte
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('kontakt');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-primary-foreground transition-colors duration-200 text-sm"
                >
                  Kontakt & Anfahrt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-primary-foreground mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/80">
                Konrad-Adenauer-Straße 2<br />
                35745 Herborn
              </p>
              <p className="text-white/80">
                <a href="tel:02772571566" className="hover:text-primary-foreground transition-colors">
                  02772 571566
                </a>
              </p>
              <p className="text-white/80">
                <a href="mailto:info@pizzeria-picasso.de" className="hover:text-primary-foreground transition-colors">
                  info@pizzeria-picasso.de
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Pizzeria Picasso. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex space-x-6">
              <button className="text-white/60 hover:text-primary-foreground transition-colors duration-200 text-sm">
                Impressum
              </button>
              <button className="text-white/60 hover:text-primary-foreground transition-colors duration-200 text-sm">
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}