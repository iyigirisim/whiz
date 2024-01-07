"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center justify-end w-full gap-4 px-8 py-4">
      <Button
        onClick={() => router.push("/")}
        className="text-2xl font-bold hover:underline mark"
      >
        Home<a id="invisible-mark">!</a>
      </Button>
      <Button
        onClick={() => router.push("/about")}
        className="text-2xl font-bold hover:underline mark"
      >
        About<a id="invisible-mark">!</a>
      </Button>
      <Button
        onClick={() => router.push("/contact")}
        className="text-2xl font-bold hover:underline mark"
      >
        Contact<a id="invisible-mark">!</a>
      </Button>
    </nav>
  );
}
