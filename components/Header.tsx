import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@mantine/core";
import Icon from "@/public/assets/10ds.svg";
import { useRouter } from "next/navigation";

export const Header = (): ReactElement => {
  const router = useRouter();

  const navAction = (path: string): void => {
    router.push(path);
  };

  return (
    <>
      <div id="header" className="simple-header" data-testid="simple-header">
        <Link href="/">
          <div
            className="header--logo-container"
            onClick={(): void => navAction("/")}
          >
            <Image src={Icon} className="header--logo" alt="10DS Icon" />
          </div>
        </Link>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Title order={2} style={{ color: "white" }} fw={650}>
            Barbados Hackathon
          </Title>
        </div>
        <div></div>
      </div>
      <div className="header-buffer"></div>
    </>
  );
};
