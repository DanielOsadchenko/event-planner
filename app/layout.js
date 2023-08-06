import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import "./globals.css";
import styles from "./layout.module.css";
import MainInput from "@/components/MainInput/MainInput";
import Logo from "@/components/Logo/Logo";
import bg from "../public/assets/bg.png";
import bgMob from "../public/assets/bg-mobile.png";
import Container from "@/components/Container/Container";

export const metadata = {
  title: "Event Planner",
  description: "A test task for Soft Ryzen by Danylo Osadchenko",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Container>
            <div className={styles.box}>
              <Logo />
              <LanguageSelect />
              <MainInput />
            </div>
          </Container>
        </header>
        <main style={{ backgroundImage: `url(${bgMob.src})` }}>{children}</main>
      </body>
    </html>
  );
}
