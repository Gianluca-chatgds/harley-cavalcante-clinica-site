
const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre o Dr. Harley</h2>
            <p className="text-xl text-gray-600">
              Comprometido com a excelência no atendimento médico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Experiência e Dedicação
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com vasta experiência na área médica, o Dr. Harley Cavalcante se dedica a oferecer um atendimento diferenciado, combinando conhecimento técnico avançado com um cuidado humanizado.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa clínica foi pensada para proporcionar conforto e bem-estar aos pacientes, com equipamentos modernos e um ambiente acolhedor.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Equipamentos modernos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Ambiente acolhedor</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Especialidades
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Clínica Médica</li>
                <li>• Consultas Preventivas</li>
                <li>• Acompanhamento Médico</li>
                <li>• Orientação de Saúde</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
