const About = () => {
  return <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre o Dr. Harley</h2>
            <p className="text-xl text-gray-600">
              Cirurgião Plástico comprometido com a excelência e segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Experiência e Qualificação
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O Dr. Harley Cavalcante é um cirurgião plástico qualificado (CREMEC 6229 - RQE 2904) com formação nacional e internacional, especializado em procedimentos estéticos e reparadores.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com pós-graduação em Nutrologia pela ABRAN, oferece um cuidado integral que vai além da cirurgia, considerando aspectos nutricionais e de bem-estar do paciente.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Cirurgião Plástico Certificado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Pós-graduação em Nutrologia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Equipamentos modernos</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default About;