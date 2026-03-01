import { useEffect, useState } from "react";
import QRCode from "qrcode";
import "../styles/App.css";
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
     <a
  href="https://mike-lalonde.github.io/"
  target="_blank"
  rel="noopener noreferrer"
>
  Mike Lalonde's Tech Portfolio
</a>
      <div className="card-subtitle"></div>

      {dataUrl ? (
        <img className="qr-img" src={dataUrl} alt="Portfolio QR Code" />
      ) : (
        <div className="muted">QR code generating…</div>
      )}

      {/* <div className="muted small">
        Tip: you can screenshot this and put it on business cards or your resume PDF.
      </div> */}
    </div>
  );
}