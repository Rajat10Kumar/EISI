import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PDF from '../assets/EISI.pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Certificates = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <div style={{margin:"200px 450px"}}>
            <Document
        file={PDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="text-center">Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default Certificates;
