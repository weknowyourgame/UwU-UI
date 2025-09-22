# Interactive Carousel

> A carousel with uwufied hover animations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Interactive Carousel Example](#interactive-carousel-example)
- [Understanding the component](#understanding-the-component)
- [Credits](#credits)
- [Props](#props)

Example:

```tsx
"use client";
import React, { useState} from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

interface ItemProps{
  image : string,
  title : string
}

interface Props {
  items?: ItemProps[];
}

const carouselItems = [
    {
      image: "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194673/cld-sample.jpg",
      title: "Laughing woman",
    },
    {
      image: "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194675/cld-sample-5.jpg",
      title: "Random ass shoe i found online",
    },
    {
      image: "https://res.cloudinary.com/dcisswp5z/image/upload/v1711194674/cld-sample-4.jpg",
      title: "BREAKFAST?",
    },
  ];

  const InteractiveCarousel = ({items = carouselItems}: Props )=>{

    return (
        <div className=  'flex overflow-hidden rounded-xl'>
        {items.map(({image, title}, index)=>(
          <CarouselCard key={index} imageUrl ={image} title={title} />
        ))}
      </div>
    )
}

const CarouselCard = ({ imageUrl, title }: { imageUrl: string; title: string }) => {

  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <motion.div
      className="relative w-[200px] h-72 flex items-center justify-center overflow-hidden"
      whileHover={{ width: 300 }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        onHoverStart={()=> setIsHovered(true)}
        onHoverEnd={()=>setIsHovered(false)}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.5,
        }}
      >
        <motion.img
          src={imageUrl}
          alt="Carousel image"
          className="absolute w-72 h-full object-cover"
          style={{ filter: "blur(1px)" }}
          whileHover={{ filter: "blur(0px)" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
      <h1 className="absolute top-3 left-3 font-bold font-sans text-wrap w-[80%]">
        {title}
      </h1>
      {isHovered ? 
      <motion.button className="absolute top-3 right-3 font-bold font-sans"
      initial={{ opacity: 0, scale:0 }}
      animate={{ opacity: 1,scale : 1.3 }}
      transition={{ duration: 0.3 }}

      >
        <FaRegArrowAltCircleRight />
      </motion.button>
      : null}
    </motion.div>
  );
};

export default InteractiveCarousel;
```

## Installation

{/* Coming soon */}

## Usage

### Interactive Carousel Example

```tsx
import InteractiveCarousel from "@/components/interactive-carousel";

const carouselItems = [
    {
      image: "Link",
      title: "Text",
    }
]

export default function Example() {
  return <InteractiveCarousel items={carouselItems} />;
}

```

## Understanding the component

The InteractiveCarousel component displays a set of images and titles in a carousel format with interactive hover effects.

## Credits

By Armaan Verma.

## Props

| Prop | Type | Default | Description |
|----------|----------|----------|----------|
| items | `ItemProps[]` | `carouselItems` | An optional array of objects, each containing an `image` (string) and a `title` (string). If not provided, the component defaults to using the `carouselItems` array. |

---

*This documentation is also available in [interactive format](https://uwuui.com/docs/components/components/carousel/interactive-carousel).*