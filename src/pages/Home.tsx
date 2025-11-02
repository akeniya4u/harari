import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-building.jpg";
import traditionalCraftsImage from "@/assets/traditional-crafts.jpg";
import culturalGatheringImage from "@/assets/cultural-gathering.jpg";
import gateWisdomImage from "@/assets/gate-wisdom.jpg";
import { MapPin, Users, Building2, ArrowRight, Landmark, Coins, Shield, Globe } from "lucide-react";

const Home = () => {
  const { t } = useTranslation();

  const features = [{
    icon: MapPin,
    title: t('home.features.unesco.title'),
    description: t('home.features.unesco.description')
  }, {
    icon: Users,
    title: t('home.features.culture.title'),
    description: t('home.features.culture.description')
  }, {
    icon: Building2,
    title: t('home.features.architecture.title'),
    description: t('home.features.architecture.description')
  }];

  return <div className="min-h-screen">
      <HeroSection 
        title={t('home.hero.title')} 
        subtitle={t('home.hero.subtitle')} 
        image={heroImage} 
        ctaText={t('home.cta.explore')} 
        ctaLink="#explore" 
      />

      {/* UNESCO City of Peace Section */}
      <section id="explore" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          {/* Main Title */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">{t('home.unesco.badge')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              {t('home.unesco.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('home.unesco.description')}
            </p>
          </div>

          {/* Historic Facts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform">
                  <Landmark className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">82+</h3>
                <p className="text-sm text-muted-foreground">{t('home.unesco.mosques')}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">3.3km</h3>
                <p className="text-sm text-muted-foreground">{t('home.unesco.wall')}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">5</h3>
                <p className="text-sm text-muted-foreground">{t('home.unesco.gates')}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20">
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary mb-4 group-hover:scale-110 transition-transform">
                  <Coins className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">2016</h3>
                <p className="text-sm text-muted-foreground">{t('home.unesco.recognition')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Historical Narrative */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden group shadow-elegant">
                <img 
                  src={gateWisdomImage} 
                  alt="Historic Gates of Harar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2">{t('home.gates.title')}</h3>
                  <p className="text-primary-foreground/90">{t('home.gates.description')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('home.architecture.title')}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('home.architecture.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('home.independence.title')}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('home.independence.description')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('home.battle.title')}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('home.battle.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Heritage Showcase */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-2xl overflow-hidden group shadow-elegant">
              <img 
                src={traditionalCraftsImage} 
                alt="Traditional Harari Crafts and Basketry" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2">{t('home.heritage.living')}</h3>
                  <p className="text-primary-foreground/90">{t('home.heritage.livingDesc')}</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden group shadow-elegant">
              <img 
                src={culturalGatheringImage} 
                alt="Cultural Gathering in Harar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-primary-foreground mb-2">{t('home.heritage.treasures')}</h3>
                  <p className="text-primary-foreground/90">{t('home.heritage.treasuresDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/destinations">
              <Button size="lg" variant="secondary">
                {t('home.cta.explore')}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/plan-your-trip">
              <Button size="lg" variant="secondary">
                {t('nav.planTrip')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Home;
