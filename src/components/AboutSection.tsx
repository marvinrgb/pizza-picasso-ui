import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Benvenuti alla Famiglia
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Seit über drei Generationen führt unsere Familie die Pizzeria Picasso mit Leidenschaft 
                und Hingabe. Was in den 1950er Jahren als kleiner Familienbetrieb in den Straßen 
                Neapels begann, ist heute eine liebevoll geführte Pizzeria, die authentische 
                italienische Küche nach Deutschland gebracht hat.
              </p>
              
              <p>
                In unserer Küche verwenden wir ausschließlich frische, hochwertige Zutaten – von 
                handverlesenen Tomaten aus Süditalien bis hin zu unserem täglich frisch zubereiteten 
                Pizzateig. Unser Holzofen, das Herzstück unserer Küche, verleiht jeder Pizza 
                ihren unverwechselbaren, authentischen Geschmack.
              </p>
              
              <p>
                Bei uns ist jeder Gast Teil der Familie. Lassen Sie sich von der warmen Atmosphäre 
                und der ehrlichen, traditionellen Küche verzaubern – so, wie es schon unsere 
                Großeltern getan haben.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1556858878-1982c2ed1041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwY296eXxlbnwxfHx8fDE3NTY4NDg1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gemütliches Interieur der Pizzeria Picasso"
                className="w-full h-96 lg:h-full object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}