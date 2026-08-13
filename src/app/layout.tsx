import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const baloo = localFont({
  src: "./fonts/baloo2.woff2",
  variable: "--font-baloo",
  weight: "500 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Achmad Dicky Adi Prastian | IT Support Specialist",
  description:
    "Portfolio of Achmad Dicky Adi Prastian — IT Support Specialist and Technical Support with a Bachelor of Informatics from Universitas Teknokrat Indonesia.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${baloo.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
