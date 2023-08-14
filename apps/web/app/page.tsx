import Image from "next/image";
import { button } from "styles/button.css";
import {
  container,
  image,
  content,
  actions,
  title as titleStyle,
  description as descriptionStyle,
} from "styles/card.css";
import { grid } from "./page.css";

const Button = ({ children, ...props }) => (
  <button className={button} {...props}>
    {children}
  </button>
);

const Card = ({ imageSrc, imageAlt, title, description }) => (
  <div className={container}>
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1024}
      height={1024}
      className={image}
    />
    <div className={content}>
      <div className={titleStyle}>{title}</div>
      <div className={descriptionStyle}>{description}</div>
      <div className={actions}>
        <Button>Order This Mouse Now!</Button>
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className={grid}>
      <Card
        imageSrc="/mouse-cyberpunk-2.png"
        imageAlt="Cyberpunk mouse"
        title="Odd Cyberpunk Mouse"
        description="What is this thing? Not even we know? But it's cool, right? Is it even useful?"
      />
      <Card
        imageSrc="/mouse-50s.png"
        imageAlt="50s mouse"
        title="Retro Mouse"
        description="Check out this amazing retro gaming mouse. It's like you went back to the 50s!"
      />
    </div>
  );
}
