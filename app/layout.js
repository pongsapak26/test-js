import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import LangSwitcher from "../components/LangSwitcher";
import NavBar from "../components/NavBar";
import MainMenuBar from "../components/MainMenuBar";
import Footer from "../components/Footer";
export const metadata = {
  title: "S-ONE Tyre | ยางรถยนต์และศูนย์บริการครบวงจร",
  description: "ค้นหายาง โปรโมชั่น ข่าวสาร และศูนย์บริการใกล้บ้านคุณ ด้วยบริการจาก S-ONE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-supermarket">
        <LanguageProvider>
          <NavBar />
          <MainMenuBar />
          <main className="p-6">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
