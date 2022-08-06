import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  children?: React.ReactNode;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const BaseLayout: FC<Props> = ({
  title = "Frontend Mentor | FAQ accordion card solution",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="og:title" content={title} />
        <meta
          property="og:image"
          content={`${origin}/img/desktop-preview.png`}
        />
      </Head>

      <main
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
    </>
  );
};
