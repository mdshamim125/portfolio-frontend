import Image from "next/image";

export default function Logo() {
  return (
    <Image src="/logo.jpg" alt="Company Logo" width={90} height={90} priority />
  );
}
