// Libraries Imports
import { useState, useEffect, type JSX } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
// Local Imports
import { Button } from "@/components/ui/button";
import { projects } from "@/data/content";
import { groupAndPaginate } from "@/helpers/helpers";
import EmptyStateComp from "@/components/empty-state";

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight < docHeight - 50) {
        setVisibleCount((prev) => {
          if (prev >= projects.length) return prev;
          return Math.min(prev + 5, projects.length);
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTechStack = (tech: string | string[]): JSX.Element => {
    const techArray =
      typeof tech === "string" ? tech.split(",").map((t) => t.trim()) : tech;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {techArray.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  const { visibleGroups, sortedKeys } = groupAndPaginate(
    projects,
    "year",
    visibleCount
  );

  return (
    <section
      id="projects"
      className="py-10 bg-linear-to-br from-slate-50 via-white to-blue-50/50"
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Projects
          </h2>
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
                  {visibleGroups[year]?.length} project
                  {visibleGroups[year]?.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-4">
                {visibleGroups[year]?.map((item) => (
                  <div
                    key={item?.id}
                    className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {item?.title}
                        </h3>
                        {item?.description && (
                          <p className="text-gray-600 text-md mb-3">
                            {item?.description}
                          </p>
                        )}
                        {item?.tech && formatTechStack(item?.tech)}
                      </div>
                      <div className="flex flex-row items-center gap-3">
                        {item?.github && (
                          <a
                            href={item?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer bg-gray-800 hover:bg-gray-900 text-white font-medium transition-colors">
                              <Github size={18} /> Code
                            </Button>
                          </a>
                        )}
                        {item?.liveLink && (
                          <a
                            href={item?.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                              <ExternalLink size={18} /> Live Demo
                            </Button>
                          </a>
                        )}
                        {!item?.github && !item?.liveLink && item?.liveLink && (
                          <a
                            href={item?.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                              <ExternalLink size={18} /> View
                            </Button>
                          </a>
                        )}
                      </div>
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
