
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contato e Localização</h2>
            <p className="text-xl text-gray-600">
              Entre em contato para agendar sua consulta
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Av. Dom Luís, 1233 - Salas 1705/1706<br />
                      Aldeota, Fortaleza - CE<br />
                      CEP: 60160-230
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
                    <a 
                      href="tel:558581903334" 
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      (85) 8190-3334
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações da Clínica</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>CNPJ:</strong> A ser atualizado</p>
                  <p><strong>Responsável Técnico:</strong> Dr. Harley Cavalcante</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Agende sua Consulta</h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco para agendar sua consulta. Estamos prontos para cuidar da sua saúde com toda atenção e carinho que você merece.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/558581903334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Conversar via WhatsApp
                </a>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Ou nos siga nas redes sociais:</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://www.instagram.com/drharleycavalcante/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors"
                    >
                      📷 Instagram
                    </a>
                    <a 
                      href="https://www.facebook.com/drharleycavalcante/?locale=pt_BR" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      👥 Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
