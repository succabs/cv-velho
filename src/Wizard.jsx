import "./App.css";
import cvpic from "./assets/cvimage.jpeg"; // Tell webpack this JS file uses this image
import ThemeSelect from "./components/ThemeSelect";
import FontSelect from "./components/FontSelect";
import LangSelect from "./components/LangSelect";
import PreviewSection from "./components/PreviewSection";
import Footer from "./components/Footer";
import React, { useState } from "react";

function Wizard() {
  const [selectedFont, setSelectedFont] = useState("Garamond");
  const [selectedLanguage, setSelectedLanguage] = useState("Suomi");

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleFontSelect = (font) => {
    setSelectedFont(font);
  };

  const current = new Date();
  const currentDate = `${current.getDate()}.${
    current.getMonth() + 1
  }.${current.getFullYear()}`;

  const [educationEntries, setEducationEntries] = useState([
    { id: 1, education: "", eduYears: "", major: "", gpa: "" },
  ]);
  const [workExperienceEntries, setWorkExperienceEntries] = useState([
    { id: 1, workExperience: "", workYears: "", workDesc: "" },
  ]);
  const [refereesEntries, setRefereesEntries] = useState([
    {
      id: 1,
      referees: "",
      refereeCompany: "",
      refereeRelationship: "",
      refereeMail: "",
      refereePhone: "",
    },
  ]);

  const handleAddEducation = () => {
    const newEntry = {
      id: Date.now(),
      education: "",
      eduYears: "",
      major: "",
      gpa: "",
    };
    setEducationEntries([...educationEntries, newEntry]);
  };
  const handleEducationChange = (value, index, field) => {
    const updatedEntries = [...educationEntries];
    updatedEntries[index] = { ...updatedEntries[index], [field]: value };
    setEducationEntries(updatedEntries);
  };

  const handleAddWorkExperience = () => {
    const newEntry = {
      id: Date.now(),
      workExperience: "",
      workYears: "",
      workDesc: "",
    };
    setWorkExperienceEntries([...workExperienceEntries, newEntry]);
  };

  const handleAddReferee = () => {
    const newEntry = {
      id: Date.now(),
      referees: "",
      refereeCompany: "",
      refereeRelationship: "",
      refereeMail: "",
      refereePhone: "",
    };
    setRefereesEntries([...refereesEntries, newEntry]);
  };

  const [date, setDate] = useState(currentDate);
  const [name, setName] = useState("Erkki Esimerkki");
  const [address, setAddress] = useState("Katutie 7, 40740 Jyväskylä");
  const [phone, setPhone] = useState("+35840555987");
  const [email, setEmail] = useState("erkki.esimerkki@gmail.com");
  const [description, setDescription] = useState(
    "Nuori ja motivoitunut opiskelija. Valmis uuteen seikkailuun."
  );
  const [education, setEducation] = useState("Jyväskylän yliopisto");
  const [major, setMajor] = useState("Tietotekniikka");
  const [gpa, setGpa] = useState("keskiarvo 3");
  const [eduYears, setEduYears] = useState("2016-2020");
  const [workExperience, setWorkExperience] = useState("Asiakaspalvelija");
  const [workDesc, setWorkDesc] = useState(
    "Toimin asiakaspalvelijana iloisella asenteella."
  );
  const [workYears, setWorkYears] = useState("06/20-08/20");
  const [referees, setReferees] = useState("Seppo Suosittelija");
  const [refereePhone, setRefereePhone] = useState("+35045665551");
  const [refereeMail, setRefereeMail] = useState(
    "seppo.suosittelija@osoite.com"
  );
  const [refereeCompany, setRefereeCompany] = useState("Suosittelijat Oy");
  const [refereeRelationship, setRefereeRelationship] = useState("esimies");
  const [imageUrl, setImageUrl] = useState(cvpic);

  const handleImageClick = () => {
    const fileInput = document.getElementById("upload-image");
    fileInput.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImageUrl(imageUrl);
  };

  return (
    <>
      <div className="flex">
        {/* Menu Section */}
        <div className="w-1/4 h-screen text-white p-4  p-4 flex flex-col">
          <ul className="space-y-2">
            <li>Teema</li>
            <ThemeSelect />
            <li>Fontti</li>
            <FontSelect onSelectFont={handleFontSelect} />
            <li>Kieli</li>
            <LangSelect onSelectLanguage={handleLanguageSelect} />
          </ul>

          <PreviewSection
            date={date}
            name={name}
            address={address}
            phone={phone}
            email={email}
            description={description}
            educationEntries={educationEntries}
            workExperienceEntries={workExperienceEntries}
            refereesEntries={refereesEntries}
            imageUrl={imageUrl}
            selectedFont={selectedFont}
            selectedLanguage={selectedLanguage}
          />
        </div>

        {/* CV-modifying Section */}
        <div
          id="cv-section"
          className="w-3/4 py-2 pr-2 mt-8 mr-4 text-white bg-dark border-l-4 border-orange-500"
        >
          {/* CV content */}
          <div className="">
            {/* Picture */}
            <div className="flex">
              <div className="w-1/4">
                <div className="flex flex-col items-center">
                  <img className="w-2/3" src={imageUrl} alt="Logo" />
                  <input
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <button
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleImageClick}
                  >
                    Lataa kuva
                  </button>
                </div>
              </div>

              <div className="w-3/4 pb-4">
                <h2>Yhteystiedot</h2>
                <input
                  placeholder="Päivämäärä"
                  className=" text-black placeholder-gray-600 w-1/4 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={currentDate}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  placeholder="Erkki Esimerkki"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="Puhelinnumero"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  placeholder="Osoite"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  placeholder="Sähköposti"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Summary*/}
            <div className="flex pb-4">
              <div className="w-1/4 pl-8 pt-0">
                <h2>Yhteenveto</h2>
              </div>
              <div className="w-3/4">
                <input
                  placeholder="Yhteenveto"
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            {/* Education */}
            {educationEntries.map((entry, index) => (
              <div key={entry.id} className="flex pb-4">
                <div className="w-1/4 pl-8">
                  <h2>Koulutus</h2>
                </div>
                <div className="w-3/4">
                  <input
                    placeholder="Koulupaikka"
                    className="text-black placeholder-gray-600 w-3/4 px-2 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={entry.education}
                    onChange={(e) =>
                      handleEducationChange(e.target.value, index, "education")
                    }
                  />
                  <input
                    placeholder="Päivämäärä"
                    className="text-black placeholder-gray-600 w-1/4 px-2 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={entry.eduYears}
                    onChange={(e) =>
                      handleEducationChange(e.target.value, index, "eduYears")
                    }
                  />
                  <input
                    placeholder="Oppiaine"
                    className="text-black placeholder-gray-600 w-full px-2 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={entry.major}
                    onChange={(e) =>
                      handleEducationChange(e.target.value, index, "major")
                    }
                  />
                  <input
                    placeholder="Keskiarvo"
                    className="text-black placeholder-gray-600 w-full px-2 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    value={entry.gpa}
                    onChange={(e) =>
                      handleEducationChange(e.target.value, index, "gpa")
                    }
                  />
                </div>
              </div>
            ))}

            {/* Plus Button */}
            <button onClick={handleAddEducation}>+</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Wizard;
