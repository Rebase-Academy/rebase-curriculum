import React from "react";
import { css } from "@emotion/css";

const Styles = {
  wrapper: css`
    font-family: sans-serif;
    font-size: 50px;
  `,
};

export default function Logo() {
  return <div className={Styles.wrapper}>REBASE</div>;
}
