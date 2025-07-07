const About = () => {
  return <section id="sobre" className="py-16 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Sobre o Dr. Harley</h2>
            <p className="text-xl text-amber-700">
              Cirurgião Plástico comprometido com a excelência e segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-amber-900 mb-6">
                Experiência e Qualificação
              </h3>
              <p className="text-stone-700 mb-6 leading-relaxed">O Dr. Harley Cavalcante é um cirurgião plástico qualificado (CREMEC 6229 - RQE 2904), especializado em procedimentos estéticos e reparadores.</p>
              <p className="text-stone-700 mb-6 leading-relaxed">
                Com pós-graduação em Nutrologia pela ABRAN, oferece um cuidado integral que vai além da cirurgia, considerando aspectos nutricionais e de bem-estar do paciente, especialmente em cirurgias plásticas pós grande emagrecimento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-amber-800">Cirurgião Plástico Certificado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-amber-800">Pós-graduação em Nutrologia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-amber-800">Cirurgia Pós Grande Emagrecimento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-amber-800">Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-amber-800">Equipamentos modernos</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-64 h-64 bg-amber-100 rounded-lg overflow-hidden shadow-lg">
                <img src="/lovable-uploads/e7a793f3-df70-431f-ab64-d6425a748e6a.png" alt="Logo Dr. Harley Cavalcante" className="w-full h-full object-contain p-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;