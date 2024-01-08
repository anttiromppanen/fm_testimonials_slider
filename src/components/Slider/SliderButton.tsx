interface Props {
  image: string;
  handleButtonPress: () => void;
}

function SliderButton({ handleButtonPress, image }: Props) {
  const isImagePrev = image.includes("prev");

  return (
    <button
      type="button"
      onClick={handleButtonPress}
      className={`flex w-1/2 select-none items-center justify-center hover:bg-gray-100 active:bg-violet-100
      ${isImagePrev ? "rounded-l-full" : "rounded-r-full"}`}
    >
      <img
        src={image}
        alt={isImagePrev ? "prev" : "next"}
        className="brightness-75"
      />
    </button>
  );
}

export default SliderButton;
