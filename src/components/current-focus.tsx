// Libraries Imports
import { type JSX } from "react";
// Local Imports
import { currentFocus } from "@/data/content";
import EmptyStateComp from "@/components/empty-state";

export default function CurrentFocusSection() {
  const formatTopics = (topics: string | string[]): JSX.Element => {
    const topicsArray =
      typeof topics === "string"
        ? topics.split(",").map((t) => t.trim())
        : topics;

    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {topicsArray.map((item, index) => (
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
    <section
      id="current-focus"
      className="py-10 bg-linear-to-br from-slate-50 via-white to-blue-50/50"
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left lg:text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Current Focus
            </h2>
          </div>
        </div>
        <div className="space-y-6">
          {currentFocus.length === 0 ? (
            <EmptyStateComp />
          ) : (
            <div className="grid gap-6">
              {currentFocus.map((item) => (
                <div
                  key={item?.id}
                  className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item?.title}
                        </h3>
                      </div>
                    </div>
                    {item?.description && (
                      <p className="text-gray-600 text-md leading-relaxed grow">
                        {item?.description}
                      </p>
                    )}
                    {item?.topics && formatTopics(item?.topics)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
