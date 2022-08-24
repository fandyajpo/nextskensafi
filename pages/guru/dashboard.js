import React, { useRef } from "react";
import { getLayout } from "components/layout/guru";
import PropTypes from "prop-types";
import PDFViewer, { propTypes } from "pdf-viewer-reactjs";

const Dashboard = (props) => {
  const [page, setPage] = React.useState(1);
  const pdfRef = React.useRef(null);

  PropTypes.shape({
    url: String, // URL to the pdf

    base64: String, // PDF file encoded in base64
  });

  React.useEffect(() => {
    console.log(pdfRef.current);
  });

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4 items-center justify-center">
        <PDFViewer
          ref={pdfRef}
          navbarOnTop={true}
          page={page}
          onNextBtnClick={() => pdfRef.current.handleNextClick}
          loader={
            <div className="bg-transparent w-44 h-44 animate-spin rounded-full border-l-2 border-blue-500" />
          }
          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
          }}
          scale={1}
        />
        {/* <button onClick={() => pdfRef.current.handleNextClick}>Next</button> */}
      </div>
    </div>
  );
};

Dashboard.getLayout = getLayout;
export default Dashboard;
