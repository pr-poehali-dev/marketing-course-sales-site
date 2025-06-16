import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Digital-маркетинг с нуля",
      description: "Комплексный курс по всем направлениям цифрового маркетинга",
      duration: "3 месяца",
      level: "Начинающий",
      price: "49 900 ₽",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    },
    {
      title: "SMM и контент-маркетинг",
      description: "Создание и продвижение контента в социальных сетях",
      duration: "2 месяца",
      level: "Средний",
      price: "34 900 ₽",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    },
    {
      title: "Настройка рекламы",
      description: "Яндекс.Директ, Google Ads, таргетированная реклама",
      duration: "6 недель",
      level: "Продвинутый",
      price: "39 900 ₽",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-6">
            Популярные курсы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите курс, который поможет достичь ваших карьерных целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-scale"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
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
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-montserrat font-bold text-black">
                    {course.price}
                  </span>
                  <Button className="bg-gradient-blue-purple text-white hover:opacity-90 px-6 py-2 hover-scale">
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
