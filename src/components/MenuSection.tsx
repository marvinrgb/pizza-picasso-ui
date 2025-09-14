export function MenuSection() {
  const menuSections = [
    {
      title: "Pizza",
      items: [
        { name: "Pizza magherita", description: "Tomatensoße Käse", price: "7,50" },
        { name: "Pizza prosciutto", description: "Tomatensoße, Käse, Vorderschinken", price: "9,00" },
        { name: "Pizza salami", description: "Tomatensoße, Käse, Salami", price: "9,00" },
        { name: "Pizza funghi", description: "Tomatensoße, Käse, frische Champignons", price: "8,50" },
        { name: "Pizza primavera", description: "Tomatensoße, Käse, frische Tomatenscheiben, Ruccola, Grana Padano Käse", price: "12,00" },
        { name: "Pizza 4 stagioni", description: "Tomatensoße, Käse, Vorderschinken Champignons, Salami, Paprika", price: "10,00" },
        { name: "Pizza caprese", description: "frische Tomaten, Mozzarella, Basilikum", price: "10,50" },
        { name: "Pizza veneto", description: "Tomatensoße, Käse, Vorderschinken Salami, Peperoniwurst", price: "12,50" },
        { name: "Pizza diavolo", description: "Tomatensoße, Käse, Peperoni, Paprika Peperonischote(scharf)", price: "10,00" },
        { name: "Pizza capricciosa", description: "Tomatensoße, Käse, Vorderschinken, Peperoniwurst, Champignons, Artischocken, Zwiebeln", price: "11,50" },
        { name: "Pizza gamberetti", description: "Tomatensoße, Käse, Gamberetti, Knoblauch", price: "11,50" },
        { name: "Pizza tonno cipolla", description: "Tomatensoße, Käse, Thunfisch, Zwiebeln", price: "10,50" },
        { name: "Pizza vegetariana", description: "Tomatensoße, Mozzarella, frisches Gemüse", price: "11,50" },
        { name: "Pizza spinaci", description: "Tomatensoße, Käse, Spinat, Knoblauch, Tomatensoße", price: "10,00" },
        { name: "Pizza frutti di mare", description: "Tomatensoße, Käse, Meeresfrüchte, Knoblauch", price: "12,00" },
        { name: "Pizza con salmone", description: "Tomatensoße, Käse, Wildlachs, Zwiebeln, Knoblauch", price: "12,50" },
        { name: "Pizza Picasso", description: "Tomatensoße, Mozzarella, Ruccola, Bresaola, Zwiebeln, Balsamico", price: "14,00" },
        { name: "Pizza hawaii", description: "Tomatensoße, Käse, Ananas, Vorderschinken", price: "10,50" },
        { name: "Pizza calzone", description: "Tomatensoße, Käse, Vorderschinken, Peperoniwurst, Champignons, Mozzarella, Zwiebeln", price: "11,00" },
        { name: "Pizza Rimini", description: "Tomatensoße, Käse, Vorderschinken, Salami, Spinat, Mozzarella, Knoblauch", price: "12,50" },
        { name: "Pizzaccia", description: "Pizzabrot", price: "5,50" },
      ]
    },
    {
      title: "Vorspeisen",
      items: [
        { name: "Mozzarella alla caprese", description: "Mozzarella mit Tomatenscheiben, frischem Basilikum und Olivenöl extra vergine", price: "8,00" },
        { name: "Gamberetti al Forno", description: "Gamberetti in Tomaten-Kräutersoße mit Knoblauch, frischen Kräuter in Olivenöl überbacken", price: "13,50" },
        { name: "Pecorino gratinato", description: "gebackener Schafskäse mit Cherry-Tomaten Oliven und Zwiebeln", price: "9,00" },
        { name: "Funghi-Pecorino", description: "gefüllte Champignons mit Schafskäse, frischen Kräutern in einer leichten Tomatensoße überbacken", price: "10,50" },
        { name: "Bruschette", description: "mit Tomaten Olivenöl extra vergine, frischen Kräutern und Knoblauch", price: "6,00" },
        { name: "Mozzarella in carrozza", description: "Mozzarella-Scheiben, paniert und frittiert mit Birne und Preiselbeeren", price: "9,00" },
        { name: "Insalata di mare", description: "Meeresfrüchtesalat mit Zitrone, Knoblauch, Olivenöl extra vergine und frischen Kräutern", price: "12,00" },
        { name: "Zuppa di pomodoro", description: "Tomatensuppe mit Sahne und frischem Basilikum", price: "6,00" },
      ]
    },
    {
      title: "Salate",
      items: [
        { name: "Beilagensalat", description: "gemischter Salat mit Tomaten und Gurken", price: "4,00" },
        { name: "Insalata Pollo e Melone", description: "gemischter Salat mit Hähnchenbruststreifen Mais, Champignons, Scheibletten und Melone", price: "12,50" },
        { name: "Insalata ruccola", description: "Ruccolasalat, Cherry-Tomaten, Grana Padano Käse und Essig-Öl", price: "8,50" },
        { name: "Insalata mista", description: "gemischter Salat mit Tomaten und Gurken", price: "6,50" },
        { name: "Insalata di Pesce", description: "Gemischter Salat mit Lachs, Gamberetti und Coctailsoße in Honig Senf Soße", price: "14,00" },
        { name: "Insalata chef", description: "gemischter Salat mit Hähnchenbrustfilet, roten Zwiebeln, gebratenen Champignons, Mozzarella und Hausdressing", price: "13,00" },
        { name: "Insalata Italia", description: "gemischter Salat mit Käse, Vorderschinken und Ei", price: "9,50" },
        { name: "Insalata capricciosa", description: "gemischter Salat mit Käse, Vorderschinken, Ei, Thunfisch und Artischocken", price: "11,00" },
        { name: "Insalata Picasso", description: "gemischter Salat mit Rinderfiletstreifen, frische Champignons, Essig-Öl", price: "13,00" },
        { name: "Insalata pecorino", description: "gemischter Salat mit Schafskäse, Oliven, Zwiebeln, Peperoni, Essig-Öl", price: "10,50" },
      ]
    },
    {
      title: "Nudelgerichte",
      items: [
        { name: "Spaghetti pomodoro", description: "mit Tomatensoße und frischem Basilikum", price: "8,50" },
        { name: "Spaghetti bolognese", description: "mit Hackfleischsoße", price: "9,50" },
        { name: "Spaghetti carbonara", description: "mit Vorderschinken, Sahne, Käse, schwarzem Pfeffer und Ei", price: "10,00" },
        { name: "Spaghetti frutti di mare", description: "mit Meeresfrüchten, Knoblauch und frischer Tomatensoße", price: "11,50" },
        { name: "Spaghetti gambero rosso", description: "mit Garnelen, Knoblauch, frischen Tomaten, Ruccola, Grana Padano Käse", price: "13,50" },
        { name: "Penne bella donna", description: "mit Hähnchenbrustfilet, Champignons, Paprika in Sahnesoße", price: "12,50" },
        { name: "Spaghetti aglio olio e peperoncino", description: "mit Olivenöl, frischen Kräutern, Knoblauch, scharf", price: "9,50" },
        { name: "Tagliatelle salmone", description: "mit Wildlachs, Tomatensahnesoße, Ruccola, Grana Padano Käse", price: "12,50" },
        { name: "Spaghetti Picasso", description: "mit Filetspitzen, Champignons und Sahnesoße", price: "13,00" },
        { name: "Penne all'arrabbiata", description: "mit Speck, Knoblauch, Tomatensoße, Paprika, Peperoni", price: "10,00" },
        { name: "Tortellini panna", description: "gefüllte Nudeltaschen mit Vorderschinken, Sahnesoße", price: "10,50" },
        { name: "Tagliatelle verde e rosa", description: "mit epienatierten Penne, frischen Kräutern, Ruccola, Grana Padano Käse", price: "12,00" },
        { name: "Gnocchi Sorrento", description: "Kartoffelnocken mit Tomatensoße, Mozzarella, Basilikum", price: "11,50" },
        { name: "Gnocchi spinaci", description: "Kartoffelnocken mit Sahnesoße, Spinat, Vorderschinken", price: "11,00" },
      ]
    },
    {
      title: "Überbacken",
      items: [
        { name: "Lasagne al forno", description: "Lasagne nach Art des Hauses", price: "9,00" },
        { name: "Penne Mare e Monte", description: "mit Lachs, Spinat in einer Sahne-Hollandaise Knoblauch Soße", price: "14,50" },
        { name: "Tris di pasta", description: "drei verschiedene Nudelsorten mit Hackfleischsoße und Käse überbacken", price: "11,50" },
      ]
    },
    {
      title: "Fleischgerichte",
      items: [
        { name: "Cotoletta alla milanese", description: "Schnitzel Wiener Art", price: "13,50" },
        { name: "Cotoletta ai funghi", description: "Schnitzel mit frischer Champignon-Rahmsoße", price: "15,00" },
        { name: "Cotoletta alla zingara", description: "Schnitzel mit Paprika, Zwiebeln, frischen Champignons und Tomatensoße", price: "15,00" },
        { name: "Cotoletta con cipolle", description: "Schnitzel mit Zwiebeln und Rahmsoße", price: "15,00" },
        { name: "Cotoletta alla bolognese", description: "Schnitzel mit Bolognesesoße, Vorderschinken und Käse überbacken", price: "15,00" },
        { name: "Saltimbocca alla romana", description: "Schweinemedaillons mit Parmaschinken, Salbei und Weißweinsoße", price: "18,00" },
        { name: "Scaloppine ai funghi", description: "Schweinemedaillons mit frischen Champignons und Sahnesoße", price: "17,50" },
        { name: "Filetto di maiale alla napoli", description: "Schweinefilet mit frischen Tomaten, frischem Basilikum und Mozzarella überbacken", price: "18,00" },
        { name: "Filetto di maiale al pepe verde", description: "Schweinefilet mit Grüner-Pfeffer-Sahnesoße", price: "18,00" },
        { name: "Filetto di maiale alla cacciatora", description: "Schweinefilet mit frischen Champignons, Zwiebeln, Speck und Sahne", price: "18,00" },
        { name: "Doppelt Sauce", description: "", price: "2,50" },
      ]
    },
    {
      title: "Fisch",
      items: [
        { name: "Calamari fritti", description: "Tintenfisch, frittiert mit Remouladen-Soße", price: "15,50" },
        { name: "Salmone al senape", description: "Lachsfilet in Senfsahnesoße mit frischen Kräutern", price: "23,50" },
      ]
    },
    {
      title: "Hähnchen",
      items: [
        { name: "Petto di pollo alla griglia", description: "gegrilltes Hähnchenbrustfilet mit Kräuterbutter", price: "14,50" },
        { name: "Petto di pollo trifolato", description: "gegrilltes Hähnchenbrustfilet mit gebratenen Champignons und Zwiebeln", price: "17,00" },
        { name: "Petto di pollo alla diavola", description: "gebratenes Hähnchenbrustfilet mit Erbsen, Champignons und scharfer Tomatensoße", price: "17,00" },
      ]
    },
    {
      title: "Nachtisch",
      items: [
        { name: "Tiramisù", description: "", price: "7,00" },
        { name: "Pannacotta", description: "", price: "7,00" },
        { name: "Tartufo", description: "", price: "7,00" },
        { name: "Cassata", description: "", price: "7,00" },
      ]
    },
    {
      title: "Beilagen",
      items: [
        { name: "Pommes, Rösti oder Kroketten", description: "", price: "5,00" },
      ]
    },
    {
      title: "Getränke",
      items: [
        { name: "Cola, Fanta, Sprite, Light, Zero", description: "1 Liter inkl. Pfand", price: "4,00" },
      ]
    },
    {
      title: "Pizzablech für Ihre Party",
      items: [
        { name: "40 x 60 cm für 4 Personen", description: "belegt mit Tomatensoße und Käse", price: "20,00" },
        { name: "Alle weiteren Zutaten gegen Aufpreis", description: "Zwiebeln, Mais, Peperoni, Knoblauch", price: "5,00" },
        { name: "Frische Champignons, frische Tomaten, Ruccola, Broccoli, Blumenkohl, Spinat, Schinken, Salami, Peperoniwurst, Mozzarella, Käse, Ananas, Paprika, Kapern", description: "", price: "5,00" },
        { name: "Gorgonzola, Schafskäse, Thunfisch, frisches Gemüse (Auberginen, Zucchini, Paprika), Parmaschinken, Bresaola, Rinderfiletstreifen, Hähnchenbrustfilet, Lachs, Shrimps, Meeresfrüchte", description: "", price: "6,00" },
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