import Image from "next/image";

type GridPropProps = {
  image_path: string;
  resize?: [string, string]; // use strings like "50%", "20vw", etc.
};

const GridProp = ({ image_path, resize }: GridPropProps) => {
  const [width, height] = resize ?? ["100%", "100%"];

  return (
    <div className="flex relative flex-shrink-0 w-[30vw] h-[30vw] rounded-full overflow-hidden border border-white/20">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0 1px, transparent 1px 40px),
            repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0 1px, transparent 1px 40px)
          `,
        }}
      />

      {/* Centered image */}
      <div
        className="absolute inset-0 flex justify-center items-center"
        style={{ width, height }}
      >
        <Image
          src={image_path}
          alt="grid-image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GridProp;
