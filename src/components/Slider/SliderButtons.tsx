import previousImage from "../../assets/images/icon-prev.svg";
import nextImage from "../../assets/images/icon-next.svg";

interface Props {
  handleNextTestimonial: () => void;
  handlePreviousTestimonial: () => void;
}

export default function SliderButtons({
  handleNextTestimonial,
  handlePreviousTestimonial,
}: Props) {
  return (
    <div
      className="
      absolute bottom-2 flex h-[42px] w-[82px] rounded-full bg-white shadow-md
      md:bottom-20 md:left-64 md:h-[49px] md:w-[96px] 
      lg:bottom-6 lg:left-32 lg:h-[58px] lg:w-[114px]"
    >
      <button
        type="button"
        onClick={handlePreviousTestimonial}
        className="flex w-1/2 select-none items-center justify-center rounded-l-full hover:bg-gray-100"
      >
        <img src={previousImage} alt="previous" className="brightness-75" />
      </button>
      <button
        type="button"
        onClick={handleNextTestimonial}
        className="flex w-1/2 select-none items-center justify-center rounded-r-full hover:bg-gray-100"
      >
        <img src={nextImage} alt="next" className="brightness-75" />
      </button>
    </div>
  );
}
