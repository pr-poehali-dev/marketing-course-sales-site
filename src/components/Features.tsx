import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Target",
      title: "Практика с первого дня",
      description:
        "Работаете с реальными проектами и кейсами ведущих брендов России",
    },
    {
      icon: "Users",
      title: "Персональный ментор",
      description: "Опытный наставник ведёт вас от начала до трудоустройства",
    },
    {
      icon: "Trophy",
      title: "Гарантия трудоустройства",
      description:
        "Возвращаем 100% стоимости, если не найдёте работу за 4 месяца",
    },
    {
      icon: "Zap",
      title: "Актуальные знания",
      description: "Обновляем программы каждые 3 месяца под требования рынка",
    },
    {
      icon: "Award",
      title: "Сертификат гос. образца",
      description: "Официальный документ о повышении квалификации",
    },
    {
      icon: "Briefcase",
      title: "Помощь HR-отдела",
      description:
        "Составляем резюме, готовим к собеседованиям, находим вакансии",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Почему <span className="gradient-text">MarketingPro</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Единственная школа в России с гарантией трудоустройства и возвратом
            денег
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover-scale"
            >
              <div className="bg-gradient-blue-purple rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
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
