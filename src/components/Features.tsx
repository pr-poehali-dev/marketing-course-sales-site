import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Target",
      title: "Практический подход",
      description:
        "Реальные кейсы и проекты, которые вы сможете добавить в портфолио",
    },
    {
      icon: "Users",
      title: "Менторская поддержка",
      description: "Персональный ментор на протяжении всего обучения",
    },
    {
      icon: "Trophy",
      title: "Гарантия результата",
      description:
        "Возврат средств, если не найдете работу в течение 6 месяцев",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Обучайтесь в удобное время, доступ к материалам 24/7",
    },
    {
      icon: "Award",
      title: "Сертификат",
      description: "Официальный сертификат о прохождении курса",
    },
    {
      icon: "Briefcase",
      title: "Помощь в трудоустройстве",
      description: "Помогаем составить резюме и подготовиться к собеседованиям",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали уникальную систему обучения, которая гарантирует
            результат
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="bg-gradient-blue-purple rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
