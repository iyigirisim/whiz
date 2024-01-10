"use client";

import { Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Hiring() {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.push("/corporate")}
        className="overflow-hidden flex flex-col items-center justify-center scaling"
      >
        <Image
          className="rounded-full"
          id="scale"
          src="/images/boss.png"
          alt="Hiring Manager"
          width={420}
        />
        <Text className="text-6xl font-thin">Hi, I&apos;m a</Text>
        <Text className="text-3xl font-bold" id="underline">
          Hiring Manager<a id="invisible">!</a>
        </Text>
      </Button>
    </>
  );
}
