import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-montserrat font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
              MarketingPro
            </h3>
            <p className="text-gray-400 mb-4">
              Лучшая школа маркетинга в России. Обучаем профессионалов с 2020
              года.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Linkedin" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              Курсы
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital-маркетинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SMM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контекстная реклама
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Email-маркетинг
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              Компания
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Преподаватели
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">
              Поддержка
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Помощь
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Договор-оферта
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 MarketingPro. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Принимаем к оплате:</span>
            <div className="flex gap-2">
              <div className="bg-white rounded px-2 py-1 text-black text-xs font-bold">
                VISA
              </div>
              <div className="bg-red-600 rounded px-2 py-1 text-white text-xs font-bold">
                MC
              </div>
              <div className="bg-blue-600 rounded px-2 py-1 text-white text-xs font-bold">
                МИР
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
