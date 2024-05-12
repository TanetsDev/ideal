import type { Metadata } from "next";
import {
  Manrope,
  Roboto,
  Roboto_Flex,
  Julius_Sans_One,
} from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import config from "@/config";
import ReduxProvider from "@/redux/ReduxProvider/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const robotoFlex = Roboto_Flex({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-roboto-flex",
});
const juliusSans = Julius_Sans_One({
  weight: ["400"],
  variable: "--font-julius-sans-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ideal Box",
  description: "Ideal Box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua" className=" w-full min-h-full ">
      <body
        className={`${manrope.variable} ${roboto.variable} ${robotoFlex.variable} ${juliusSans.variable} min-h-full bg-[#F9F9F9]`}
      >
        <GoogleOAuthProvider clientId={config.google.CLIENT_ID}>
          <ReduxProvider>
            <Header />
            <ToastContainer />

            <main className="my__height">{children}</main>
            <Footer />
          </ReduxProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
