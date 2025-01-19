"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    { title: "Mango",    
      src: "/manguh.jpg"
     },
    { 
     title: "Pineapple", 
     src: "/pine.jpg" 
    },
    { 
     title: "Tropical Mix",
     src: "/mix.jpg" 
    },
    {
     title: "Plum",
      src: "/plum.jpg" 
    },
    { 
     title: "Corn",
     src: "/corn.jpg"
 },
    { 
     title: "Pommecythere",
     src: "/pum.jpg" 
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Our Fresh Selections</h2>
      <Carousel slides={slideData} />
    </div>
  );
}
