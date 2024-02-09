import Footer from "@components/Footer/Footer";
import { FontBody, FontHeading } from "@lib/fonts";
import GoogleCaptchaWrapper from "@providers/GoogleReCaptcha";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jadurani Davalos | Software Engineer",
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
