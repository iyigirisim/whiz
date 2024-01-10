"use client";

import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaRegHandPeace } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center justify-center lg:justify-end w-full gap-4 px-8 md:px-16 py-4">
      <Button
        onClick={() => router.push("/")}
        className="text-2xl font-bold hover:underline mark hover:text-primary"
      >
        Home<a id="invisible-mark">!</a>
      </Button>
      <Button
        onClick={() => router.push("/about")}
        className="text-2xl font-bold hover:underline mark hover:text-primary"
      >
        About<a id="invisible-mark">!</a>
      </Button>
      <Button
        onClick={() => router.push("/say-hi")}
        className="text-2xl font-bold hover:underline mark hover:text-primary"
      >
        Say Hi
        <a id="invisible-mark">
          <Icon as={FaRegHandPeace} className="inline-block mb-1" />
        </a>
      </Button>
    </nav>
  );
}
