import DecorativeVideo from "./DecorativeVideo";

interface MovieLayoutProps {
  movieLink: string;
  text?: React.ReactNode;
}

export default function MovieLayout({ movieLink, text }: MovieLayoutProps) {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 min-h-[240px] h-[clamp(240px,35vw,500px)] overflow-hidden">
      <DecorativeVideo src={movieLink} />
      <div className="relative flex h-full w-full items-center justify-center px-4 py-12 pointer-events-none">
        <div>{text}</div>
      </div>
    </section>
  );
}
