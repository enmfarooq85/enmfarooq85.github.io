export default function CVPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad-Farooq-Resume.pdf";
    link.download = "Muhammad-Farooq-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-screen">
      {/* Desktop View (PDF Preview) */}
      <div className="hidden md:block h-full">
        <iframe
          src="/Muhammad-Farooq-Resume.pdf"
          title="CV"
          width="100%"
          height="100%"
          className="border-none"
        />
      </div>

      {/* Mobile View (Download Button) */}
      <div className="flex md:hidden items-center justify-center h-full flex-col gap-4 p-4">
        <p className="text-center text-gray-600">
          Your CV preview is not supported on mobile.
        </p>

        <button
          onClick={handleDownload}
          className="px-5 py-2 bg-black text-white rounded-lg shadow-md active:scale-95 transition"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}