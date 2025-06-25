import { GoogleLogo } from "./google-logo";
import { QrCode } from "./qr-code";

interface NfcCardProps {
  isFlipped: boolean;
}

export function NfcCard({ isFlipped }: NfcCardProps) {
  return (
    <div className={`card-3d w-80 h-[500px] mx-auto ${isFlipped ? 'card-flipped' : ''}`}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front bg-black text-white flex flex-col items-center justify-center p-8 shadow-2xl relative">
          {/* NFC Symbol */}
          <div className="absolute top-4 right-4">
            <i className="fas fa-wifi text-white text-xl nfc-pulse transform rotate-45"></i>
          </div>
          
          {/* Google Logo */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-5xl font-bold google-g">G</span>
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
            Powered by ABC RFID
          </div>
        </div>
        
        {/* Back Side */}
        <div className="card-back bg-black text-white flex flex-col items-center justify-center p-8 shadow-2xl relative">
          {/* Mobile NFC Icon */}
          <div className="mb-6">
            <div className="relative">
              <i className="fas fa-mobile-alt text-white text-4xl"></i>
              <div className="absolute -top-2 -right-2">
                <i className="fas fa-wifi text-white text-lg nfc-pulse transform rotate-45"></i>
              </div>
            </div>
          </div>
          
          {/* QR Code */}
          <div className="mb-6">
            <QrCode />
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
            Powered by ABC RFID
          </div>
        </div>
      </div>
    </div>
  );
}
