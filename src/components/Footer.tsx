"use client";

import { Button, Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function Footer() {
  const router = useRouter();
  return (
    <main className="p-8 flex flex-row justify-between">
      <Flex direction={"row"} justify={"start"} align={"center"} gap={8}>
        <Button
          onClick={() => router.push("/")}
          className="text-sm font-normal hover:underline mark"
        >
          Home<a id="invisible-mark">!</a>
        </Button>
        <Button
          onClick={() => router.push("/about")}
          className="text-sm font-normal hover:underline mark"
        >
          About<a id="invisible-mark">!</a>
        </Button>
        <Button
          onClick={() => router.push("/contact")}
          className="text-sm font-normal hover:underline mark"
        >
          Contact<a id="invisible-mark">!</a>
        </Button>
      </Flex>
      <Flex direction={"row"} justify={"end"} align={"center"} gap={8}>
        <Button onClick={() => router.push("/")}>
          <Icon
            as={RiInstagramFill}
            h={30}
            w={30}
            className="hover:text-pink-600"
          />
        </Button>
        <Button onClick={() => router.push("/")}>
          <Icon
            as={RiLinkedinBoxFill}
            h={32}
            w={32}
            className="hover:text-blue-600"
          />
        </Button>
        <Button onClick={() => router.push("/")}>
          <Icon
            as={RiTwitterXFill}
            h={28}
            w={28}
            className="hover:text-sky-600"
          />
        </Button>
      </Flex>
    </main>
  );
}
