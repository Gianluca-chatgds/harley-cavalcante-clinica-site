const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HC</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Dr. Harley Cavalcante</h3>
                <p className="text-gray-400 text-sm">Cirurgião Plástico</p>
                <p className="text-gray-400 text-xs">CREMEC 6229 - RQE 2904</p>
              </div>
            </div>
            <p className="text-gray-400">
              Cirurgia plástica com segurança, dedicação e profissionalismo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 (85) 8190-3334</p>
              <p>📍 Av. Dom Luís, 1233 - Salas 1705/1706</p>
              <p>Aldeota, Fortaleza - CE</p>
              <p>CEP: 60160-230</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/drharleycavalcante/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>📷</span>
                <span>@drharleycavalcante</span>
              </a>
              <a 
                href="https://www.facebook.com/drharleycavalcante/?locale=pt_BR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>👥</span>
                <span>Dr. Harley Cavalcante</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Harley Cavalcante - Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">CNPJ: A ser atualizado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
