import { useTranslation } from "react-i18next";
import { LiHref } from "./components/LiHref.component";
import LangSelector from "./features/languages/LangSelector";

export const NavBar = () => {
    const { t } = useTranslation();

    return (
        <nav>
          <ul>
            <li>
              <a href="/hypotheque">{t("Hypotheque")}</a>
            </li>
            <li>
              <a href="/revenue">{t("Revenue")}</a>
            </li>
            <li>
              <a href="/depense">{t("Depense")}</a>
            </li>
            <li>
              <a href="/simulation">{t("Simulation")}</a>
            </li>
            <LiHref
              href="https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/MC-CH-fra.aspx"
              text={t("CalculatriceHypothecaireCanada")}></LiHref>
            <LiHref
              href="http://www.calculconversion.com/calcul-pret-hypothecaire.html#:~:text=Formule%20du%20pr%C3%AAt%20hypoth%C3%A9caire%20Le%20versement%20mensuel%20%3D,l%27ann%C3%A9e%29-Nombre%20de%20versements%20%2A%20Nombre%20d%27ann%C3%A9es%20du%20terme"
              text={t("CommentCalculerPret")}></LiHref>
            <li>
              <LangSelector></LangSelector>
            </li>
          </ul>
        </nav>
    )
}