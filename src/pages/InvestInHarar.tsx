import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { TrendingUp, Shield, Globe, Users } from "lucide-react";

const InvestInHarar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", investmentType: "", message: "" });
  };

  const opportunities = [
    {
      icon: TrendingUp,
      title: "Growing Tourism",
      description: "Harar is experiencing steady growth in tourist arrivals, creating opportunities for hospitality and tourism services.",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Known as the 'City of Peace', Harar offers a stable and welcoming environment for investors and visitors alike.",
    },
    {
      icon: Globe,
      title: "UNESCO Recognition",
      description: "World Heritage status brings international attention and ensures cultural preservation with government support.",
    },
    {
      icon: Users,
      title: "Cultural Appeal",
      description: "Unique Harari culture, traditional architecture, and authentic experiences attract discerning travelers worldwide.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Invest in Harar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover promising investment opportunities in one of Ethiopia's most culturally rich and historically significant cities. Join us in preserving heritage while building sustainable tourism.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <opportunity.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-muted-foreground">{opportunity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Areas */}
        <div className="bg-card rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Investment Sectors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Hospitality & Accommodation</h3>
              <p className="text-muted-foreground">
                Boutique hotels, guest houses, and unique cultural stays that offer authentic Harari experiences to visitors.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Tourism Services</h3>
              <p className="text-muted-foreground">
                Tour operations, cultural centers, traditional craft workshops, and heritage preservation initiatives.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Food & Beverage</h3>
              <p className="text-muted-foreground">
                Restaurants showcasing Harari cuisine, coffee houses, and venues for traditional coffee ceremonies.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Arts & Crafts</h3>
              <p className="text-muted-foreground">
                Support for local artisans, traditional basket weaving, textile production, and handicraft markets.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Inquiry Form */}
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Express Your Interest</CardTitle>
            <CardDescription>
              Fill out the form below and our investment team will contact you to discuss opportunities in Harar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 912 345 678"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="investmentType">Investment Type *</Label>
                  <Select
                    value={formData.investmentType}
                    onValueChange={(value) => setFormData({ ...formData, investmentType: value })}
                  >
                    <SelectTrigger id="investmentType">
                      <SelectValue placeholder="Select investment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospitality">Hospitality & Accommodation</SelectItem>
                      <SelectItem value="tourism">Cultural Tourism Services</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="arts">Arts & Crafts</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your investment interests and any questions you may have..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestInHarar;
