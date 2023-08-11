import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Pagination } from "./Pagination";

const PdfViewer = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <>
      <Document
        file={'../public/pitch.pdf'}
        // onLoadSuccess={onDocumentLoadSuccess}
        // onClick={handleClickOpen}
      >
        <Page
          pageNumber={page}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          scale={0.45}
        />
      </Document>
        <Pagination />
    </>
  );
};

export default PdfViewer;
