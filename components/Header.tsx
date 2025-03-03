import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title, Text, Button, Divider, Grid } from "@mantine/core";
import Icon from "@/public/assets/i-dot-ai-Official-Logo.svg";
import { useRouter } from "next/navigation";

export const Header = (): ReactElement => {
  const router = useRouter();

  const navAction = (path: string): void => {
    router.push(path);
  };

  return (
    <>
      <Grid id="header" className="simple-header" data-testid="simple-header">
        <Grid.Col span={4}>
          <Link href="/">
            <div
              className="header--logo-container"
              onClick={(): void => navAction("/")}
            >
              <Image
                src={Icon}
                className="header--logo"
                alt="iAI Icon"
                height={30}
              />
            </div>
          </Link>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className="w-full flex flex-row justify-center align-center">
            <Title order={2} style={{ color: "white" }} fw={650}>
              Barbados Hackathon
            </Title>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className="flex flex-row gap-3 pr-5 pt-[0.1rem] h-full justify-center align-center">
            <Divider orientation="vertical" color="white" />
            <Text
              fw={650}
              c="white"
              size="sm"
              className="whitespace-pre tracking-tighter"
            >
              {"Dashboard\n walkthroughs: "}
            </Text>
            <Button
              c="white"
              color="white"
              variant="outline"
              className="w-auto"
              onClick={() => {
                navAction("/python");
              }}
            >
              Intro to Plotly
            </Button>
            <Button
              c="white"
              color="white"
              variant="outline"
              className="w-auto"
              onClick={() => {
                navAction("/advanced-python");
              }}
            >
              Advanced Plotly
            </Button>
          </div>
        </Grid.Col>
      </Grid>
      <div className="header-buffer"></div>
    </>
  );
};
