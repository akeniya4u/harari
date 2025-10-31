import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact.successMsg'));
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@visitharar.com",
      link: "mailto:info@visitharar.com",
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+251925037003",
      link: "tel:+251925037003",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Near the main gate of Jugol, Harar, Ethiopia",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center">
                <MessageSquare className="mr-3 text-primary" />
                {t('contact.formTitle')}
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('contact.name')} *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')} *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('contact.message')} *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-start p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62780.95926477595!2d42.093548!3d9.313611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bba6b9cc75ad%3A0x3d5c6e51c7c9a6db!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Harar Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
