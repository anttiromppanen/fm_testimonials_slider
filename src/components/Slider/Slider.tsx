import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderButtons from "./SliderButtons";

const animVariants = {
  text: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  img: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
};

interface Props {
  testimonials: {
    text: string;
    author: string;
    title: string;
    image: string;
  }[];
}

export default function Slider({ testimonials }: Props) {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex];

  const handleButtonClick = (next: 1 | -1) => {
    let nextIndex = testimonialIndex + next;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = testimonials.length - 1;
    setTestimonialIndex(nextIndex);
  };

  return (
    <article
      className="
      relative z-0 mt-12 flex h-full w-full max-w-[1204px] flex-col-reverse items-center justify-end
      md:mt-0 md:flex-row md:justify-center md:pl-10 lg:pl-0"
    >
      <div
        className="
        mt-8 bg-userQuotesBg bg-[length:15%] bg-top bg-no-repeat text-center text-lg
        md:-mr-80 md:mt-0 md:bg-[4rem_top] md:pt-6 md:text-left md:text-[28px] lg:-mr-40 lg:bg-[6rem_top]
        lg:pt-12 lg:text-base"
      >
        <AnimatePresence mode="wait">
          <motion.section
            key={currentTestimonial.text}
            initial="initial"
            animate="animate"
            exit="initial"
            variants={animVariants.text}
          >
            <h1 className="mt-8 font-light leading-6 text-userDarkBlue md:mt-0 md:leading-10">
              {currentTestimonial.text}
            </h1>
            <p className="mt-8 text-[16px] font-bold leading-5 md:text-xl">
              {currentTestimonial.author}
              <span className="block font-medium text-userGrayishBlue lg:ml-2 lg:inline">
                {currentTestimonial.title}
              </span>
            </p>
          </motion.section>
        </AnimatePresence>
      </div>
      <div
        className="
        relative -z-20 flex h-[310px] w-full items-center justify-center overflow-hidden bg-userPatternBg bg-contain bg-center bg-no-repeat md:h-[600px]
        md:min-w-[700px] md:justify-end md:bg-right lg:justify-center lg:bg-left"
      >
        <AnimatePresence mode="wait">
          <motion.img
            initial="initial"
            animate="animate"
            exit="initial"
            variants={animVariants.img}
            key={currentTestimonial.image}
            src={currentTestimonial.image}
            alt=""
            className="relative -z-10 w-[256px] rounded-md shadow-xl md:mr-20 md:w-[400px] lg:w-[500px]"
          />
        </AnimatePresence>
        <SliderButtons
          handleNextTestimonial={() => handleButtonClick(1)}
          handlePreviousTestimonial={() => handleButtonClick(-1)}
        />
      </div>
    </article>
  );
}
