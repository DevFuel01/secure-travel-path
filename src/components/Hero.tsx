import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent-muted backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            Secure & Trusted Portal
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl lg:text-7xl">
            Embassy Services
            <span className="block bg-gradient-to-r from-accent to-accent-muted bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Apply for visas, renew passports, and manage your documents with our 
            comprehensive embassy management system. Fast, secure, and reliable.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-muted">
                Start Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: FileCheck,
              title: "Visa Applications",
              description: "Submit and track your visa applications online"
            },
            {
              icon: Shield,
              title: "Passport Services",
              description: "Renew or apply for new passports securely"
            },
            {
              icon: Calendar,
              title: "Book Appointments",
              description: "Schedule interviews and consultations easily"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <feature.icon className="mb-4 h-12 w-12 text-accent" />
              <h3 className="mb-2 text-xl font-semibold text-primary-foreground">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
