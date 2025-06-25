import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QrCodeProps {
  url: string;
}

export function QrCode({ url }: QrCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && url) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 192,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    }
  }, [url]);

  if (!url) {
    return (
      <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center shadow-lg">
        <div className="text-gray-400 text-center">
          <p className="text-sm">Enter URL to</p>
          <p className="text-sm">generate QR code</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center shadow-lg p-2">
      <canvas ref={canvasRef} className="max-w-full max-h-full" />
    </div>
  );
}
