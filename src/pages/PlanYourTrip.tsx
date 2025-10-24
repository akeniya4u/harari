import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Car, Hotel, Home, User } from "lucide-react";

const PlanYourTrip = () => {
  const hotels = [
    { name: "Ras Hotel", phone: "+251912000111" },
    { name: "Rewda Hotel", phone: "+251912000112" },
    { name: "Frej Hotel", phone: "+251912000113" },
    { name: "Winta Hotel", phone: "+251912000114" },
    { name: "ZM Hotel", phone: "+251912000115" },
    { name: "Sumeya Hotel", phone: "+251912000116" },
    { name: "Wonderland Hotel", phone: "+251912000117" },
    { name: "Areb Ali Hotel", phone: "+251912000118" },
    { name: "Grand Geto", phone: "+251912000119" },
    { name: "Abader Hotel", phone: "+251912000120" },
  ];

  const guestHouses = [
    { name: "Heritage Plaza Guest House", phone: "+251913000111" },
    { name: "Rewda Weber Guest House", phone: "+251913000112" },
    { name: "Zubeyda Guest House", phone: "+251913000113" },
    { name: "Khalid Khalid Guest House", phone: "+251913000114" },
    { name: "Amir Guest House", phone: "+251913000115" },
  ];

  const tourGuides = [
    { name: "Henok Tsegaye", phone: "+251910112233", email: "henoktours@gmail.com" },
    { name: "Joel Harar Tours", phone: "+251911223344", email: "joelharartours@gmail.com" },
    { name: "Amir Redwan", phone: "+251912334455", email: "amirredwan@gmail.com" },
    { name: "Abdul Abdi Ahmed Mohamed", phone: "+251913445566", email: "abdulguide@gmail.com" },
    { name: "Henok Afework", phone: "+251914556677", email: "henokafework@gmail.com" },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Plan Your Trip to Harar</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a comfortable and memorable stay in Harar. From accommodations to transportation and expert guides.
          </p>
        </div>

        {/* Tabs for Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="guesthouses">Guest Houses</TabsTrigger>
            <TabsTrigger value="car">Car Rental</TabsTrigger>
            <TabsTrigger value="guides">Tour Guides</TabsTrigger>
          </TabsList>

          {/* All Tab */}
          <TabsContent value="all" className="space-y-12">
            <HotelsSection hotels={hotels} />
            <GuestHousesSection guestHouses={guestHouses} />
            <CarRentalSection />
            <TourGuidesSection guides={tourGuides} />
            <PersonalAssistanceSection />
          </TabsContent>

          {/* Hotels Tab */}
          <TabsContent value="hotels">
            <HotelsSection hotels={hotels} />
          </TabsContent>

          {/* Guest Houses Tab */}
          <TabsContent value="guesthouses">
            <GuestHousesSection guestHouses={guestHouses} />
          </TabsContent>

          {/* Car Rental Tab */}
          <TabsContent value="car">
            <CarRentalSection />
          </TabsContent>

          {/* Tour Guides Tab */}
          <TabsContent value="guides">
            <TourGuidesSection guides={tourGuides} />
            <PersonalAssistanceSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const HotelsSection = ({ hotels }: { hotels: Array<{ name: string; phone: string }> }) => (
  <div>
    <div className="flex items-center mb-6">
      <Hotel className="w-8 h-8 text-primary mr-3" />
      <h2 className="text-3xl font-bold">Hotels</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hotels.map((hotel, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{hotel.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <a href={`tel:${hotel.phone}`} className="flex items-center text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              {hotel.phone}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const GuestHousesSection = ({ guestHouses }: { guestHouses: Array<{ name: string; phone: string }> }) => (
  <div>
    <div className="flex items-center mb-6">
      <Home className="w-8 h-8 text-primary mr-3" />
      <h2 className="text-3xl font-bold">Guest Houses</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {guestHouses.map((guesthouse, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{guesthouse.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <a href={`tel:${guesthouse.phone}`} className="flex items-center text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              {guesthouse.phone}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const CarRentalSection = () => (
  <div>
    <div className="flex items-center mb-6">
      <Car className="w-8 h-8 text-primary mr-3" />
      <h2 className="text-3xl font-bold">Car Rental</h2>
    </div>
    <Card className="max-w-2xl hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl">Mela Taxi</CardTitle>
        <CardDescription className="text-lg">Professional car rental service</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-3xl font-bold text-primary">$11 per day</p>
        <div className="space-y-2">
          <a href="tel:+251925037003" className="flex items-center text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4 mr-2" />
            +251925037003
          </a>
        </div>
        <Button className="w-full" size="lg">
          <a href="tel:+251925037003" className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </Button>
      </CardContent>
    </Card>
  </div>
);

const TourGuidesSection = ({ guides }: { guides: Array<{ name: string; phone: string; email: string }> }) => (
  <div id="guides">
    <div className="flex items-center mb-6">
      <User className="w-8 h-8 text-primary mr-3" />
      <h2 className="text-3xl font-bold">Professional Tour Guides</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {guides.map((guide, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{guide.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a href={`tel:${guide.phone}`} className="flex items-center text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              {guide.phone}
            </a>
            <a href={`mailto:${guide.email}`} className="flex items-center text-muted-foreground hover:text-primary">
              <Mail className="w-4 h-4 mr-2" />
              {guide.email}
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const PersonalAssistanceSection = () => (
  <div className="mt-12">
    <h2 className="text-3xl font-bold mb-6">Personal Assistance</h2>
    <Card className="max-w-2xl hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl">Olinaf Tesfaye</CardTitle>
        <CardDescription className="text-lg">Personal travel assistance and consultation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <a href="tel:0925037003" className="flex items-center text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4 mr-2" />
            0925037003
          </a>
          <a href="mailto:olinaftesfayea@gmail.com" className="flex items-center text-muted-foreground hover:text-primary">
            <Mail className="w-4 h-4 mr-2" />
            olinaftesfayea@gmail.com
          </a>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default PlanYourTrip;
