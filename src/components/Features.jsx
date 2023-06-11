import Feature from "./Feature";
import first from "../assets/1.png"; // Tell webpack this JS file uses this image
import second from "../assets/2.png"; // Tell webpack this JS file uses this image
import third from "../assets/3.png"; // Tell webpack this JS file uses this image
export default function Features() {
  return (
    <div className="flex flex-row content-center">
      <div className="basis-1/3 px-2">
        <Feature
          picture={first}
          text="CV-Velho tarjoaa helpon ja intuitiivisen tavan luoda ammattimainen ansioluettelo. Täytä vain valmiit osiot omilla tiedoillasi. Luo ansioluettelosi hetkessä!"
          heading="Nopea ja vaivaton työkalu"
        ></Feature>
      </div>
      <div className="basis-1/3 px-2">
        <Feature
          picture={second}
          text="Valitse CV-Velhosta useista ammattimaisista pohjista. Valmiit pohjat ovat modernit ja silmiinpistävät. Korosta osaamistasi tehokkaasti ja luo vaikutus työnantajiin!"
          heading="Laadukkaat pohjat valmiina"
        ></Feature>
      </div>
      <div className="basis-1/3 px-2">
        <Feature
          picture={third}
          text="Tallenna ansioluettelosi PDF-muodossa. Lataa valmis CV:si PDF-tiedostona ja jaa se vaivattomasti työnantajille ja rekrytoijille!"
          heading="CV PDF-muodossa"
        ></Feature>
      </div>
    </div>
  );
}
