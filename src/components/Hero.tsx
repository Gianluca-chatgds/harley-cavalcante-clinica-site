
const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-amber-50 to-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
              Dr. Harley Cavalcante
            </h1>
            <p className="text-xl text-amber-700 font-semibold mb-4">
              Cirurgião Plástico
            </p>
            <div className="text-lg text-amber-800 mb-6 space-y-2">
              <p><strong>CREMEC 6229 - RQE 2904</strong></p>
              <p>Pós-graduação em Nutrologia (ABRAN)</p>
              <p>Especialista em Cirurgia Plástica Pós Grande Emagrecimento</p>
            </div>
            <p className="text-lg text-stone-700 mb-8">
              Especialista em cirurgia plástica com atenção personalizada e humanizada para cada paciente, oferecendo os mais modernos procedimentos estéticos e reparadores com foco em beleza, saúde e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors text-center"
              >
                Agendar Consulta
              </a>
              <a 
                href="tel:558581903334" 
                className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors text-center"
              >
                (85) 8190-3334
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-amber-100 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face" 
                  alt="Dr. Harley Cavalcante" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">👨‍⚕️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
