"use-client";

import Image from "next/image";

export const Logo = () => (
  <Image
    src="/logo.jpg"
    alt="Company Logo"
    width={90}
    height={90}
    priority
    className="porda-no-filter" // always fixed, not conditional
    style={{ color: "transparent", filter: "none" }}
  />
);
