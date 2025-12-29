import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Droplets, Shield, Wrench, Zap, Truck, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import productViews from "@/assets/Screenshot 2025-12-28 164951_o1.jpg";

const services = [
  {
    icon: Droplets,
    title: "Drain Declogging",
    description: "Our innovative Happy Drain system prevents clogging at the source, keeping water flowing freely while trapping debris.",
    features: ["Automatic debris collection", "Easy maintenance", "Prevents waterlogging"]
  },
  {
    icon: Shield,
    title: "Flood Prevention",
    description: "Protect your property and neighborhood from flooding with our advanced drainage solutions.",
    features: ["Rapid water drainage", "Storm-ready systems", "24/7 monitoring options"]
  },
  {
    icon: Wrench,
    title: "Installation & Setup",
    description: "Professional installation of Happy Drain systems tailored to your specific needs.",
    features: ["Expert technicians", "Quick installation", "Minimal disruption"]
  },
  {
    icon: Zap,
    title: "Emergency Services",
    description: "When disaster strikes, our emergency response team is ready to help clear drains and prevent damage.",
    features: ["24/7 availability", "Rapid response", "Emergency equipment"]
  },
  {
    icon: Truck,
    title: "Commercial Solutions",
    description: "Large-scale drainage solutions for commercial properties, municipalities, and industrial areas.",
    features: ["Custom designs", "Scalable systems", "Bulk installations"]
  },
  {
    icon: Clock,
    title: "Maintenance Plans",
    description: "Regular maintenance keeps your drainage system running at peak efficiency year-round.",
    features: ["Scheduled cleanings", "System inspections", "Priority support"]
  }
];

const processSteps = [
  { step: 1, title: "Consultation", description: "We assess your drainage needs and challenges" },
  { step: 2, title: "Design", description: "Custom solution designed for your specific situation" },
  { step: 3, title: "Installation", description: "Professional installation by our expert team" },
  { step: 4, title: "Support", description: "Ongoing maintenance and support" }
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive drainage solutions designed to keep your community safe and dry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 rounded-lg mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              The <span className="text-primary">Happy Drain</span> System
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Happy Drain is a revolutionary drainage solution that solves the fundamental 
                  problem of urban waterlogging. Our patented design allows water to flow freely 
                  while trapping debris in an easy-to-clean compartment.
                </p>
                <ul className="space-y-3">
                  {["Prevents clogging at the source", "Easy debris collection and disposal", "Streamlines maintenance work", "Reduces flooding and waterlogging"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={productViews} 
                alt="Happy Drain product design" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            What We <span className="text-primary">Offer</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our <span className="text-primary">Process</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 md:p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your drainage needs and get a free consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
