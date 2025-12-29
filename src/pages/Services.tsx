import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Droplets, Shield, CheckCircle, Instagram, Twitter, Github } from "lucide-react";
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
  }
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/happy.drain.solutions/", icon: Instagram },
  { label: "Twitter", href: "https://x.com/happy_drain", icon: Twitter },
  { label: "GitHub", href: "https://github.com/", icon: Github },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      {/* CTA Section with Social Media */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 md:p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect <span className="text-primary">With Us</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow us on social media to stay updated with our latest developments and news.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
