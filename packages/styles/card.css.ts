import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  borderRadius: ".25rem",
  boxShadow: `0 10px 15px -3px ${vars.color.background},0 4px 6px -2px rgba(0,0,0,.05)`,
  overflow: "hidden",
  boxSizing: "border-box",
  border: "0 solid #e2e8f0",
  background: "white",
});

export const image = style({
  maxWidth: "100%",
  width: "100%",
  height: "auto",
  display: "block",
  verticalAlign: "middle",
  borderStyle: "solid",
  border: "0 solid #e2e8f0",
  overflowClipMargin: "content-box",
  overflow: "clip",
});

export const content = style({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  boxSizing: "border-box",
  border: "0 solid #e2e8f0",
  display: "block",
  color: "rgb(74,85,104)",
  lineHeight: "1.625",
});

export const actions = style({
  display: "flex",
  justifyContent: "end",
});

export const title = style({
  marginBottom: "0.5rem",
  fontSize: "1.25rem",
  fontWeight: 700,
  boxSizing: "border-box",
  border: "0 solid #e2e8f0",
  display: "block",
});

export const description = style({
  color: "rgb(74,85,104)",
  fontSize: "1rem",
  margin: 0,
  boxSizing: "border-box",
  border: "0 solid #e2e8f0",
  display: "block",
  marginBlockStart: "1em",
  marginBlockEnd: "1em",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
});
