import { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import  './TicketPreview.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const TicketPreview: FC = () => {
    return (
        <div className="preview-container">
            <Document file={'./ticket.pdf'} >
                <Page
                    key={1}
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    scale={1.5}
                />
            </Document>
        </div>
    );
};