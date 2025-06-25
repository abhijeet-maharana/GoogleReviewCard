export function QrCode() {
  return (
    <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center shadow-lg">
      {/* QR Code Pattern Simulation */}
      <div className="w-40 h-40 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Simplified QR code pattern using CSS grid */}
          <div className="grid grid-cols-8 gap-px h-full w-full">
            {/* Generate QR-like pattern */}
            {Array.from({ length: 64 }, (_, i) => {
              // Create a pseudo-random pattern based on index
              const isBlack = (i * 7 + i * i * 3) % 3 === 0;
              return (
                <div
                  key={i}
                  className={`${isBlack ? 'bg-black' : 'bg-white'} w-full h-full`}
                />
              );
            })}
          </div>
          
          {/* Corner squares for authentic QR look */}
          <div className="absolute top-1 left-1 w-6 h-6 bg-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
          </div>
          
          <div className="absolute top-1 right-1 w-6 h-6 bg-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
          </div>
          
          <div className="absolute bottom-1 left-1 w-6 h-6 bg-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
