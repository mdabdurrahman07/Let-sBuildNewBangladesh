import "./globals.css";
import { provider } from "@/util/provider";


export const metadata = {
  title: "Let'sBuildNewBangladesh - Home ",
  description: "This a blogpost website where people can share their ideas to build Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><provider>{children}</provider></body>
    </html>
  );
}
