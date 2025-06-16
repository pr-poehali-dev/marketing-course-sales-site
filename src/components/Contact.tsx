import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Начните карьеру <span className="gradient-text">сегодня</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Получите бесплатную консультацию и персональный план развития в
            маркетинге
          </p>
        </div>

        <div className="bg-gradient-blue-purple rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 rounded-full p-6 animate-pulse">
                  <Icon name="Phone" size={40} className="text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Звоните прямо сейчас
                  </h3>
                  <a
                    href="tel:+79991234567"
                    className="text-4xl font-montserrat font-bold text-black hover:text-white transition-colors block"
                  >
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-white/80 mt-1">Бесплатно по всей России</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-white/20 rounded-full p-6">
                  <Icon name="MessageCircle" size={40} className="text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    Telegram
                  </h3>
                  <a
                    href="https://t.me/marketingpro_school"
                    className="text-3xl font-montserrat font-bold text-black hover:text-white transition-colors block"
                  >
                    @marketingpro_school
                  </a>
                  <p className="text-white/80 mt-1">Ответим за 5 минут</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-montserrat font-bold text-white mb-4">
            🎁 При звонке сегодня получите:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-400" />
              <span>Скидку 15 000 ₽</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-400" />
              <span>Тест на профориентацию</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={20} className="text-green-400" />
              <span>План карьеры бесплатно</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
          <div className="flex items-center gap-3 justify-center">
            <Icon name="Mail" size={24} className="text-blue-400" />
            <span>hello@marketingpro.ru</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Icon name="MapPin" size={24} className="text-purple-400" />
            <span>Москва, БЦ "Метрополис"</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Icon name="Clock" size={24} className="text-green-400" />
            <span>Ежедневно: 9:00-22:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
