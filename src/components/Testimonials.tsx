import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "SMM-менеджер",
      company: "IT-стартап",
      content:
        "Курс полностью изменил мое понимание маркетинга. За 3 месяца я получила работу мечты с зарплатой в 2 раза выше!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b64e4d05?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Иванов",
      role: "Digital-маркетолог",
      company: "E-commerce",
      content:
        "Практические задания и реальные кейсы помогли быстро применить знания на практике. Отличная школа!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Елена Смирнова",
      role: "Performance-маркетолог",
      company: "Агентство",
      content:
        "Менторы - настоящие профессионалы! Помогли не только освоить материал, но и найти работу в топовом агентстве.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-gradient-purple-blue">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Отзывы студентов
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Истории успеха наших выпускников
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover-scale"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-montserrat font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80 text-sm">{testimonial.role}</p>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className="fill-current"
                    />
                  ))}
                </div>
                <p className="text-white leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
