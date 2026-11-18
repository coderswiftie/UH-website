import React from "react";
import Image from "next/image";

interface ProjectSchematicProps {
  projectId: string;
  media?: string;
  title?: string;
  className?: string;
}

export function ProjectSchematic({
  projectId,
  media,
  title,
  className = "",
}: ProjectSchematicProps) {
  if (media) {
    return (
      <div
        className={`relative aspect-square w-full rounded-xl overflow-hidden bg-[#0c0718] border border-mint-border/70 select-none ${className}`}
      >
        <Image
          src={media}
          alt={title ? `${title} media graphic` : `${projectId} media graphic`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`aspect-square w-full rounded-xl bg-navy text-white p-6 flex flex-col justify-end border border-navy-dark ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-teal-light">
        Unhackable Humans
      </span>
      <span className="text-lg font-bold tracking-tight mt-1">
        {title || projectId}
      </span>
    </div>
  );
}
