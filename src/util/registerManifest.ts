// Manifest Template for settingUp PWA in React
const registerManifest = () => {
  const link = document.createElement("link");
  link.rel = "manifest";
  link.href = "/manifest.json";
  document.head.appendChild(link);

  return () => {
    document.head.removeChild(link);
  };
};

export default registerManifest;
