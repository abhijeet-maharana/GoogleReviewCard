import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NfcCard } from "@/components/nfc-card";
import { Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";

export default function Home() {
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!frontCardRef.current || !backCardRef.current) {
      toast({
        title: "Error",
        description: "Card elements not found. Please try again.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Generate front side image
      const frontCanvas = await html2canvas(frontCardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      // Generate back side image
      const backCanvas = await html2canvas(backCardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      // Download front side
      const frontLink = document.createElement("a");
      frontLink.download = "nfc-card-front.png";
      frontLink.href = frontCanvas.toDataURL();
      frontLink.click();

      // Download back side
      const backLink = document.createElement("a");
      backLink.download = "nfc-card-back.png";
      backLink.href = backCanvas.toDataURL();
      backLink.click();

      toast({
        title: "Download Complete",
        description: "Both card sides have been downloaded successfully. You can now print them on PVC cards.",
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download Failed",
        description: "There was an error generating the card images. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">NFC Google Review Card Generator</h1>
          <p className="text-gray-600">Professional cards for collecting customer reviews</p>
        </div>
        
        {/* Card Container */}
        <div className="mb-8">
          <NfcCard frontRef={frontCardRef} backRef={backCardRef} />
        </div>
        
        {/* Controls */}
        <div className="flex justify-center mb-8">
          <Button 
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Both Sides
          </Button>
        </div>
        
        {/* Features List */}
        <Card className="shadow-lg max-w-2xl mx-auto">
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
                <span>Print-ready PNG files for PVC card production</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>High-resolution output for professional printing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
