import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NfcCard } from "@/components/nfc-card";
import { Download, CheckCircle, Link as LinkIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import html2canvas from "html2canvas";

export default function Home() {
  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const { toast } = useToast();

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to generate the QR code.",
        variant: "destructive",
      });
      return;
    }

    // Add https:// if no protocol specified
    let processedUrl = url.trim();
    if (!processedUrl.startsWith('http://') && !processedUrl.startsWith('https://')) {
      processedUrl = 'https://' + processedUrl;
    }

    setGeneratedUrl(processedUrl);
    toast({
      title: "QR Code Generated",
      description: "Your NFC cards are ready! You can now download them.",
    });
  };

  const handleDownload = async () => {
    if (!generatedUrl) {
      toast({
        title: "Generate Cards First",
        description: "Please enter a URL and generate the cards before downloading.",
        variant: "destructive",
      });
      return;
    }

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
        
        {/* URL Input Form */}
        <Card className="shadow-lg max-w-2xl mx-auto mb-8">
          <CardContent className="p-6">
            <form onSubmit={handleUrlSubmit} className="space-y-4">
              <div>
                <Label htmlFor="url" className="text-sm font-medium text-gray-700">
                  Google Review URL or Business URL
                </Label>
                <div className="flex gap-2 mt-2">
                  <div className="relative flex-1">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="url"
                      type="url"
                      placeholder="Enter your Google Business review URL..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                    Generate Cards
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Example: https://g.page/r/YourBusinessReviewLink or your business URL
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Card Container */}
        {generatedUrl && (
          <div className="mb-8">
            <NfcCard frontRef={frontCardRef} backRef={backCardRef} url={generatedUrl} />
          </div>
        )}
        
        {/* Controls */}
        {generatedUrl && (
          <div className="flex justify-center mb-8">
            <Button 
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Both Sides
            </Button>
          </div>
        )}
        
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
                <span>Real QR code generated from your URL</span>
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
