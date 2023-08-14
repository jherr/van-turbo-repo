import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  fontFamily: `'Clear Sans', 'Helvetica Neue', Arial, sans-serif`,
  maxWidth: "500px",
  margin: "0px auto",
  marginBottom: "2rem",
  background: `linear-gradient(${vars.color.background}, #000)`,
});
