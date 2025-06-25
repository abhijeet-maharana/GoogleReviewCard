import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NfcCard } from "@/components/nfc-card";
import { Download, RotateCcw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toast } = useToast();

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDownload = () => {
    toast({
      title: "Download Feature",
      description: "Download functionality would generate PDF/PNG files of the card design for printing.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md mx-auto w-full">
        {/* Card Container */}
        <div className="mb-8">
          <NfcCard isFlipped={isFlipped} />
        </div>
        
        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          <Button 
            onClick={handleFlipCard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Flip Card
          </Button>
          <Button 
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
        
        {/* Features List */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Card Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>NFC-enabled for tap-to-review functionality</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>QR code for universal device compatibility</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Professional Google-branded design</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Durable, sleek black finish with rounded corners</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Dual-sided functionality for maximum impact</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
