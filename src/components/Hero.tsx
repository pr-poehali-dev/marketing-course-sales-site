import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-blue-purple min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
        <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-black mb-6 leading-tight">
          Станьте экспертом
          <br />
          <span className="text-white drop-shadow-lg">маркетинга</span>
        </h1>
        <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          Практические курсы от топ-специалистов. Гарантируем трудоустройство
          или возвращаем деньги
        </p>

        <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Icon name="Phone" className="text-white animate-pulse" size={32} />
            <div className="text-center sm:text-left">
              <p className="text-white text-lg mb-1">Бесплатная консультация</p>
              <a href="tel:+79991234567" className="phone-highlight text-white">
                +7 (999) 123-45-67
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-montserrat font-semibold hover-scale shadow-xl">
            <Icon name="Play" className="mr-2" size={20} />
            Записаться на курс
          </Button>
          <Button
            variant="outline"
            className="border-2 border-black text-black bg-white/90 backdrop-blur-sm hover:bg-white px-8 py-4 text-lg font-montserrat font-semibold hover-scale shadow-xl"
          >
            <Icon name="FileText" className="mr-2" size={20} />
            Программа курсов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
