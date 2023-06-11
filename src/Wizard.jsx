import "./App.css";
import cvpic from "./assets/cvimage.jpeg"; // Tell webpack this JS file uses this image
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
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  day: {
    margin: 10,
    padding: 10,
    textAlign: "right",
  },
  section: {
    margin: 0,
    padding: 5,
  },
});

const CVDocument = ({ name, education, workExperience, referees }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.day}>11.6.2023</Text>
      <View>
        <Image style={{ width: "100px" }} src={cvpic} />
      </View>
      <View style={styles.section}>
        <Text>{name}</Text>
        <Text>Yhteystiedot</Text>
        <Text>Koulutus</Text>
        <Text>{education}</Text>
        <Text>Työkokemus</Text>
        <Text>{workExperience}</Text>
        <Text>Suosittelijat</Text>
        <Text>{referees}</Text>
      </View>
    </Page>
  </Document>
);

function Wizard() {
  const [name, setName] = useState("Etunimi Sukunimi");
  const [education, setEducation] = useState("BSc in Computer Science");
  const [workExperience, setWorkExperience] = useState("Software Developer");
  const [referees, setReferees] = useState("Jane Smith");
  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-screen bg-gray-900 text-white p-4 border-r-4 border-orange-500 p-4 flex flex-col">
          <ul className="space-y-2">
            <li>Teema</li>
            <li>Kieli</li>
          </ul>
          <div className="text-center py-4 mt-auto">
            <PDFViewer>
              <CVDocument {...{ name, education, workExperience, referees }} />
            </PDFViewer>
            <div className="py-2">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
                <PDFDownloadLink
                  document={
                    <CVDocument
                      {...{ name, education, workExperience, referees }}
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
            <p contentEditable onBlur={(e) => setName(e.target.textContent)}>
              {name}
            </p>
            <h2>Yhteystiedot</h2>
            <h2>Yhteenveto</h2>
            <p>Puhelinnumero</p>
            <p>Osoite</p>
            <p>Sähköposti</p>
            <h2>Koulutus</h2>
            <p
              contentEditable
              onBlur={(e) => setEducation(e.target.textContent)}
            >
              {education}
            </p>
            <p className="text-right">2016-2023</p>
            <h2>Työkokemus</h2>
            <p
              contentEditable
              onBlur={(e) => setWorkExperience(e.target.textContent)}
            >
              {workExperience}
            </p>
            <h2>Suosittelijat</h2>
            <p
              contentEditable
              onBlur={(e) => setReferees(e.target.textContent)}
            >
              {referees}
            </p>
            {/* Placeholder for picture */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wizard;
