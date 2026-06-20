// Libraries Imports
import { FileText } from "lucide-react";

export default function EmptyStateComp() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 text-center rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
      <div className="flex justify-center mb-4">
        <FileText className="w-12 h-12 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Content Coming Soon
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        This section is currently being updated. Please check back later.
      </p>
    </div>
  );
}
