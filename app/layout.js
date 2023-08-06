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
      <body
        style={{ backgroundImage: `url(${bgMob.src})`, minHeight: "100vh" }}
      >
        <header
          className={styles.header}
          style={{ backgroundColor: "#FEFCFF" }}
        >
          <Container>
            <div className={styles.box}>
              <Logo />
              <LanguageSelect />
              <MainInput />
            </div>
          </Container>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
