import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import "./globals.css";
import MainInput from "@/components/MainInput/MainInput";
import Logo from "@/components/Logo/Logo";

export const metadata = {
  title: "Event Planner",
  description: "A test task for Soft Ryzen by Danylo Osadchenko",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div></div>
          <Logo />
          <LanguageSelect />
          <MainInput />
        </header>
        {children}
      </body>
    </html>
  );
}
