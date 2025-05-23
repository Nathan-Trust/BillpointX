
import Link from "next/link";
import Image from "next/image";
export function Logo({ className, isWhite = false }: { className?: string; isWhite?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="mr-2 relative">
        <div className={`h-6 w-6 rounded-sm border-2 ${isWhite ? "border-white" : "border-black"}`}></div>
        <div className={`absolute inset-0 flex items-center justify-center ${isWhite ? "text-white" : "text-black"}`}>
          <span className="text-xs font-bold">X</span>
        </div>
      </div>
      <span className={`font-bold text-lg ${isWhite ? "text-white" : "text-black"}`}>BillpointX</span>
    </div>
  )
}


export function NavLogo({
  className = "",
  isWhite = false,
}: {
  className?: string;
  isWhite?: boolean;
}) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/billpointx-logo.png" // Replace with your actual logo path
        alt="BillpointX Logo"
        width={102}
        height={32}
        className="mr-2"
      />
    </Link>
  );
}
