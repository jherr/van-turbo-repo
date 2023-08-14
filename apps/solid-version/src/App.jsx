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
import { grid } from "./App.css";

import solidLogo from "./assets/solid.svg";

function Button({ children, ...props }) {
  return (
    <button class={button} {...props}>
      {children}
    </button>
  );
}

const Card = ({ imageSrc, imageAlt, title, description }) => (
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
);

function App() {
  return (
    <>
      <div class={headerContainer}>
        <img
          src={solidLogo}
          alt="Solid logo"
          style="width: 25px; height: 25px;"
        />
        <div>SolidJS on Vite</div>
      </div>
      <div class={grid}>
        <Card
          imageSrc="mouse-mid-century.png"
          imageAlt="Mid-Century Mouse"
          title="Mid-Century Mouse"
          description="Recapture the flying car era with this retro mouse. It is a powerful mouse that can be used to hunt in the Pinnacle Chamber."
        />
        <Card
          imageSrc="mouse-dragon-2.png"
          imageAlt="Dragon Mouse"
          title="Dragon Mouse"
          description="The Dragon Mouse is a limited edition mouse that is only available in the month of February. It is a powerful mouse that can be used to hunt in the Fire Dojo."
        />
      </div>
    </>
  );
}

export default App;
