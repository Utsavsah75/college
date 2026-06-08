import Link from "next/link";
import * as HeroIcons from "@heroicons/react/24/outline";

export default function NotFoundPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-start gap-12 py-16">

        <div className="flex-1 flex flex-col items-start text-center lg:text-left">
          <h1 className="text-6xl font-extrabold text-secondary-blue mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-lg mb-6">
            We couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="px-6 py-3 bg-primary-pink text-white font-semibold rounded-lg  hover:bg-primary-pink-500 hover:text-primary-pink border border-primary-pink duration-200 text-center"
            >
              Go Back Home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-primary-pink text-primary-pink font-semibold rounded-lg hover:bg-primary-pink hover:text-white transition-colors duration-200 text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end">
          <HeroIcons.ExclamationTriangleIcon className="w-48 h-48 text-primary-pink opacity-20 " />
        </div>

      </div>
    </div>
  );
}
