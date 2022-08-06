import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { BaseLayout } from "../components/layout";
import { Desktop, Mobile } from "../components/views";

const Home: NextPage = () => {
  const size = useWindowSize();

  return <BaseLayout>{size.width > 400 ? <Desktop /> : <Mobile />}</BaseLayout>;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handler = function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handler);
      handler();
      return () => window.removeEventListener("resize", handler);
    }
  }, []);
  return windowSize;
}
export default Home;
