"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();
  useEffect(() => {
    let lang = "en";
    if (globalThis.window !== undefined) {
      lang = localStorage.getItem("language") || navigator.language?.slice(0, 2) || "en";
      if (lang !== "pl") lang = "en";
    }
    router.replace(`/${lang}`);
  }, [router]);
  return null;
}
