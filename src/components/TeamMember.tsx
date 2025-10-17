import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  expertise: string;
  index: number;
}

const TeamMember = ({ name, role, expertise, index }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ perspective: "1000px" }}
      >
        <Card className="card-glass hover:border-primary/50 transition-all duration-300 h-full group">
          <CardHeader className="space-y-4">
            {/* 
              ⚠️ IMAGE PLACEHOLDER - ADD YOUR TEAM MEMBER PHOTO HERE ⚠️
              Replace the div below with an <img> tag:
              
              <img 
                src="/path/to/your/image.jpg" 
                alt={name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary/50 group-hover:border-primary transition-colors"
              />
              
              Recommended: 
              - Square images (1:1 aspect ratio)
              - At least 300x300px resolution
              - Place images in public/images/ folder
              - Or use src/assets/ with import statements
            */}
            <motion.div 
              className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-2 border-primary/50 group-hover:border-primary transition-colors"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-4xl font-bold text-primary">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </motion.div>
            
            <div className="text-center">
              <CardTitle className="text-2xl mb-2">{name}</CardTitle>
              <CardDescription className="text-primary font-semibold">
                {role}
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {expertise}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;
