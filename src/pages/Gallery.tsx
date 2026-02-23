import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

// Model Design images
import modelDesign1 from "@/assets/model-design-1.png";
import modelDesign2 from "@/assets/model-design-2.png";
import modelDesign3 from "@/assets/model-design-3.png";
import modelDesign4 from "@/assets/model-design-4.png";
import modelDesign5 from "@/assets/model-design-5.png";
import modelDesign6 from "@/assets/model-design-6.png";

// Prototype images
import prototype1 from "@/assets/Full/Full/Screenshot 2025-12-27 164343.png";
import prototype2 from "@/assets/Full/Full/Screenshot 2025-12-27 164607.png";
import prototype3 from "@/assets/Full/Full/Screenshot 2025-12-28 222655.png";
import prototype4 from "@/assets/Full/Full/Screenshot 2025-12-28 222702.png";
import prototype5 from "@/assets/Full/Full/Screenshot 2025-12-28 222840.png";
import prototype6 from "@/assets/Full/Full/Screenshot 2025-12-28 222844.png";
import prototype7 from "@/assets/Full/Full/Screenshot 2025-12-28 222914.png";
import prototype8 from "@/assets/Full/Full/Screenshot 2025-12-28 222918.png";

// Blueprint images
import blueprint1 from "@/assets/blueprint-1.png";
import blueprint2 from "@/assets/blueprint-2.png";
import blueprint3 from "@/assets/blueprint-3.png";
import blueprint4 from "@/assets/blueprint-4.png";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // Model
  { src: modelDesign1, alt: "Model View 1", category: "Model" },
  { src: modelDesign2, alt: "Model View 2", category: "Model" },
  { src: modelDesign3, alt: "Model View 3", category: "Model" },
  { src: modelDesign4, alt: "Model View 4", category: "Model" },
  { src: modelDesign5, alt: "Model View 5", category: "Model" },
  { src: modelDesign6, alt: "Model View 6", category: "Model" },
  // Prototype
  { src: prototype1, alt: "Prototype View 1", category: "Prototype" },
  { src: prototype2, alt: "Prototype View 2", category: "Prototype" },
  { src: prototype3, alt: "Prototype View 3", category: "Prototype" },
  { src: prototype4, alt: "Prototype View 4", category: "Prototype" },
  { src: prototype5, alt: "Prototype View 5", category: "Prototype" },
  { src: prototype6, alt: "Prototype View 6", category: "Prototype" },
  { src: prototype7, alt: "Prototype View 7", category: "Prototype" },
  { src: prototype8, alt: "Prototype View 8", category: "Prototype" },
  // Blueprint
  { src: blueprint1, alt: "Blueprint Design 1", category: "Blueprint" },
  { src: blueprint2, alt: "Blueprint Design 2", category: "Blueprint" },
  { src: blueprint3, alt: "Blueprint Design 3", category: "Blueprint" },
  { src: blueprint4, alt: "Blueprint Design 4", category: "Blueprint" },
];

const categories = [
  { id: "all", name: "All", description: "View all images" },
  { id: "model", name: "Model", description: "3D Model designs and renders" },
  { id: "prototype", name: "Prototype", description: "Physical prototype images" },
  { id: "blueprint", name: "Blueprint", description: "Technical blueprint drawings" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === activeCategory);

  // Use galleryImages for lightbox when in "all" view to maintain correct indices
  const lightboxImages = activeCategory === "all" ? galleryImages : filteredImages;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? lightboxImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === lightboxImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

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
              Photo <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our model designs, prototypes, and blueprints of the Happy Drain device.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="py-8 px-4 md:px-8 sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeCategory === category.id 
                    ? "shadow-lg scale-105" 
                    : "hover:scale-105"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">
                  ({category.id === "all" 
                    ? galleryImages.length 
                    : galleryImages.filter(img => img.category.toLowerCase() === category.id).length})
                </span>
              </Button>
            ))}
          </div>
          {activeCategory !== "all" && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-muted-foreground mt-4"
            >
              {categories.find(c => c.id === activeCategory)?.description}
            </motion.p>
          )}
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {activeCategory === "all" ? (
            // Show sections for each category when "All" is selected
            <div className="space-y-16">
              {categories.filter(cat => cat.id !== "all").map((category) => {
                const categoryImages = galleryImages.filter(
                  img => img.category.toLowerCase() === category.id
                );
                if (categoryImages.length === 0) return null;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    id={category.id}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-primary">{category.name}</h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => setActiveCategory(category.id)}
                        className="rounded-full"
                      >
                        View All {category.name}
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categoryImages.map((image, index) => {
                        const globalIndex = galleryImages.findIndex(img => img === image);
                        return (
                          <motion.div
                            key={image.alt}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                            onClick={() => openLightbox(globalIndex)}
                          >
                            <img 
                              src={image.src} 
                              alt={image.alt}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <ZoomIn className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                              <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // Show filtered grid when a category is selected
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.alt}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                      <span className="text-white/70 text-xs">{image.category}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white hover:text-primary transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightboxImages[selectedImage].src}
              alt={lightboxImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">{lightboxImages[selectedImage].alt}</p>
              <p className="text-white/70 text-sm">{lightboxImages[selectedImage].category} • {selectedImage + 1} / {lightboxImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Gallery;
