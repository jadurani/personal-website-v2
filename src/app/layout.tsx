import Footer from "@components/Footer/Footer";
import { FontBody, FontHeading } from "@lib/fonts";
import GoogleCaptchaWrapper from "@providers/GoogleReCaptcha";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jadurani Davalos | Software Engineer",
  metadataBase: new URL("https://www.jadurani.me"),
  openGraph: {
    title: "Jadurani Davalos | Software Engineer",
    images: "/opengraph-image.jpg",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontHeading.variable} ${FontBody.variable}`}>
        <GoogleCaptchaWrapper>
          {children}
          <Footer />
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
