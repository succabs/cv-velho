import Feature from "./Feature";
import first from "../assets/1.png"; // Tell webpack this JS file uses this image
import second from "../assets/2.png"; // Tell webpack this JS file uses this image
import third from "../assets/3.png"; // Tell webpack this JS file uses this image
export default function Features() {
  return (
    <div className="flex flex-wrap justify-center p-8">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Feature
          picture={first}
          text="CV-Velho tarjoaa helpon ja intuitiivisen tavan luoda ammattimainen ansioluettelo. Täytä vain valmiit osiot omilla tiedoillasi. Luo ansioluettelosi hetkessä!"
          heading="Nopea ja vaivaton työkalu"
        ></Feature>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Feature
          picture={second}
          text="Valitse CV:si ulkonäkö luomiemme ammattimaisten pohjien joukosta. Valmiit pohjat ovat modernit ja silmiinpistävät. Korosta osaamistasi tehokkaasti ja luo vaikutus työnantajiin!"
          heading="Laadukkaat pohjat valmiina"
        ></Feature>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Feature
          picture={third}
          text="Tallenna ansioluettelosi PDF-muodossa. Lataa valmis CV:si PDF-tiedostona ja jaa se vaivattomasti työnantajille ja rekrytoijille!"
          heading="Kätevästi PDF-muotoon"
        ></Feature>
      </div>
    </div>
  );
}
