import { useCallback, useEffect } from "react";
import previousImage from "../../assets/images/icon-prev.svg";
import nextImage from "../../assets/images/icon-next.svg";
import SliderButton from "./SliderButton";

interface Props {
  handleNextTestimonial: () => void;
  handlePreviousTestimonial: () => void;
}

export default function SliderButtons({
  handleNextTestimonial,
  handlePreviousTestimonial,
}: Props) {
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePreviousTestimonial();
      if (e.key === "ArrowRight") handleNextTestimonial();
    },
    [handlePreviousTestimonial, handleNextTestimonial],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <div
      className="
      absolute bottom-2 flex h-[42px] w-[82px] rounded-full bg-white shadow-md
      md:bottom-20 md:left-64 md:h-[49px] md:w-[96px] 
      lg:bottom-6 lg:left-32 lg:h-[58px] lg:w-[114px]"
    >
      <SliderButton
        handleButtonPress={handlePreviousTestimonial}
        image={previousImage}
      />
      <SliderButton
        handleButtonPress={handleNextTestimonial}
        image={nextImage}
      />
    </div>
  );
}
