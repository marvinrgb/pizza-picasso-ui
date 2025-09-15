export function ContactSection() {
  const openingHours = [
    { day: "Montag", hours: "Geschlossen", closed: true },
    { day: "Dienstag", hours: "11:30–13:30, 17:00–21:00" },
    { day: "Mittwoch", hours: "11:30–13:30, 17:00–21:00" },
    { day: "Donnerstag", hours: "11:30–13:30, 17:00–21:00" },
    { day: "Freitag", hours: "11:30–13:30, 17:00–21:00" },
    { day: "Samstag", hours: "11:30–13:30, 17:00–21:00" },
    { day: "Sonntag", hours: "11:30–13:30, 17:00–21:00" }
  ];

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Kontakt & Anfahrt
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Besuchen Sie uns in unserem gemütlichen Restaurant oder kontaktieren Sie uns 
            für Reservierungen und Fragen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Adresse</h3>
                  <p className="text-foreground/70">
                    Konrad-Adenauer-Straße 2<br />
                    35745 Herborn
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Kontakt</h3>
                  <div className="space-y-1">
                    <p>
                      <span className="text-foreground/70">Telefon: </span>
                      <a href="tel:02772571566" className="text-secondary hover:text-secondary/80 transition-colors">
                        02772 571566
                      </a>
                    </p>
                    <p>
                      <span className="text-foreground/70">E-Mail: </span>
                      <a href="mailto:info@pizzeria-picasso.de" className="text-secondary hover:text-secondary/80 transition-colors">
                        info@pizzeria-picasso.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-3">Öffnungszeiten</h3>
                  <div className="space-y-2">
                    {openingHours.map((day) => (
                      <div key={day.day} className="flex justify-between items-center">
                        <span className="text-foreground/70 font-medium">{day.day}:</span>
                        <span className={day.closed ? "text-foreground/50 italic" : "text-foreground"}>
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                    <p className="text-sm text-foreground/70">
                      <span className="font-medium text-primary">Reservierungen</span> werden empfohlen, 
                      besonders am Wochenende. Rufen Sie uns gerne an!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-foreground mb-4">Anfahrt</h3>
            
            {/* Google Maps Placeholder */}
            <div className="aspect-w-16 aspect-h-12 bg-muted/50 rounded-lg overflow-hidden">
              <div className="w-full h-96 bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Google Maps</h4>
                    <p className="text-sm text-foreground/60">Interaktive Karte wird hier angezeigt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Mit öffentlichen Verkehrsmitteln:</h4>
                <p className="text-sm text-foreground/70">
                  U-Bahn Station "Musterplatz" (3 Minuten zu Fuß)<br />
                  Bus Linie 42, Haltestelle "Musterstraße" (1 Minute zu Fuß)
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-2">Mit dem Auto:</h4>
                <p className="text-sm text-foreground/70">
                  Parkplätze in der Musterstraße und den umliegenden Seitenstraßen verfügbar.
                  Parken kostenpflichtig Mo-Sa 9-19 Uhr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}