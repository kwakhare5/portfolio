interface MediaContainerProps {
  readonly src: string;
  readonly alt?: string;
  readonly type?: "image" | "video";
  readonly className?: string;
}

export function MediaContainer({
  src,
  alt = "",
  type = "image",
  className = "",
}: MediaContainerProps) {
  return (
    <div className={`ring-4 ring-muted w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center ${className}`}>
      {type === "image" ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center max-w-full max-h-full"
        />
      ) : (
        <video
          src={src}
          className="w-full h-full object-cover object-center max-w-full max-h-full"
          controls
        />
      )}
    </div>
  );
}
