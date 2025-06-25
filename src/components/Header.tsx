
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/e7a793f3-df70-431f-ab64-d6425a748e6a.png" 
                alt="Dr. Harley Cavalcante Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-900">Dr. Harley Cavalcante</h1>
              <p className="text-sm text-amber-700">Cirurgião Plástico</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-amber-800 hover:text-amber-600 transition-colors">Início</a>
            <a href="#sobre" className="text-amber-800 hover:text-amber-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-amber-800 hover:text-amber-600 transition-colors">Contato</a>
          </nav>

          <button 
            className="md:hidden text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-amber-800 hover:text-amber-600 transition-colors">Início</a>
              <a href="#sobre" className="text-amber-800 hover:text-amber-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-amber-800 hover:text-amber-600 transition-colors">Contato</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
