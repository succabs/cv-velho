import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";

const PreviewSection = ({
  date,
  name,
  address,
  phone,
  email,
  description,
  setDescription,
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
}) => {
  return (
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
          selectedFont={selectedFont}
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
                selectedFont={selectedFont}
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
  );
};

export default PreviewSection;
