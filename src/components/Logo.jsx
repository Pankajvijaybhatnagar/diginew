import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false, className = "h-11 w-auto" }) {
  return (
    <Link href="/" aria-label="digi1Xprt — Home" className="inline-flex shrink-0">
      <Image
        src={light ? "/logo-light.png" : "/logo.png"}
        alt="digi1Xprt — Do Big..."
        width={854}
        height={458}
        priority
        className={className}
      />
    </Link>
  );
}
