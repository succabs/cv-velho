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

Font.register({
  family: "Garamond",
  src: garamond,
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
}) => {
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
      width: 100,
      padding: 5,
      marginBottom: 10,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.date}>
          <Text>{date}</Text>
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
            <Text style={styles.infoText}>{description}</Text>
          </View>
        </View>
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Koulutus</Text>
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
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Työkokemus</Text>
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
        <View style={styles.borderYla}>
          <View style={{ flex: 1, maxWidth: "25%" }}>
            <Text style={styles.heading}>Suosittelijat</Text>
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
