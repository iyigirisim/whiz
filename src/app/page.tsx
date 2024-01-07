"use client";

import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Image
          className="rounded-full hover:scale-105 bg-red-500 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar1.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-yellow-300 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar2.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-green-600 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar3.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-blue-600 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar4.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-purple-600 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar5.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-orange-400 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar6.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-blue-600 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar4.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-purple-600 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar5.png"
          alt="Profile"
          width={280}
        />
        <Image
          className="rounded-full hover:scale-105 bg-orange-400 border-b-4 border-transparent hover:border-b-4 hover:border-black"
          src="/images/avatar6.png"
          alt="Profile"
          width={280}
        />
      </div>
    </>
  );
}
