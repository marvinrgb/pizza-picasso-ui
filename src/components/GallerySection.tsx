import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1692025690885-736a2cf8eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emElMjByZXN0YXVyYW50JTIwcnVzdGljfGVufDF8fHx8MTc1Njg0ODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Rustikales italienisches Restaurant Ambiente",
      title: "Authentische Atmosphäre"
    },
    {
      src: "https://images.unsplash.com/photo-1602658309649-5f7f0b6db112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBwaXp6YSUyMG1hcmdoZXJpdGElMjB3b29kJTIwZmlyZWR8ZW58MXx8fHwxNzU2ODQ4NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pizza Margherita aus dem Holzofen",
      title: "Frisch aus dem Holzofen"
    },
    {
      src: "https://images.unsplash.com/photo-1651585594107-859f80b4ca3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc1NjgzNDI4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Hausgemachte Pasta Carbonara",
      title: "Hausgemachte Pasta"
    },
    {
      src: "https://images.unsplash.com/photo-1606671605581-51d2bc46140d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYW50aXBhc3RpJTIwZnJlc2glMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NTY4NDg1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Frische italienische Antipasti",
      title: "Frische Antipasti"
    },
    {
      src: "https://images.unsplash.com/photo-1556858878-1982c2ed1041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwY296eXxlbnwxfHx8fDE3NTY4NDg1NDZ8UA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Gemütlicher Innenbereich",
      title: "Gemütliche Einrichtung"
    },
    {
      src: "https://images.unsplash.com/photo-1710106519622-8c49d0bcff2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGl0YWxpYW4lMjBkZXNzZXJ0fGVufDF8fHx8MTc1Njg0ODU0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Hausgemachtes Tiramisu",
      title: "Dolci della Casa"
    }
  ];

  return (
    <section id="impressionen" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Impressioni
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Lassen Sie sich von unserem gemütlichen Ambiente und unseren köstlichen 
            Gerichten verzaubern – ein kleines Stück Italien mitten in Deutschland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <ImageWithFallback 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-medium text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-serif text-primary mb-2">
              Besuchen Sie uns!
            </h3>
            <p className="text-foreground/70 mb-4">
              Erleben Sie die Atmosphäre und den Geschmack Italiens in unserem 
              gemütlichen Restaurant. Wir freuen uns auf Ihren Besuch.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Kontakt & Anfahrt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}