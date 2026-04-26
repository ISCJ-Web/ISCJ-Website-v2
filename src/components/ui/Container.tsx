import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("max-w-[1200px] mx-auto px-12 max-sm:px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
