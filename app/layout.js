import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import LangSwitcher from "../components/LangSwitcher";
import NavBar from "../components/NavBar";
import MainMenuBar from "../components/MainMenuBar";
import Footer from "../components/Footer";

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
