import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anatomi Atölyesi",
  description:
    "İnsan vücudunun interaktif atlası. İsimlendirilmiş anatomik yapıları keşfedin, organ sistemlerini ortaya çıkarın ve parçaları tek tek 3 boyutlu inceleyin.",
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3f4f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
