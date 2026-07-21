import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { SOCIAL_LINKS } from "@/constants/portfolio";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    iconClass: "bg-blue-500/10 border-blue-500/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9824562967",
    href: "tel:+9779824562967",
    iconClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: null,
    iconClass: "bg-amber-500/10 border-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
  },
] as const;

export default function ContactSection() {
  const { toast } = useToast();
  const [titleRef, titleVisible] = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const [containerRef, visibleItems] = useStaggerAnimation(2, 300);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div
        className={`flex justify-center mb-5 transition-all duration-700 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <span className="eyebrow">Contact</span>
      </div>
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-4 transition-all duration-1000 ${
          titleVisible ? "animate-fade-in-down opacity-100" : "opacity-0 -translate-y-8"
        }`}
      >
        Get in touch
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Have a role, a project, or an idea you want to explore? I'd love to hear from you.
      </p>

      <div
        ref={containerRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <div
          className={`transition-all duration-700 ${
            visibleItems[0] ? "animate-fade-in-left opacity-100" : "opacity-0 -translate-x-8"
          }`}
        >
          <h3 className="text-xl font-semibold tracking-tight mb-3 text-foreground">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in new opportunities and collaborations. Feel free to reach
            out if you'd like to discuss a project or just say hello!
          </p>

          <address className="not-italic space-y-1">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, iconClass }) => {
              const inner = (
                <>
                  <div className={`flex items-center justify-center h-10 w-10 rounded-lg border transition-all duration-300 ${iconClass}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-foreground">{value}</div>
                  </div>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 py-3 border-b border-border/60 last:border-0 group"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="flex items-center gap-4 py-3 border-b border-border/60 last:border-0 group"
                >
                  {inner}
                </div>
              );
            })}
          </address>
        </div>

        <Card
          className={`surface-card transition-all duration-500 ${
            visibleItems[1] ? "animate-fade-in-right opacity-100" : "opacity-0 translate-x-8"
          }`}
        >
          <CardHeader className="border-b border-border/60">
            <CardTitle className="text-base font-semibold tracking-tight">
              Send a message
            </CardTitle>
            <CardDescription className="text-sm">
              I'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Name"
                  required
                  className="h-11 bg-background border-border"
                  aria-label="Your name"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  className="h-11 bg-background border-border"
                  aria-label="Your email"
                />
              </div>
              <Input
                placeholder="Subject"
                required
                className="h-11 bg-background border-border"
                aria-label="Message subject"
              />
              <Textarea
                placeholder="Message"
                rows={5}
                required
                className="bg-background border-border resize-none"
                aria-label="Your message"
              />
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
