import Image from "next/image";

interface ImageType {
  src: string;
  alt: string;
}

const interviewImages: ImageType[] = [
  { src: "/Interview/interview1.webp", alt: "research" },
  { src: "/Interview/interview2.webp", alt: "research" },
  { src: "/Interview/interview3.webp", alt: "research" },
  { src: "/Interview/interview4.webp", alt: "research" },
  { src: "/Interview/interview5.webp", alt: "research" },
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
