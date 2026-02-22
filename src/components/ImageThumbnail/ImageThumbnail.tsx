"use client";

import { ImageThumbnailProps } from "@/interface/ImageThumbnail";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ImageThumbnail = ({
  src,
  alt,
  className,
  width,
  height,
}: ImageThumbnailProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      {/* Skeleton */}
      {loading && (
        <div className="absolute inset-0 animate-pulse bg-[#2a2f35] rounded-[16px]" />
      )}

      <Image
        src={error || !src ? "/fallback.png" : src}
        alt={alt}
        width={width}
        height={height}
        fill
        className={cn("object-cover rounded-[16px]", className)}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </>
  );
};

export default ImageThumbnail;
