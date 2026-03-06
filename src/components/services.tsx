// Libraries Imports
import { type JSX } from "react";
import { Globe, Server, Smartphone, Palette } from "lucide-react";
// Local Imports
import { services } from "@/data/content";
import EmptyStateComp from "@/components/empty-state";

const serviceIcons: Record<string, JSX.Element> = {
  Frontend: <Palette className="w-5 h-5" />,
  "Full Stack": <Globe className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Mobile: <Smartphone className="w-5 h-5" />,
};

const serviceColors: Record<string, string> = {
  Frontend: "bg-blue-100 text-blue-700 border-blue-200",
  "Full Stack": "bg-green-100 text-green-700 border-green-200",
  Backend: "bg-purple-100 text-purple-700 border-purple-200",
  Mobile: "bg-orange-100 text-orange-700 border-orange-200",
};

export default function ServicesSection() {
  const getIconForService = (type: string) => {
    return serviceIcons[type] || serviceIcons.default;
  };

  const getColorForService = (type: string) => {
    return serviceColors[type] || serviceColors.default;
  };

  const formatTechStack = (tech: string | string[]): JSX.Element => {
    const techArray =
      typeof tech === "string" ? tech.split(",").map((t) => t.trim()) : tech;

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {techArray.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="services" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Services
          </h2>
        </div>
        <div className="space-y-6">
          {services.length === 0 ? (
            <EmptyStateComp />
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((item) => (
                <div
                  key={item?.id}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${getColorForService(item?.type)}`}
                    >
                      {getIconForService(item?.type)}
                      {item?.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item?.title}
                  </h3>
                  {item?.description && (
                    <p className="text-gray-600 text-md leading-relaxed">
                      {item?.description}
                    </p>
                  )}

                  {item?.tech && formatTechStack(item?.tech)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
