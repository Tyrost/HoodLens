import Image from "next/image";

type GridPropProps = {
  image_path: string;
  resize?: [number, number]; // optional tuple of [width, height]
};

const GridProp = ({ image_path, resize }: GridPropProps) => {
  const [width, height] = resize ?? [400, 400]; // default to 400x400

  return (
    <div className="flex relative w-[600px] h-[600px] rounded-full overflow-hidden border border-white/20">
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
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={image_path}
          alt="grid-image"
          width={width}
          height={height}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GridProp;
