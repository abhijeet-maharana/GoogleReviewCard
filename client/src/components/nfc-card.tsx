import { GoogleLogo } from "./google-logo";
import { QrCode } from "./qr-code";

interface NfcCardProps {
  frontRef?: React.RefObject<HTMLDivElement>;
  backRef?: React.RefObject<HTMLDivElement>;
  url?: string;
}

export function NfcCard({ frontRef, backRef, url = "" }: NfcCardProps) {
  return (
    <div className="flex gap-8 justify-center items-start">
      {/* Front Side */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Front Side</h3>
        <div 
          ref={frontRef}
          className="w-80 h-[500px] bg-black text-white flex flex-col items-center justify-center p-8 shadow-2xl relative rounded-[20px]"
        >
          {/* NFC Symbol */}
          <div className="absolute top-4 right-4">
            <i className="fas fa-wifi text-white text-xl transform rotate-45"></i>
          </div>
          
          {/* Google Logo */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img 
                src="/attached_assets/Google__G__logo.svg_1750884458836.webp" 
                alt="Google G Logo" 
                width="56" 
                height="56"
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Review Text */}
          <div className="text-center mb-6">
            <h2 className="text-lg font-normal text-gray-300 mb-2">Review us on</h2>
            <GoogleLogo size="large" />
          </div>
          
          {/* Star Rating */}
          <div className="flex space-x-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <i key={star} className="fas fa-star text-golden text-2xl"></i>
            ))}
          </div>
          
          {/* Branding */}
          <div className="absolute bottom-4 text-gray-500 text-sm">
            Powered by Abtara.com
          </div>
        </div>
      </div>
      
      {/* Back Side */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Back Side</h3>
        <div 
          ref={backRef}
          className="w-80 h-[500px] bg-black text-white flex flex-col items-center justify-center p-8 shadow-2xl relative rounded-[20px]"
        >
          {/* QR Code */}
          <div className="mb-6">
            <QrCode url={url} />
          </div>
          
          {/* Star Rating */}
          <div className="flex space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <i key={star} className="fas fa-star text-golden text-xl"></i>
            ))}
          </div>
          
          {/* Instructions */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-300 mb-2">Tap or Scan to review us on</p>
            <GoogleLogo size="medium" />
          </div>
          
          {/* Branding */}
          <div className="absolute bottom-4 text-gray-500 text-sm">
            Powered by Abtara.com
          </div>
        </div>
      </div>
    </div>
  );
}
