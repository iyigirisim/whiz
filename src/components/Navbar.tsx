"use client";

import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaRegHandPeace } from "react-icons/fa6";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center justify-center w-full px-8 md:px-16 py-4">
      <div className="border-b-4 border border-black bg-white rounded-full pl-10 pr-6 py-1">
        <Button
          onClick={() => router.push("/")}
          className="text-2xl font-normal mr-4 lg:mr-8 hover:underline mark hover:text-primary"
        >
          Home<a id="invisible-mark">!</a>
        </Button>
        <Button
          onClick={() => router.push("/about")}
          className="text-2xl font-normal mr-4 lg:mr-8 hover:underline mark hover:text-primary"
        >
          About<a id="invisible-mark">!</a>
        </Button>
        <Button
          onClick={() => router.push("/say-hi")}
          className="text-2xl font-normal hover:underline mark hover:text-primary"
        >
          Say Hi
          <a id="invisible-mark">
            <Icon as={FaRegHandPeace} className="inline-block mb-1" />
          </a>
        </Button>
      </div>
    </nav>
  );
}
