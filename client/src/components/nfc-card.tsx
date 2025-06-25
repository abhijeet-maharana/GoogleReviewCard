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
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 24.4813C44 22.6891 43.8547 21.2219 43.5281 19.6813H24.4828V28.4594H35.8719C35.4734 30.9688 34.0063 34.2813 30.6938 36.5063L30.6610 36.6954L37.0719 41.6102L37.5156 41.6531C41.5547 37.9375 44 31.7156 44 24.4813Z" fill="#4285F4"/>
                <path d="M24.4829 47C30.8376 47 36.1642 44.9375 40.2033 41.6531L30.6939 36.5063C28.3876 37.9734 25.3501 38.9219 24.4829 38.9219C18.2829 38.9219 13.0329 35.2063 11.0017 30.0594L10.8127 30.0741L4.15608 35.1656L4.08862 35.3453C8.04737 43.1406 15.6767 47 24.4829 47Z" fill="#34A853"/>
                <path d="M11.0016 30.0594C10.2391 27.8344 10.2391 25.4906 11.0016 23.2656V23.0766L4.24849 17.9031L4.08849 17.9813C1.48224 23.1281 1.48224 29.1969 4.08849 34.3438L11.0016 30.0594Z" fill="#FBBC04"/>
                <path d="M24.4829 13.3969C27.8673 13.3969 30.3767 14.7406 32.1689 16.4094L40.8486 7.92188C36.0861 3.51563 29.7314 1 24.4829 1C15.6767 1 8.04737 4.85938 4.08862 12.6547L10.9236 17.0156C13.0329 11.8688 18.2829 8.15313 24.4829 8.15313V13.3969Z" fill="#EA4335"/>
              </svg>
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
