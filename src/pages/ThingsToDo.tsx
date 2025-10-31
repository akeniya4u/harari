import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import natureImage from "@/assets/harar-alleyway-night.jpg";
import culturalImage from "@/assets/harari-women-ceremony.jpg";
import marketsImage from "@/assets/hyena-feeding-night.jpg";
import museumImage from "@/assets/city-peace-alleyway.jpg";
import { Compass, Users, Mountain, BookOpen } from "lucide-react";

const ThingsToDo = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      icon: Mountain,
      title: t('thingsToDo.nature'),
      description: t('thingsToDo.natureDesc'),
      image: natureImage,
    },
    {
      icon: Users,
      title: t('thingsToDo.cultural'),
      description: t('thingsToDo.culturalDesc'),
      image: culturalImage,
    },
    {
      icon: Compass,
      title: t('thingsToDo.outdoor'),
      description: t('thingsToDo.outdoorDesc'),
      image: marketsImage,
    },
    {
      icon: BookOpen,
      title: t('thingsToDo.educational'),
      description: t('thingsToDo.educationalDesc'),
      image: museumImage,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">{t('thingsToDo.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('thingsToDo.subtitle')}
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <experience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-3xl mb-3">{experience.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-base leading-relaxed">
                      {experience.description}
                    </CardDescription>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('thingsToDo.findGuide')}</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            {t('thingsToDo.findGuideDesc')}
          </p>
          <a href="/plan-your-trip#guides">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              {t('thingsToDo.findGuideBtn')}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
