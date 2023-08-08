import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import "./globals.css";
import styles from "./layout.module.css";
import MainInput from "@/components/MainInput/MainInput";
import Logo from "@/components/Logo/Logo";
import bg from "../public/assets/bg.svg";

export const metadata = {
  title: "Event Planner",
  description: "A test task for Soft Ryzen by Danylo Osadchenko",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${bg.src})`, minHeight: "100vh" }}>
        <header
          className={styles.header}
          style={{ backgroundColor: "#FEFCFF" }}
        >
          <div className={styles.headerContainer}>
            <div className={styles.box}>
              <Logo className={styles.first} />
              <LanguageSelect className={styles.second} />
              <MainInput className={styles.third} />
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
