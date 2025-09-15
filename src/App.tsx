import { Header } from './components/Header';
import { MenuSection } from './components/MenuSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MenuSection />
      <ContactSection />
      <Footer />
    </div>
  );
}