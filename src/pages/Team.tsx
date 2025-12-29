import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import teamGroup from "@/assets/team-group.jpg";
import jaipreetImg from "@/assets/jaipreet.jpg";
import samarohaImg from "@/assets/samaroha.jpg";
import sharanyoImg from "@/assets/sharanyo.jpg";
import abhinavaImg from "@/assets/abhinava.jpg";
import tejasImg from "@/assets/tejas.jpg";
import ayushmanImg from "@/assets/ayushman.jpg";
import ai from "@/assets/ayushman1.jpg";
import { Github, Instagram, Twitter, Users, Award, Rocket } from "lucide-react";

const teamMembers = [
  {
    name: "Jaipreet Purkayastha",
    role: "Joint Head of STEM (Technology)",
    expertise: "Proficient in Arduino, ESP32, and embedded systems; strong in Python, Java, and C. Web app developer experienced with diverse modules and integrations.",
    image: jaipreetImg
  },
  {
    name: "Samaroha Bhattacharyya",
    role: "Head of Web Design",
    expertise: "Full-stack developer specializing in mobile and web development. Proficient in React Native, React, TypeScript, JavaScript, and Node.js. Builds scalable applications with cutting-edge technologies.",
    image: tejasImg
  },
  {
    name: "Sharanyo Chakraborty",
    role: "Head of Marketing",
    expertise: "Expert in Mass Communication. Graphic Designer and Video Editor. Master of advertising and social media advertisement and management.",
    image: abhinavaImg
  },
  {
    name: "Abhinava Bandopadhyay",
    role: "Joint Head of 3D Design",
    expertise: "Experienced in ideation workflows with thorough knowledge of real-world problems. Perfect project pitching skills and robust expertise in robotics.",
    image: sharanyoImg
  },
  {
    name: "Tejas Singh",
    role: "Joint Head of STEM (Mechanics)",
    expertise: "Skilled in mechanical design and implementation, with a focus on power systems and engineering solutions. Develops innovative mechanical components and systems.",
    image: samarohaImg
  },
  {
    name: "Ayushman Singh",
    role: "Joint Head of 3D Design",
    expertise: "Thorough experience in 3D design and 3D printing with extensive knowledge of additive production and mechanical linkages. Creates custom 3D-printed components and designs for rapid prototyping and innovative solutions.",
    image: ai
  }
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/happy.drain.solutions/?utm_source=ig_web_button_share_sheet", icon: Instagram },
  { label: "Twitter", href: "https://x.com/happy_drain", icon: Twitter },
  { label: "GitHub", href: "https://github.com/", icon: Github }
];

const stats = [
  { icon: Users, label: "Team Members", value: "6" },
  { icon: Award, label: "Combined Skills", value: "20+" },
  { icon: Rocket, label: "Projects", value: "1" }
];

const Team = () => {
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
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A dedicated team of innovators, engineers, and designers working together to solve 
              urban drainage challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={teamGroup} 
              alt="Team Photo" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass p-6 rounded-lg text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            The <span className="text-primary">People</span> Behind Happy Drains
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                expertise={member.expertise}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <p className="text-muted-foreground mb-6">
              Keep up with our latest prototypes, field deployments, and community impact stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={`Follow us on ${link.label}`}
                >
                  <link.icon className="w-4 h-4" />
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

export default Team;
