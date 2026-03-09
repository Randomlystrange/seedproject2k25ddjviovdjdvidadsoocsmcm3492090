import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Droplets, Shield, CheckCircle, Instagram, Twitter, Wrench, Recycle, ChevronsLeftRight, Landmark, Link2Off } from "lucide-react";
import productViews from "@/assets/model-design-3.png";
import partsViews from "@/assets/Screenshot 2025-12-28 164951_o1.jpg";
import ledgeViews from "@/assets/model-design-6.png";
import SectionProgressDivider from "@/components/SectionProgressDivider";

const productFeatures = [
  {
    icon: ChevronsLeftRight,
    title: "Adjustable",
    description: "Made to cater to India's wide range of drain designs and sizes.",
    features: ["Adjustable Length", "Same device can fit any drain", "Perfect for India's drains"]
  },
  {
    icon: Landmark,
    title: "Affordable",
    description: "Available in low-cost material to cater to buyers on a budget.",
    features: ["3D-Printed", "Made of low-cost materials", "Low-cost solution"]
  },
  {
    icon: Link2Off,
    title: "Independant of Grate",
    description: "Grate can be removed without disturbing ClearFlow.",
    features: ["Hassle-free mesh extraction", "Easy cleaning", "Less effort required"]
  },
  {
    icon: Droplets,
    title: "Smart Water Flow",
    description: "Water passes through freely while the mesh catches all debris, dust, and particles.",
    features: ["Unobstructed water drainage", "No water pooling", "Works in heavy rain"]
  },
  {
    icon: Wrench,
    title: "Easy DIY Cleaning",
    description: "Simply remove the mesh, empty the debris, and put it back. No tools needed.",
    features: ["No professional help needed", "Quick 2-minute cleaning", "Reusable mesh"]
  },
  {
    icon: Recycle,
    title: "Sustainable Design",
    description: "Made with eco-friendly materials and designed to reduce urban flooding naturally.",
    features: ["Eco-friendly materials", "Recyclable components", "Lower environmental footprint"]
  }
];

const competitorProducts = [
  {
    name: "HDS ClearFlow",
    price: "₹499",
    description: "Adjustable mesh-based drain insert that prevents clogs in street drains of all sizes. One-time purchase, no professional help needed.",
    pros: [
      "Adjustable to fit any drain size",
      "Prevents clogs before they form",
      "Easy DIY cleaning in 2 minutes",
      "Reusable — no recurring cost",
      "Eco-friendly materials",
    ],
    cons: [],
    highlight: true,
  },
  {
    name: "Generic Mesh Drain Strainer",
    price: "₹150 – ₹350",
    description: "Fixed-size plastic or stainless-steel mesh inserts widely available on Amazon and in hardware shops.",
    pros: [
      "Very low upfront cost",
      "Widely available",
      "Simple to use",
    ],
    cons: [
      "Fixed size — won't fit non-standard drains",
      "Easily dislodged by water flow",
      "Limited to small household drains",
      "Needs frequent replacement",
    ],
    highlight: false,
  },
  {
    name: "Branded Drain Grates / Covers",
    price: "₹250 – ₹700",
    description: "Branded cast-iron or PVC drain covers (e.g., Nirali, Hindware) designed to sit on top of floor or street drains.",
    pros: [
      "Durable and long-lasting",
      "Fits standard drain sizes well",
      "No maintenance required",
    ],
    cons: [
      "Fixed standard sizes only",
      "Doesn't catch fine debris",
      "Does not prevent internal clogging",
      "Replacement needed if size doesn't match",
    ],
    highlight: false,
  },
  {
    name: "Chemical Drain Cleaners",
    price: "₹200 – ₹450 per bottle",
    description: "Liquid or gel chemical cleaners (e.g., Mr. Muscle Drain Gel, Drano) that dissolve organic clogs inside pipes.",
    pros: [
      "Easy to apply",
      "Clears existing clogs quickly",
      "Available at most supermarkets",
    ],
    cons: [
      "Reactive — only works after a clog forms",
      "Recurring purchase every few months",
      "Harmful chemicals dangerous to pipes and environment",
      "Ineffective on non-organic debris",
    ],
    highlight: false,
  },
  {
    name: "Drain Snake / Auger Tool",
    price: "₹400 – ₹1,200",
    description: "Manual or electric rotating cable tool used to break up clogs deep inside drain pipes.",
    pros: [
      "Handles deep, severe clogs",
      "Reusable tool",
      "No chemicals required",
    ],
    cons: [
      "Reactive — used only after a clog develops",
      "Requires effort and some skill",
      "Messy to use",
      "Doesn't prevent future clogs",
    ],
    highlight: false,
  },
  {
    name: "Professional Drain Cleaning Service",
    price: "₹500 – ₹2,000 per visit",
    description: "Plumber or municipal service hired to clear blocked drains using tools or high-pressure water jets.",
    pros: [
      "Thorough, expert-level cleaning",
      "Can clear severe blockages",
      "No effort from homeowner",
    ],
    cons: [
      "Highest cost option",
      "Temporary fix — clog returns without prevention",
      "Must be scheduled in advance",
      "Not always available for street drains",
    ],
    highlight: false,
  },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/happy.drain.solutions/", icon: Instagram },
  { label: "Twitter", href: "https://x.com/happy_drain", icon: Twitter },
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
              HDS <span className="text-primary">ClearFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A simple, effective device that keeps street drains of all sizes clog-free using a debris collection mesh.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionProgressDivider />

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
              The <span className="text-primary">Components</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  HDS ClearFlow ships with two identical units, which together form a single
                  anti-clogging and anti-waterlogging device. Each unit has 5 parts: 
                </p>
                <ul className="space-y-3">
                  {["Turn Buckle Housing: provides an enclosure for the Turn Buckle Shafts", "Turn Buckle Shafts (2): have opposite threadings and fit into the Turn Buckle Housing", "Terminal Hooks: slot onto the ends of the Turn Buckle Shafts"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={partsViews} 
                alt="ClearFlow product design" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionProgressDivider />

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
              How It <span className="text-primary">Works</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  HDS ClearFlow features a clever mesh system that sits inside your drain. 
                  Water flows through easily, but refuse, leaves, and debris get caught in the 
                  removable mesh compartment. It uses a Turn Buckle Mechanism to make sure it
                  fits in drains of different sizes. Using opposite threadings, as the central
                  Turn Buckle Housing is rotated, the Turn Buckle Shafts move out on either
                  side. When it's full, just lift it out, empty it, and pop it back in!
                </p>
                <ul className="space-y-3">
                  {["Built-in mesh catches all debris", "Turn Buckle Mechanism", "Can fit in all drains", "Prevents clogging and waterlogging"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={productViews} 
                alt="ClearFlow product design" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionProgressDivider />

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
              <span className="text-primary">Installing</span> HDS ClearFlow
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Turn Buckle Mechanism allows for easy 2-minute installation in 
                  drains of all sizes within a certain limit. By turning the central housing,
                  each Turn Buckle Shaft moves outwards, increasinging the overall length of 
                  ClearFlow. By turning the housing when the shafts and terminal hooks have made
                  contact with the drain walls, a strong outward force on the walls due to the 
                  internal threadings, ensures a tight fit.
                </p>
                <ul className="space-y-3">
                  {["Terminal Hooks have a portrusion to sit on drain ledge where grate is placed", "Turn Buckle ensures a tight fit", "Easy installation", "No professionals required"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img 
                src={ledgeViews} 
                alt="ClearFlow product design" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionProgressDivider />

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Product <span className="text-primary">Features</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-glass p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_50px_rgba(59,130,246,0.3),0_8px_20px_rgba(0,0,0,0.4)] hover:border-blue-400/50"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionProgressDivider />

      {/* Selling Price */}
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Selling <span className="text-primary">Price</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10"
          >
            One-time purchase — no recurring subscription or service fees
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glass p-10 rounded-2xl inline-block mx-auto"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">Price Per Unit</p>
            <p className="text-7xl font-extrabold text-primary leading-none">₹499</p>
          </motion.div>
        </div>
      </section>

      <SectionProgressDivider />

      {/* Competitor Comparison */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4"
          >
            How We <span className="text-primary">Compare</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          >
            See how HDS ClearFlow stacks up against other common drain-cleaning solutions available in the Indian market.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {competitorProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-glass p-6 rounded-lg flex flex-col gap-4${product.highlight ? " border-primary/60 shadow-[0_0_24px_rgba(59,130,246,0.35)]" : ""}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className={`text-xl font-bold${product.highlight ? " text-primary" : ""}`}>{product.name}</h3>
                  {product.highlight && (
                    <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">Our Product</span>
                  )}
                </div>
                <p className="text-2xl font-extrabold text-primary">{product.price}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div>
                  <p className="text-sm font-semibold mb-1 text-green-400">✔ Pros</p>
                  <ul className="space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                {product.cons.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-1 text-red-400">✘ Cons</p>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Shield className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
