export default function CVPage() {
  return (
    <div className="w-full h-screen">
      <div className="hidden md:block h-full">
        <iframe
          src="/Muhammad-Farooq-Resume.pdf"
          title="CV"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex md:hidden items-center justify-center h-full flex-col gap-4 p-4">
        <p className="text-center text-gray-600">
          Your CV preview is not supported on mobile.
        </p>
        <a
          href="/Muhammad-Farooq-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
