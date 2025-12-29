import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { ArrowRight, Droplets, Shield, Users, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import productViews from "@/assets/Screenshot 2025-12-28 164951_o1.jpg";
import teamGroup from "@/assets/team-group.jpg";

const features = [
  {
    icon: Droplets,
    title: "Innovative Design",
    description: "Our patented Happy Drain system prevents clogging at the source while allowing water to flow freely."
  },
  {
    icon: Shield,
    title: "Flood Prevention",
    description: "Protect your property and neighborhood from flooding with our advanced drainage solutions."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "A dedicated team of engineers, designers, and innovators working to solve drainage challenges."
  }
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* About Preview Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Happy Drains Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team of drainage declogging solution designers. Our innovative approach tackles 
              urban waterlogging at its root, providing reliable solutions for cities and communities across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass p-6 rounded-lg text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button size="lg" variant="outline" className="gap-2">
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                The <span className="text-primary">Happy Drain</span> System
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This year, cities across the nation have suffered from urban waterlogging. The Happy Drain solves 
                this problem at the root—the drains themselves. Our innovative design allows water to flow freely 
                while trapping debris in an easy-to-clean compartment.
              </p>
              <Link to="/services">
                <Button size="lg" className="gap-2">
                  View Our Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={productViews} 
                alt="Happy Drain product design" 
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img 
                src={teamGroup} 
                alt="Happy Drains Team" 
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A dedicated team of innovators, engineers, and designers working together to solve urban drainage 
                challenges. From technology experts to 3D designers, each member brings unique skills to create 
                the best possible solutions.
              </p>
              <Link to="/team">
                <Button size="lg" variant="outline" className="gap-2">
                  Meet The Team <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our team photos, product designs, and behind-the-scenes moments in our gallery.
            </p>
            <Link to="/gallery">
              <Button size="lg" className="gap-2">
                View Gallery <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 md:p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-primary">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your drainage needs and discover how the Happy Drain can help 
              your community stay flood-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;