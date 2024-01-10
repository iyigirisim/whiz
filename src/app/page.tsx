"use client";

import React, { useRef } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDraggable } from "react-use-draggable-scroll";
import Hiring from "@/components/Hiring";

export default function Home() {
  const router = useRouter();
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, { applyRubberBandEffect: true });
  return (
    <div className="flex-1 overflow-auto px-8 md:px-16 py-4">
      <div className="flex md:flex-row flex-col">
        <div className="w-full md:w-1/2 lg:w-1/3 items-start justify-center mb-8">
          <div className="hiring-container overflow-auto">
            <Hiring />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 items-start justify-center">
          <div
            className="flex flex-wrap gap-4 items-center justify-center overflow-hidden scrollbar-hide py-2"
            {...events}
            ref={ref}
          >
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-react border-b-4 border-2 border-black hover:border-b-4 hover:border-black shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                John Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar1.png"
                alt="Profile"
                width={260}
              />
            </Box>
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-vue border-b-4 border-2 border-black hover:border-b-4 hover:border-black shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                John Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar2.png"
                alt="Profile"
                width={260}
              />
            </Box>
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-angular border-b-4 border-2 border-black hover:border-b-4 hover:border-black shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                Jane Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar3.png"
                alt="Profile"
                width={260}
              />
            </Box>
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-next border-b-4 border-2 border-gray-700 hover:border-b-4 hover:border-gray-700 shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                John Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar4.png"
                alt="Profile"
                width={260}
              />
            </Box>
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-net border-b-4 border-2 border-black hover:border-b-4 hover:border-black shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                John Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar5.png"
                alt="Profile"
                width={260}
              />
            </Box>
            <Box className="flex flex-col items-end justify-between hover:scale-105 rounded-2xl bg-java border-b-4 border-2 border-black hover:border-b-4 hover:border-black shadow-lg">
              <Text className="text-center text-xl text-white p-5">
                Jane Doe
              </Text>
              <Image
                className="rounded-full bottom-0"
                src="/images/avatar6.png"
                alt="Profile"
                width={260}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
