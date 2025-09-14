export function MenuSection() {
  const menuSections = [
    {
      title: "Antipasti",
      items: [
        { name: "Bruschetta della Casa", description: "Geröstetes Brot mit frischen Tomaten, Basilikum und Knoblauch", price: "8,50" },
        { name: "Antipasto Misto", description: "Auswahl italienischer Vorspeisen mit Schinken, Salami, Käse und Oliven", price: "14,90" },
        { name: "Caprese", description: "Büffelmozzarella mit Tomaten und frischem Basilikum", price: "11,50" },
        { name: "Carpaccio di Manzo", description: "Hauchdünn geschnittenes Rindfleisch mit Rucola und Parmesan", price: "13,90" }
      ]
    },
    {
      title: "Insalate",
      items: [
        { name: "Insalata Mista", description: "Gemischter Salat mit Hausdressing", price: "7,90" },
        { name: "Insalata Rucola", description: "Rucola mit Cherrytomaten, Pinienkernen und Parmesan", price: "9,50" },
        { name: "Insalata di Pollo", description: "Salat mit gegrillter Hähnchenbrust und Balsamico-Dressing", price: "12,90" }
      ]
    },
    {
      title: "Pizza",
      highlight: true,
      items: [
        { name: "Pizza Margherita", description: "Tomaten, Mozzarella, Basilikum", price: "9,50", specialty: true },
        { name: "Pizza Picasso", description: "Unsere Hausspezialität mit Prosciutto, Rucola und Büffelmozzarella", price: "14,90", specialty: true },
        { name: "Pizza Quattro Stagioni", description: "Tomaten, Mozzarella, Schinken, Salami, Champignons, Artischocken", price: "13,50" },
        { name: "Pizza Diavola", description: "Tomaten, Mozzarella, scharfe Salami, Chili", price: "12,90" },
        { name: "Pizza Vegetariana", description: "Tomaten, Mozzarella, gegrilltes Gemüse, Paprika, Zucchini", price: "11,90" },
        { name: "Pizza Quattro Formaggi", description: "Vier italienische Käsesorten ohne Tomaten", price: "13,90" },
        { name: "Pizza Marinara", description: "Tomaten, Knoblauch, Oregano, Olivenöl (ohne Käse)", price: "8,50" }
      ]
    },
    {
      title: "Pasta",
      items: [
        { name: "Spaghetti Carbonara", description: "Mit Speck, Ei und Parmesan", price: "11,90", specialty: true },
        { name: "Penne all'Arrabbiata", description: "Mit scharfer Tomatensauce und Chili", price: "10,50" },
        { name: "Tagliatelle ai Porcini", description: "Bandnudeln mit Steinpilzen in Sahnesauce", price: "13,90" },
        { name: "Lasagne della Casa", description: "Hausgemachte Lasagne mit Hackfleisch und Béchamel", price: "12,50" },
        { name: "Risotto ai Funghi", description: "Cremiger Risotto mit gemischten Pilzen", price: "12,90" }
      ]
    },
    {
      title: "Carne",
      items: [
        { name: "Saltimbocca alla Romana", description: "Kalbsschnitzel mit Prosciutto und Salbei", price: "18,90" },
        { name: "Bistecca alla Griglia", description: "Gegrilltes Rindersteak mit Rosmarin", price: "22,50" },
        { name: "Pollo alla Parmigiana", description: "Hähnchenbrust überbacken mit Parmesan", price: "16,90" }
      ]
    },
    {
      title: "Pesce",
      items: [
        { name: "Branzino al Sale", description: "Wolfsbarsch in der Salzkruste", price: "19,90" },
        { name: "Salmone alla Griglia", description: "Gegrillter Lachs mit Zitronenbutter", price: "17,50" },
        { name: "Frutti di Mare", description: "Meeresfrüchte in Weißweinsauce", price: "21,90" }
      ]
    },
    {
      title: "Dolci",
      items: [
        { name: "Tiramisu", description: "Das klassische italienische Dessert", price: "6,50", specialty: true },
        { name: "Panna Cotta", description: "Mit Beerensauce", price: "5,90" },
        { name: "Gelato della Casa", description: "Hausgemachtes Eis (3 Kugeln)", price: "4,50" },
        { name: "Cannoli Siciliani", description: "Sizilianische Röllchen mit Ricotta-Füllung", price: "6,90" }
      ]
    }
  ];

  return (
    <section id="speisekarte" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            La Nostra Carta
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Entdecken Sie unsere Auswahl an authentischen italienischen Gerichten, 
            zubereitet mit den besten Zutaten und viel Liebe zum Detail.
          </p>
        </div>

        <div className="space-y-12">
          {menuSections.map((section) => (
            <div 
              key={section.title} 
              className={`bg-white rounded-lg shadow-sm p-6 md:p-8 ${
                section.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <h3 className="text-2xl font-serif text-primary mb-6 text-center">
                {section.title}
                {section.highlight && (
                  <span className="block text-sm text-secondary font-sans mt-1">
                    Spezialitäten des Hauses
                  </span>
                )}
              </h3>
              
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div 
                    key={item.name}
                    className={`flex justify-between items-start gap-4 pb-3 border-b border-muted/50 last:border-b-0 ${
                      item.specialty ? 'bg-secondary/5 -mx-4 px-4 py-3 rounded-lg' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-foreground">
                          {item.name}
                        </h4>
                        {item.specialty && (
                          <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                            Empfehlung
                          </span>
                        )}
                      </div>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 font-medium text-primary text-lg">
                      €{item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-foreground/60">
          <p>Alle Preise verstehen sich in Euro inkl. MwSt.</p>
          <p className="mt-2">
            Gerne informieren wir Sie über Zutaten, die Allergien oder Unverträglichkeiten auslösen können.
          </p>
        </div>
      </div>
    </section>
  );
}