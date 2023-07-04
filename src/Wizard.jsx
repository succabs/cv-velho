import "./App.css";
import cvpic from "./assets/cvimage.jpeg"; // Tell webpack this JS file uses this image
import CVDocument from "./components/CVDocument";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function Wizard() {
  const [date, setDate] = useState("12.6.2023");
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
        <div className="w-1/4 h-screen text-white p-4 border-r-4 border-orange-500 p-4 flex flex-col">
          <ul className="space-y-2">
            <li>Teema</li>
            <div className="relative w-full lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Pohja 1</option>
                <option>Pohja 2</option>
                <option>Pohja 3</option>
                <option>Pohja 4</option>
              </select>
            </div>
            <li>Fontti</li>
            <div className="relative w-full lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Arial</option>
                <option>Calibri</option>
                <option>Garamond</option>
                <option>Georgia</option>
                <option>Verdana</option>
              </select>
            </div>
            <li>Kieli</li>
            <div className="relative w-full lg:max-w-sm">
              <select className="w-full p-2.5 text-gray-100 bg-gray-800 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Suomi</option>
                <option>Englanti</option>
                <option>Ruotsi</option>
              </select>
            </div>
          </ul>

          <div className="text-center py-4 mt-auto">
            <p>Esikatselu</p>
            <PDFViewer>
              <CVDocument
                date={date}
                name={name}
                address={address}
                phone={phone}
                email={email}
                description={description}
                setDescription={setDescription}
                education={education}
                eduYears={eduYears}
                major={major}
                gpa={gpa}
                workExperience={workExperience}
                workDesc={workDesc}
                workYears={workYears}
                referees={referees}
                refereeMail={refereeMail}
                refereePhone={refereePhone}
                refereeCompany={refereeCompany}
                refereeRelationship={refereeRelationship}
                imageUrl={imageUrl}
              />
            </PDFViewer>
            <div className="py-2">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                <PDFDownloadLink
                  document={
                    <CVDocument
                      date={date}
                      name={name}
                      address={address}
                      phone={phone}
                      email={email}
                      description={description}
                      setDescription={setDescription}
                      education={education}
                      eduYears={eduYears}
                      major={major}
                      gpa={gpa}
                      workExperience={workExperience}
                      workDesc={workDesc}
                      workYears={workYears}
                      referees={referees}
                      refereeMail={refereeMail}
                      refereePhone={refereePhone}
                      refereeCompany={refereeCompany}
                      refereeRelationship={refereeRelationship}
                      imageUrl={imageUrl}
                    />
                  }
                  fileName="cv.pdf"
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Luodaan pdf..." : "Lataa pdf"
                  }
                </PDFDownloadLink>
              </button>
            </div>
          </div>
        </div>
        {/* CV Section */}
        <div id="cv-section" className="w-3/4 p-2 m-8 text-dark bg-white">
          {/* CV content */}
          <div className="p-4">
            {/* Editable text fields */}
            <p
              className="bg-slate-100 text-right"
              contentEditable
              onBlur={(e) => setDate(e.target.textContent)}
            >
              {date}
            </p>
            <div className="flex">
              <div className="w-1/4">
                <img className="w-1/2" src={imageUrl} alt="Logo" />
                <input
                  type="file"
                  accept="image/*"
                  id="upload-image"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleImageClick}
                >
                  Lataa kuva
                </button>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setName(e.target.textContent)}
                >
                  {name}
                </p>
                <p>Puhelinnumero</p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setPhone(e.target.textContent)}
                >
                  {phone}
                </p>
                <p>Osoite</p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setAddress(e.target.textContent)}
                >
                  {address}
                </p>
                <p>Sähköposti</p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setEmail(e.target.textContent)}
                >
                  {email}
                </p>
              </div>
            </div>

            <div className="flex border-t-2">
              <div className="w-1/4">
                <h2>Yhteenveto</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setDescription(e.target.textContent)}
                >
                  {description}
                </p>
              </div>
            </div>

            <div className="flex border-t-2">
              <div className="w-1/4">
                <h2>Koulutus</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100 text-right"
                  contentEditable
                  onBlur={(e) => setEduYears(e.target.textContent)}
                >
                  {eduYears}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setEducation(e.target.textContent)}
                >
                  {education}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setMajor(e.target.textContent)}
                >
                  {major}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setGpa(e.target.textContent)}
                >
                  {gpa}
                </p>
              </div>
            </div>
            <div className="flex border-t-2">
              <div className="w-1/4">
                <h2>Työkokemus</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100  text-right"
                  contentEditable
                  onBlur={(e) => setWorkYears(e.target.textContent)}
                >
                  {workYears}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setWorkExperience(e.target.textContent)}
                >
                  {workExperience}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setWorkDesc(e.target.textContent)}
                >
                  {workDesc}
                </p>
              </div>
            </div>
            <div className="flex border-t-2">
              <div className="w-1/4">
                <h2>Suosittelijat</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setReferees(e.target.textContent)}
                >
                  {referees}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setRefereeCompany(e.target.textContent)}
                >
                  {refereeCompany}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setRefereeRelationship(e.target.textContent)}
                >
                  {refereeRelationship}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setRefereeMail(e.target.textContent)}
                >
                  {refereeMail}
                </p>
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setRefereePhone(e.target.textContent)}
                >
                  {refereePhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Wizard;
