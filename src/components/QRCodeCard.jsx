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
      <div className="card-qr-card">
        {dataUrl ? (
            <img className="qr-img" src={dataUrl} alt="Portfolio QR Code" />
          ) : (
              <div className="muted">QR code generating…</div>
            )}
            <a
                href="https://mike-lalonde.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mike Lalonde's Tech Portfolio
            </a>
          </div>
        );
      }