import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export default function Container({ children, className, style, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1200px] mx-auto px-12 max-sm:px-6", className)}
      /* Centered inline: the unlayered `* { margin: 0 }` reset in globals.css
         outranks Tailwind's layered utilities, so `mx-auto` alone does nothing. */
      style={{ marginLeft: "auto", marginRight: "auto", ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
