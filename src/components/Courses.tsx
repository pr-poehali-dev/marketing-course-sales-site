import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Digital-маркетинг PRO",
      description:
        "Полный курс от таргетинга до аналитики. Для новичков и специалистов",
      duration: "4 месяца",
      level: "Все уровни",
      price: "89 900 ₽",
      oldPrice: "129 900 ₽",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      features: ["Сертификат", "Ментор", "Трудоустройство"],
    },
    {
      title: "SMM-специалист",
      description:
        "Стратегии продвижения в соцсетях, создание контента, работа с блогерами",
      duration: "2.5 месяца",
      level: "Начинающий",
      price: "59 900 ₽",
      oldPrice: "79 900 ₽",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      features: ["Портфолио", "Ментор", "Стажировка"],
    },
    {
      title: "Контекстная реклама",
      description: "Яндекс.Директ и Google Ads на профессиональном уровне",
      duration: "6 недель",
      level: "Продвинутый",
      price: "49 900 ₽",
      oldPrice: "69 900 ₽",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&fit=crop",
      features: ["Сертификаты", "Кейсы", "Практика"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Наши <span className="gradient-text">курсы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите направление и станьте востребованным специалистом за
            несколько месяцев
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale border border-gray-100"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Скидка 30%
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-gradient-blue-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {course.duration}
                  </span>
                </div>

                <h3 className="text-xl font-montserrat font-bold text-black mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-montserrat font-bold text-black">
                      {course.price}
                    </span>
                    <span className="text-gray-400 line-through ml-2 text-lg">
                      {course.oldPrice}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-blue-purple text-white hover:opacity-90 py-3 text-lg font-semibold hover-scale">
                  Записаться сейчас
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ⏰ Акция действует до конца месяца
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold hover-scale">
            <Icon name="Phone" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
