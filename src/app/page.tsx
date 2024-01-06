"use client";

import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen">
      <Flex className="flex flex-row items-center justify-between p-8 gap-4">
        <Button
          onClick={() => router.push("/corporate")}
          className="flex-col items-center justify-center w-1/3 scaling"
        >
          <Image
            className="rounded-full"
            id="scale"
            src="/images/boss.png"
            alt="Hiring Manager"
            width={420}
          />
          <Text className="text-6xl font-thin">Hi, I'm a</Text>
          <Text className="text-3xl font-bold" id="underline">
            Hiring Manager!
          </Text>
        </Button>
        <Flex className="flex-col items-center justify-center w-2/3">
          <Box className="flex flex-row items-center justify-center w-full gap-4">
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
          </Box>
          <Box className="flex flex-row items-center justify-center w-full gap-4 mt-8">
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
          </Box>
        </Flex>
      </Flex>
    </main>
  );
}
