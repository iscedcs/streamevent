import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const BentoImageGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[8rem] md:auto-rows-[18rem] grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoImageGridItem = ({
  className,
  title,
  description,
  imageUrl,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full overflow-clip rounded-xl">
        <Image
          src={imageUrl}
          alt={typeof title === "string" ? title : ""}
          layout="fill"
          objectFit="cover"
          className="rounded-xl group-hover/bento:scale-105 transition duration-200"
        />
      </div>
      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div> */}
    </div>
  );
};
