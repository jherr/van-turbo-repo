import "styles/theme.css";
import "styles/globals.css";
import Image from "next/image";
import { container } from "styles/header.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={container}>
          <Image src="/react.png" width={25} height={25} alt="React Logo" />
          <div>NextJS App Router</div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
