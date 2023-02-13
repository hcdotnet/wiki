import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

export type CommentsProps = {};

export default function Comments({}: CommentsProps): JSX.Element {
  const { isDarkTheme } = useColorMode();

  return (
    <div className={clsx(styles.comments)}>
      <Giscus
        repo="hcdotnet/holocure-wiki"
        repoId="R_kgDOI8hKIw"
        category="General"
        categoryId="DIC_kwDOI8hKI84CULIn"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={isDarkTheme ? "transparent_dark" : "light"}
        lang="en"
      />
    </div>
  );
}
