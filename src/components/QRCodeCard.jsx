import { useEffect, useState } from "react";
import QRCode from "qrcode";

export default function QRCodeCard({ url }) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    let mounted = true;
    QRCode.toDataURL(url, { margin: 1, scale: 6 })
      .then((png) => mounted && setDataUrl(png))
      .catch(() => mounted && setDataUrl(""));
    return () => {
      mounted = false;
    };
  }, [url]);

  return (
    <div className="card qr-card">
      <div className="card-title">Scan to view my portfolio</div>
      <div className="card-subtitle">{url}</div>

      {dataUrl ? (
        <img className="qr-img" src={dataUrl} alt="Portfolio QR Code" />
      ) : (
        <div className="muted">QR code generating…</div>
      )}

      <div className="muted small">
        Tip: you can screenshot this and put it on business cards or your resume PDF.
      </div>
    </div>
  );
}