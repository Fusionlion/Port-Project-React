import React from "react";
import { saveAs } from "file-saver";
import styled from "styled-components";

const DownloadButton = () => {
  const handleDownload = () => {
    // Replace 'your_pdf_url.pdf' with the actual URL of your PDF file
    const pdfUrl = "/images/my-svg/Zablon-Charles-@24n.pdf";

    // Use FileSaver.js to download the PDF file
    saveAs(pdfUrl, "Zablon-Charles-@24n.pdf");
  };

  return <ButtonCustom onClick={handleDownload}>Download PDF</ButtonCustom>;
};

export default DownloadButton;

const ButtonCustom = styled.button`
  // Your styles here
  background-color: rgb(251 250 250);
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.isDarkMode ? "#272424" : "#141414")};
  cursor: pointer;
  margin-top: 10px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
