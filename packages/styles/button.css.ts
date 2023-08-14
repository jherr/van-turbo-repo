import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const button = style({
  borderRadius: "0.375rem",
  backgroundColor: vars.color.accent,
  paddingRight: "0.875rem",
  paddingLeft: "0.875rem",
  paddingTop: "0.625rem",
  paddingBottom: "0.625rem",
  lineHeight: "1.25rem",
  fontSize: "0.875rem",
  fontWeight: "700",
  color: "#eee",
  marginTop: "16px",
  marginBottom: "16px",
  textTransform: "uppercase",
});
