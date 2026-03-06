// Libraries Imports
import { useState, useEffect, type JSX } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
// Local Imports
import { experiences } from "@/data/content";
import { groupAndPaginate } from "@/helpers/helpers";
import EmptyStateComp from "@/components/empty-state";
import { Button } from "@/components/ui/button";

export default function ExperienceSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= experiences.length) return prev;
          return Math.min(prev + 5, experiences.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatSkills = (skills: string | string[]): JSX.Element => {
    const skillsArray =
      typeof skills === "string"
        ? skills.split(",").map((s) => s.trim())
        : skills;

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {skillsArray.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    experiences,
    "year",
    visibleCount
  );

  return (
    <section id="experience" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {sortedKeys.length === 0 && <EmptyStateComp />}
          {sortedKeys?.map((year) => (
            <div key={year} className="space-y-2">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                <div className="flex-1 h-px bg-gray-300 ml-4" />
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {visibleGroups[year]?.length} position
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid gap-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item?.title}
                          </h3>
                          {item?.type && (
                            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200">
                              {item.type}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
                          {item?.location && (
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {item.location}
                            </span>
                          )}
                          {item?.duration && <span>{item.duration}</span>}
                        </div>
                        {item?.description && (
                          <p className="text-gray-600 text-md leading-relaxed mb-3">
                            {item.description}
                          </p>
                        )}
                        {item?.skills && formatSkills(item.skills)}
                      </div>
                      {item?.organizationLink && (
                        <a
                          href={item?.organizationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                            <ExternalLink size={18} /> Link
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
