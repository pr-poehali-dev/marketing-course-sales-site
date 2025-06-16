import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-blue-purple min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-black mb-6 leading-tight">
          Освойте маркетинг
          <br />
          <span className="text-white">будущего</span>
        </h1>
        <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
          Практические курсы от экспертов индустрии. Получите навыки, которые
          увеличат ваш доход в 3 раза
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-montserrat font-semibold hover-scale">
            <Icon name="Play" className="mr-2" size={20} />
            Начать обучение
          </Button>
          <Button
            variant="outline"
            className="border-black text-black bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 text-lg font-montserrat font-semibold hover-scale"
          >
            <Icon name="Phone" className="mr-2" size={20} />
            +7 (999) 123-45-67
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-montserrat font-bold mb-2">500+</h3>
            <p className="text-lg">Успешных студентов</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-montserrat font-bold mb-2">15</h3>
            <p className="text-lg">Практических курсов</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-scale">
            <h3 className="text-2xl font-montserrat font-bold mb-2">95%</h3>
            <p className="text-lg">Трудоустройство</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
