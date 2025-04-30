const devices = [
  {
    name: "Phone",
    className: "phone-frame",
    width: 375,
    height: 667,
    scale: 1,
  },
  {
    name: "Tablet",
    className: "tablet-frame",
    width: 768,
    height: 1024,
    scale: 0.7,
  },
  {
    name: "Desktop",
    className: "desktop-frame",
    width: 1280,
    height: 800,
    scale: 0.5,
  },
];

const ResponsiveFrames = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-start">
      {devices.map((device) => (
        <div key={device.name} className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium">{device.name}</p>
          <div
            className={`${device.className}`}
            style={{
              transform: `scale(${device.scale})`,
              transformOrigin: "top left",
              width: device.width,
              height: device.height,
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                width: device.width / device.scale,
                height: device.height / device.scale,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveFrames;
