import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Where is Harar located?",
      answer: "Harar is in eastern Ethiopia, about 525 kilometers from Addis Ababa. It is the capital of the Harari Regional State and a UNESCO World Heritage city."
    },
    {
      question: "What is Harar known for?",
      answer: "Harar is known for its ancient walled city called Jugol, its unique Islamic heritage, colorful houses, and the famous hyena feeding tradition."
    },
    {
      question: "How do I get to Harar?",
      answer: "You can fly from Addis Ababa to Dire Dawa and drive 50 kilometers to Harar, or travel directly by bus or private car."
    },
    {
      question: "What transportation is available in Harar?",
      answer: "Harar uses TVS (three-wheelers) for quick local rides, similar to Uber, and Force vans that act as public buses for city and nearby routes."
    },
    {
      question: "What is the best time to visit Harar?",
      answer: "The best time is during Bega (the dry season), from October to February, when the weather is clear and cool."
    },
    {
      question: "What languages are spoken in Harar?",
      answer: "Harari, Amharic, Oromo, Somali, and English are commonly spoken in the city."
    },
    {
      question: "What are the main cultural events in Harar?",
      answer: "Key events include Shewal Eid (Harari holiday), Ashura Day, and various local festivals celebrating Harari heritage."
    },
    {
      question: "What can I see inside the Jugol Wall?",
      answer: "You can explore the five historical gates, old mosques, Harari cultural houses, local museums, and traditional markets."
    },
    {
      question: "Is Harar safe for tourists?",
      answer: "Yes. Harar is peaceful and welcoming. Visitors are encouraged to respect local customs and dress modestly when entering religious sites."
    },
    {
      question: "Where can I stay in Harar?",
      answer: "The city offers guesthouses, cultural lodges, and modern hotels near the old town. Some are designed inside traditional Harari houses. You can also travel from Dire Dawa Airport and find accommodations nearby."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about visiting Harar
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
