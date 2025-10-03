import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Lock, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 md:text-4xl">
              Why Choose Our Portal?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience streamlined embassy services with cutting-edge security and user-friendly interfaces
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Secure Platform",
                description: "Bank-level encryption protects your sensitive documents and personal information"
              },
              {
                icon: Clock,
                title: "Fast Processing",
                description: "Automated workflows reduce processing time by up to 70%"
              },
              {
                icon: Lock,
                title: "Data Privacy",
                description: "Your data is protected with industry-standard security protocols"
              },
              {
                icon: CheckCircle,
                title: "Easy Tracking",
                description: "Real-time updates on your application status via email and SMS"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6 md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of satisfied users who have simplified their embassy services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
