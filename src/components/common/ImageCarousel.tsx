import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
}

const interviewImages: ImageType[] = [
  { src: "/Interview/Interview1.webp", alt: "research1" },
  { src: "/Interview/Interview2.webp", alt: "research2" },
  { src: "/Interview/Interview3.webp", alt: "research3" },
  { src: "/Interview/Interview4.webp", alt: "research4" },
  { src: "/Interview/Interview5.webp", alt: "research5" },
];

const ImageCarousel = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-4">
        {interviewImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="opacity-50 blur-[2px] hover:blur-none transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
