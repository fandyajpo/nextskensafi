import React from "react";
import { getLayout } from "components/layout/guru";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import PDFViewer from "pdf-viewer-reactjs";

const Dashboard = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [state, setState] = React.useState("kanjc.pdf");

  const onDocumentLoad = async (e) => await setState(e);

  return (
    <div className="w-full h-screen overflow-y-scroll">
      <div className="w-full h-auto relative px-4 pt-4 flex flex-col md:flex-row gap-4">
        <PDFViewer
          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
          }}
        />
        {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer
            onDocumentLoad={onDocumentLoad("http://localhost/pdf/da.pdf")}
            fileUrl={state}
            plugins={[defaultLayoutPluginInstance]}npm i pdf-viewer-reactjs
          />
        </Worker> */}
      </div>
    </div>
  );
};

Dashboard.getLayout = getLayout;
export default Dashboard;
