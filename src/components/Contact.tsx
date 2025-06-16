import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Свяжитесь с нами для бесплатной консультации и выбора подходящего
            курса
          </p>
        </div>

        <div className="bg-gradient-blue-purple rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full p-4">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-montserrat font-bold text-white mb-1">
                  Звоните прямо сейчас
                </h3>
                <a
                  href="tel:+79991234567"
                  className="text-2xl font-montserrat font-bold text-black hover:text-white transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-full p-4">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-montserrat font-bold text-white mb-1">
                  Или напишите в Telegram
                </h3>
                <a
                  href="https://t.me/marketing_courses"
                  className="text-2xl font-montserrat font-bold text-black hover:text-white transition-colors"
                >
                  @marketing_courses
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="flex items-center gap-3">
            <Icon name="Mail" size={24} className="text-blue-400" />
            <span>info@marketing-courses.ru</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="MapPin" size={24} className="text-purple-400" />
            <span>Москва, Тверская 15</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Clock" size={24} className="text-green-400" />
            <span>Пн-Пт: 9:00-21:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
