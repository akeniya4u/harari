import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, Car, Hotel, Home, User } from "lucide-react";
const PlanYourTrip = () => {
  const hotels = [{
    name: "Ras Hotel",
    phone: "+251912000111"
  }, {
    name: "Rewda Hotel",
    phone: "+251912000112"
  }, {
    name: "Frej Hotel",
    phone: "+251912000113"
  }, {
    name: "Winta Hotel",
    phone: "+251912000114"
  }, {
    name: "ZM Hotel",
    phone: "+251912000115"
  }, {
    name: "Sumeya Hotel",
    phone: "+251912000116"
  }, {
    name: "Wonderland Hotel",
    phone: "+251912000117"
  }, {
    name: "Areb Ali Hotel",
    phone: "+251912000118"
  }, {
    name: "Grand Geto",
    phone: "+251912000119"
  }, {
    name: "Abader Hotel",
    phone: "+251912000120"
  }];
  const guestHouses = [{
    name: "Heritage Plaza Guest House",
    phone: "+251913000111"
  }, {
    name: "Rewda Weber Guest House",
    phone: "+251913000112"
  }, {
    name: "Zubeyda Guest House",
    phone: "+251913000113"
  }, {
    name: "Khalid Khalid Guest House",
    phone: "+251913000114"
  }, {
    name: "Amir Guest House",
    phone: "+251913000115"
  }];
  const tourGuides = [{
    name: "Henok Tsegaye",
    phone: "+251910112233",
    email: "henoktours@gmail.com"
  }, {
    name: "Joel Harar Tours",
    phone: "+251911223344",
    email: "joelharartours@gmail.com"
  }, {
    name: "Amir Redwan",
    phone: "+251912334455",
    email: "amirredwan@gmail.com"
  }, {
    name: "Abdul Abdi Ahmed Mohamed",
    phone: "+251913445566",
    email: "abdulguide@gmail.com"
  }, {
    name: "Henok Afework",
    phone: "+251914556677",
    email: "henokafework@gmail.com"
  }, {
    name: "Mehbub Harar",
    phone: "+251911289654",
    email: "mehbubharar@gmail.com"
  }, {
    name: "Testi Harar",
    phone: "+251910829891",
    email: "testiharar@gmail.com"
  }];
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Trip to Harar</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a comfortable and memorable stay in Harar. From accommodations to transportation and expert guides.
          </p>
        </div>

        {/* Tabs for Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap w-full h-auto justify-center gap-2 p-2 mb-8 bg-transparent">
            <TabsTrigger value="all" className="flex-1 min-w-[140px] max-w-[200px]">All</TabsTrigger>
            <TabsTrigger value="hotels" className="flex-1 min-w-[140px] max-w-[200px]">Hotels</TabsTrigger>
            <TabsTrigger value="guesthouses" className="flex-1 min-w-[140px] max-w-[200px]">Guest Houses</TabsTrigger>
            <TabsTrigger value="car" className="flex-1 min-w-[140px] max-w-[200px]">Car Rental</TabsTrigger>
            <TabsTrigger value="guides" className="flex-1 min-w-[140px] max-w-[200px]">Tour Guides</TabsTrigger>
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
    </div>;
};
const HotelsSection = ({
  hotels
}: {
  hotels: Array<{
    name: string;
    phone: string;
  }>;
}) => <div className="px-4 md:px-0">
    <div className="flex items-center mb-6">
      <Hotel className="w-7 h-7 md:w-8 md:h-8 text-primary mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold">Hotels</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {hotels.map((hotel, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg md:text-xl">{hotel.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <a href={`tel:${hotel.phone}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">{hotel.phone}</span>
            </a>
          </CardContent>
        </Card>)}
    </div>
  </div>;
const GuestHousesSection = ({
  guestHouses
}: {
  guestHouses: Array<{
    name: string;
    phone: string;
  }>;
}) => <div className="px-4 md:px-0">
    <div className="flex items-center mb-6">
      <Home className="w-7 h-7 md:w-8 md:h-8 text-primary mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold">Guest Houses</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {guestHouses.map((guesthouse, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg md:text-xl">{guesthouse.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <a href={`tel:${guesthouse.phone}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">{guesthouse.phone}</span>
            </a>
          </CardContent>
        </Card>)}
    </div>
  </div>;
const CarRentalSection = () => <div className="px-4 md:px-0">
    <div className="flex items-center mb-6">
      <Car className="w-7 h-7 md:w-8 md:h-8 text-primary mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold">Car Rental</h2>
    </div>
    <Card className="max-w-2xl shadow-sm">
      <CardContent className="p-6">
        <p className="text-muted-foreground text-sm md:text-base">Car rental information coming soon. Please contact our tour guides for transportation arrangements.</p>
      </CardContent>
    </Card>
  </div>;
const TourGuidesSection = ({
  guides
}: {
  guides: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
}) => <div id="guides" className="px-4 md:px-0">
    <div className="flex items-center mb-6">
      <User className="w-7 h-7 md:w-8 md:h-8 text-primary mr-3" />
      <h2 className="text-2xl md:text-3xl font-bold">Professional Tour Guides</h2>
    </div>
    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
      {guides.map((guide, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg md:text-xl">{guide.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a href={`tel:${guide.phone}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">{guide.phone}</span>
            </a>
            <a href={`mailto:${guide.email}`} className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm md:text-base">{guide.email}</span>
            </a>
          </CardContent>
        </Card>)}
    </div>
  </div>;
const PersonalAssistanceSection = () => <div className="mt-12 px-4 md:px-0">
    <h2 className="text-2xl md:text-3xl font-bold mb-6">Personal Assistance</h2>
    <Card className="max-w-2xl hover:shadow-xl transition-all duration-300 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Olinaf Tesfaye</CardTitle>
        <CardDescription className="text-base md:text-lg">Personal travel assistance and consultation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <a href="tel:+251922642867" className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm md:text-base">+251 922 642 867</span>
          </a>
          <a href="mailto:visithararii@gmail.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors touch-manipulation min-h-[44px]">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm md:text-base">visithararii@gmail.com</span>
          </a>
        </div>
      </CardContent>
    </Card>
  </div>;
export default PlanYourTrip;