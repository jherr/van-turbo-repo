import { component$, Slot } from "@builder.io/qwik";

import { container as headerContainer } from "styles/header.css";
import { button } from "styles/button.css";
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from "styles/card.css";
import { grid } from "./app.css";

import qwikLogo from "./assets/qwik.svg";

const Button = component$(({ children, ...props }) => (
  <button class={button} {...props}>
    <Slot />
  </button>
));

const Card = component$(({ imageSrc, imageAlt, title, description }) => (
  <div class={container}>
    <img src={imageSrc} alt={imageAlt} class={image} />
    <div class={content}>
      <div class={titleStyle}>{title}</div>
      <div class={descriptionStyle}>{description}</div>
      <div class={actions}>
        <Button>Order This Mouse Now!</Button>
      </div>
    </div>
  </div>
));

export const App = component$(() => {
  return (
    <>
      <div class={headerContainer}>
        <img
          src={qwikLogo}
          alt="Qwik logo"
          style="width: 25px; height: 25px;"
        />
        <div>SolidJS on Qwik</div>
      </div>
      <div class={grid}>
        <Card
          imageSrc="mouse-dragon-1.png"
          imageAlt="Dragon Face Mouse"
          title="Dragon Face Mouse"
          description="Give our mouse the power of a dragon. This mouse is a powerful mouse that can be used to hunt in the Pinnacle Chamber."
        />
        <Card
          imageSrc="mouse-steampunk-2.png"
          imageAlt="Steampunk Mouse"
          title="Steampunk Mouse"
          description="Check out the gears on our steampunk mouse. This mouse means top hat wearing business."
        />
      </div>
    </>
  );
});
