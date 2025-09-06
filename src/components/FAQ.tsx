import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started with BlogSpace?",
      answer: "Getting started is easy! Simply sign up for a free account, verify your email, and you can start writing immediately. Our intuitive editor makes it simple to create beautiful posts."
    },
    {
      question: "Is BlogSpace free to use?",
      answer: "Yes, BlogSpace offers a generous free plan that includes basic publishing features. We also offer premium plans with advanced features like custom domains, analytics, and monetization tools."
    },
    {
      question: "Can I import my existing blog content?",
      answer: "Absolutely! We support importing from most major blogging platforms including WordPress, Medium, and Substack. Our import tool preserves your formatting and metadata."
    },
    {
      question: "How does the monetization work?",
      answer: "Premium users can monetize their content through our built-in subscription system, tip jar feature, and sponsored content marketplace. We take a small percentage to maintain the platform."
    },
    {
      question: "What kind of analytics do you provide?",
      answer: "We provide comprehensive analytics including page views, reader engagement, subscriber growth, popular content, and reader demographics. Premium users get access to advanced metrics and export options."
    },
    {
      question: "Can I customize the design of my blog?",
      answer: "Yes! We offer multiple themes and customization options. Premium users can fully customize their blog's appearance, use custom CSS, and even upload their own themes."
    },
    {
      question: "Is there a mobile app available?",
      answer: "We have a mobile-optimized web app that works great on all devices. Native iOS and Android apps are currently in development and will be available soon."
    },
    {
      question: "How do you handle content moderation?",
      answer: "We use a combination of automated systems and human moderators to ensure content quality and safety. We have clear community guidelines and take swift action against violations."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about BlogSpace and how to make the most of our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border-0 shadow-sm px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="mailto:support@blogspace.com" 
            className="text-primary hover:underline font-medium"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;