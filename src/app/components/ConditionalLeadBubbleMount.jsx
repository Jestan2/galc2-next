"use client";

import { usePathname } from "next/navigation";
import LeadBubbleMount from "./LeadBubbleMount";

export default function ConditionalLeadBubbleMount() {
  const pathname = usePathname();

  const isPropertyManagers =
    pathname === "/property-managers" || pathname.startsWith("/property-managers/");

  if (isPropertyManagers) return null;

  return <LeadBubbleMount />;
}