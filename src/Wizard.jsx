import "./App.css";
import React, { useState } from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  View,
  Page,
  Text,
  Document,
  StyleSheet,
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
      <View style={styles.section}>
        <Text>{name}</Text>
        <Text>{education}</Text>

        <Text>{workExperience}</Text>
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
        <div className="w-1/4 bg-gray-900 text-white p-4 border-r-4 border-orange-500">
          <ul className="space-y-2">
            <li>Theme</li>
            <li>Language</li>
          </ul>
          <PDFDownloadLink
            document={
              <CVDocument {...{ name, education, workExperience, referees }} />
            }
            fileName="cv.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Generating PDF..." : "Export as PDF"
            }
          </PDFDownloadLink>
        </div>
        {/* CV Section */}
        <div id="cv-section" className="w-3/4 p-4">
          {/* CV content */}
          <div className="p-4">
            {/* Editable text fields */}
            <h2
              className="text-white"
              contentEditable
              onBlur={(e) => setName(e.target.textContent)}
            >
              {name}
            </h2>
            <p
              className="text-white"
              contentEditable
              onBlur={(e) => setEducation(e.target.textContent)}
            >
              {education}
            </p>
            <p
              className="text-white"
              contentEditable
              onBlur={(e) => setWorkExperience(e.target.textContent)}
            >
              {workExperience}
            </p>
            <p
              className="text-white"
              contentEditable
              onBlur={(e) => setReferees(e.target.textContent)}
            >
              {referees}
            </p>
            {/* Placeholder for picture */}
          </div>
          <PDFViewer>
            <CVDocument {...{ name, education, workExperience, referees }} />
          </PDFViewer>
        </div>
      </div>
    </>
  );
}

export default Wizard;
