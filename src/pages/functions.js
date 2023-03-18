import React from 'react';

function DownloadButton() {
    // Enlace de descarga directa del archivo PDF
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=XXXXXXXXXXXXX';

    const handleDownload = () => {
        // Crear un enlace temporal y hacer clic en él para descargar el archivo
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'mi-cv.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700" onClick={handleDownload}>
            Descargar CV
        </button>
    );
}

export default DownloadButton;