import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import "./Carousel.css";

function ImageCarousel() {
  const images = [
    
  ];

  return (
    <Carousel opts={{ loop: true }} className=" max-w-3xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="cursor-pointer w-[100%] mx-auto img-carousel h-[100%] object-cover rounded-md mt-12 "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImageCarousel;
