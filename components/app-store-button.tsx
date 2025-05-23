import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils"; // Path to your cn utility

interface AppStoreButtonProps {
  icon?: LucideIcon;
  iconSrc?: string | StaticImageData;
  iconAlt?: string;
  topText: string;
  bottomText: string;
  href?: string;
  className?: string;
  variant?: "apple" | "google";
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({
  icon: Icon,
  iconSrc,
  iconAlt = "App store icon",
  topText,
  bottomText,
  href = "#",
  className,
  variant = "apple",
}) => {
  const baseClasses =
    "h-14 px-4 rounded-lg flex items-center space-x-3 text-white font-medium transition-all duration-200 hover:scale-105";

  const variantClasses: Record<string, string> = {
    apple: "bg-black hover:bg-black/95",
    google: "bg-black hover:bg-black/95",
  };

  return (
    <Button
      asChild
      className={cn(baseClasses, variantClasses[variant], className)}
    >
      <a href={href}>
        {Icon && <Icon size={24} />}

        {iconSrc && (
          <div className="w-6 h-6 relative">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        )}

        <div className="flex flex-col items-start">
          <span className="text-xs opacity-90">{topText}</span>
          <span className="text-sm font-semibold">{bottomText}</span>
        </div>
      </a>
    </Button>
  );
};

export default AppStoreButton;
