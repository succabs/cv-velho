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
  educationEntries,
  workExperienceEntries,
  refereesEntries,
  imageUrl,
  selectedFont,
  selectedLanguage,
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
          educationEntries={educationEntries}
          workExperienceEntries={workExperienceEntries}
          refereesEntries={refereesEntries}
          imageUrl={imageUrl}
          selectedFont={selectedFont}
          selectedLanguage={selectedLanguage}
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
                educationEntries={educationEntries}
                workExperienceEntries={workExperienceEntries}
                refereesEntries={refereesEntries}
                imageUrl={imageUrl}
                selectedFont={selectedFont}
                selectedLanguage={selectedLanguage}
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
