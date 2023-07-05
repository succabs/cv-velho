import React from "react";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  Font,
  View,
} from "@react-pdf/renderer";
import garamond from "../assets/fonts/CormorantGaramond-Regular.ttf"; // Tell webpack this JS file uses this image
import georgia from "../assets/fonts/Georgia.ttf";
import arial from "../assets/fonts/ArialTh.ttf";
import verdana from "../assets/fonts/Verdana.ttf";
import calibri from "../assets/fonts/Calibri.ttf";
Font.register({
  family: "Garamond",
  src: garamond,
});
Font.register({
  family: "Georgia",
  src: georgia,
});
Font.register({
  family: "Arial",
  src: arial,
});

Font.register({
  family: "Verdana",
  src: verdana,
});

Font.register({
  family: "Calibri",
  src: calibri,
});

const CVDocument = ({
  date,
  name,
  address,
  phone,
  email,
  description,
  education,
  eduYears,
  major,
  gpa,
  workExperience,
  workDesc,
  workYears,
  referees,
  refereeMail,
  refereePhone,
  refereeCompany,
  refereeRelationship,
  imageUrl,
  selectedFont,
  selectedLanguage,
}) => {
  let addressLabel = "Osoite: ";
  let phoneLabel = "Puhelinnumero: ";
  let emailLabel = "Sähköposti: ";
  let summaryLabel = "Yhteenveto";
  let educationLabel = "Koulutus";
  let jobLabel = "Työkokemus";
  let refereesLabel = "Suosittelijat";
  if (selectedLanguage === "Ruotsi") {
    addressLabel = "Adress: ";
    phoneLabel = "Telefonnummer: ";
    emailLabel = "E-post: ";
    summaryLabel = "Sammanfattning";
    educationLabel = "Utbildning";
    jobLabel = "Arbetserfarenhet";
    refereesLabel = "Referenser";
  } else if (selectedLanguage === "Englanti") {
    addressLabel = "Address: ";
    phoneLabel = "Phone number: ";
    emailLabel = "Email: ";
    summaryLabel = "Summary";
    educationLabel = "Education";
    jobLabel = "Work Experience";
    refereesLabel = "Referees";
  }
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      fontFamily: selectedFont,
      lineHeight: 1.2,
    },
    date: {
      textAlign: "right",
      paddingRight: 5,
      paddingTop: 5,
    },
    borderYla: {
      flexDirection: "row",
      borderTop: 1,
      paddingTop: 20,
      paddingBottom: 12,
    },
    heading: {
      margin: 0,
      padding: 5,
      fontWeight: "bold",
    },
    infoText: {
      margin: "auto",
      marginLeft: 0,
      fontWeight: "normal",
      fontSize: 11,
      textAlign: "left",
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
      marginTop: 0,
      padding: 5,
      paddingLeft: 0,
      textAlign: "right",
    },
    cvimage: {
      width: 125,
      height: 125,
      padding: 5,
      marginTop: 20,
      marginBottom: 10,
      marginLeft: 10,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, maxWidth: "25%", alignItems: "left" }}>
            <Image style={styles.cvimage} src={imageUrl} />
          </View>
          <View style={{ flex: 2, marginTop: 20 }}>
            <Text style={styles.sectionHeading}>{name}</Text>
            <Text style={styles.sectionText}>
              {addressLabel} {address}
            </Text>
            <Text style={styles.sectionText}>
              {phoneLabel} {phone}
            </Text>
            <Text style={styles.sectionText}>
              {emailLabel}
              {email}
            </Text>
          </View>
          <View style={styles.date}>
            <Text>{date}</Text>
          </View>
        </View>
        {/* Summary */}
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>{summaryLabel}</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.infoText}>{description}</Text>
          </View>
        </View>
        {/* Education */}
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>{educationLabel}</Text>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionHeading}>{education}</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.sectionDate}>{eduYears}</Text>
              </View>
            </View>
            <Text style={styles.sectionText}>{major}</Text>
            <Text style={styles.sectionText}>{gpa}</Text>
          </View>
        </View>
        {/* Job */}
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>{jobLabel}</Text>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sectionHeading}>{workExperience}</Text>
              </View>
              <View style={{ flex: 2 }}>
                <Text style={styles.sectionDate}>{workYears}</Text>
              </View>
            </View>
            <Text style={styles.sectionText}>{workDesc}</Text>
          </View>
        </View>
        {/* Referees */}
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>{refereesLabel}</Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.sectionHeading}>{referees}</Text>
            <Text style={styles.sectionText}>{refereeCompany}</Text>
            <Text style={styles.sectionText}>{refereeRelationship}</Text>
            <Text style={styles.sectionText}>{refereeMail}</Text>
            <Text style={styles.sectionText}>{refereePhone}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CVDocument;
