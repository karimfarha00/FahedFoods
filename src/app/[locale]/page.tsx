"use client";
import Header from "../components/header/Header";
import { useTranslation } from "react-i18next";


export default function HomePage() {
  // Ensure i18n is initialized on the client
  const { t } = useTranslation();

  return (
    <main>
      <Header />

      {/* Your main content after intro */}
      <div className="p-8">
        <h1>{t("welcome")}</h1>
        <p>{t("about")}</p>
        <button>{t("contact")}</button>
      </div>
    </main>
  );
}
