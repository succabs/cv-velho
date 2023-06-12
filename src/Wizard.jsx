import "./App.css";
import cvpic from "./assets/cvimage.jpeg"; // Tell webpack this JS file uses this image
import garamond from "./assets/fonts/Cormorant_Garamond/CormorantGaramond-Regular.ttf"; // Tell webpack this JS file uses this image
import React, { useState } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  View,
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Garamond",
  src: garamond,
});

function Wizard() {
  const [name, setName] = useState("Etunimi Sukunimi");
  const [address, setAddress] = useState("Katutie 7, 40740 Jyväskylä");
  const [phone, setPhone] = useState("+35840555987");
  const [email, setEmail] = useState("etunimi.sukunimi@gmail.com");
  const [education, setEducation] = useState("Jyväskylän yliopisto");
  const [workExperience, setWorkExperience] = useState("Software Developer");
  const [referees, setReferees] = useState("Jane Smith");

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

  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      fontFamily: "Garamond",
      lineHeight: 1.2,
    },
    date: {
      margin: 10,
      padding: 10,
      textAlign: "right",
    },
    borderYla: {
      flexDirection: "row",
      borderTop: 1,
    },
    heading: {
      margin: 0,
      padding: 5,
      fontWeight: "bold",
    },
    infoText: {
      margin: "auto",
      fontWeight: "normal",
      fontSize: 11,
    },
    sectionHeading: {
      margin: 0,
      padding: 5,
      paddingLeft: 0,
      fontWeight: 500,
      fontSize: 16,
    },
    sectionText: {
      margin: 0,
      paddingLeft: 0,
      fontWeight: "normal",
      fontSize: 11,
    },
    sectionDate: {
      marginTop: 32,
      padding: 5,
      paddingLeft: 0,
    },
    cvimage: {
      width: 100,
      padding: 5,
      marginBottom: 10,
    },
  });

  const CVDocument = ({
    name,
    address,
    phone,
    email,
    education,
    workExperience,
    referees,
  }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.date}>
          <Text>11.6.2023</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, maxWidth: "25%", alignItems: "center" }}>
            <Image style={styles.cvimage} src={imageUrl} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.sectionHeading}>{name}</Text>
            <Text style={styles.sectionText}>Osoite: {address}</Text>
            <Text style={styles.sectionText}>Puhelinnumero: {phone}</Text>
            <Text style={styles.sectionText}>Sähköposti: {email}</Text>
          </View>
        </View>
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Yhteenveto</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.infoText}>
              Nuori ja motivoitunut opiskelija. Kokemusta monenlaisista
              kesätöistä. Valmiina kohti uusia haasteita.
            </Text>
          </View>
        </View>
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Koulutus</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.sectionHeading}>{education}</Text>
            <Text style={styles.sectionText}>Pääaine</Text>
            <Text style={styles.sectionText}>Keskiarvo</Text>
            <Text style={styles.sectionText}>Lisätiedot</Text>
            <Text style={styles.sectionDate}>2016-2023</Text>
          </View>
        </View>
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Työkokemus</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.sectionHeading}>{workExperience}</Text>
            <Text style={styles.sectionText}>Lyhyt kuvaus työstä</Text>
            <Text style={styles.sectionDate}>6/21-8/21</Text>
          </View>
        </View>
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Suosittelijat</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.sectionHeading}>{referees}</Text>
            <Text style={styles.sectionText}>Puhelinnumero</Text>
            <Text style={styles.sectionText}>Sähköposti</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

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
            <p>Esikatselu </p>
            <PDFViewer>
              <CVDocument
                {...{
                  name,
                  phone,
                  address,
                  email,
                  education,
                  workExperience,
                  referees,
                }}
              />
            </PDFViewer>
            <div className="py-2">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                <PDFDownloadLink
                  document={
                    <CVDocument
                      {...{
                        name,
                        phone,
                        address,
                        email,
                        education,
                        workExperience,
                        referees,
                      }}
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
            <h2 className="text-right">11.6.2023</h2>
            <img className="w-1/6 h-1/6" src={imageUrl} alt="Logo" />
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
            <p
              className="bg-slate-100"
              contentEditable
              onBlur={(e) => setName(e.target.textContent)}
            >
              {name}
            </p>
            <div className="flex">
              <div className="w-1/4">
                <h2>Yhteystiedot</h2>
              </div>
              <div className="w-3/4">
                <h2>Yhteenveto</h2>
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
            <div className="flex">
              <div className="w-1/4">
                <h2>Koulutus</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setEducation(e.target.textContent)}
                >
                  {education}
                </p>
                <p className="text-right">2016-2023</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4">
                <h2>Työkokemus</h2>
              </div>
              <div className="w-3/4">
                <p
                  className="bg-slate-100"
                  contentEditable
                  onBlur={(e) => setWorkExperience(e.target.textContent)}
                >
                  {workExperience}
                </p>
              </div>
            </div>
            <div className="flex">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wizard;
