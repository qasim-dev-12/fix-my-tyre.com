"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("Route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="max-w-full overflow-x-auto whitespace-pre-wrap break-words text-left text-sm text-red-600">
        {error?.message}
        {error?.stack ? `\n\n${error.stack}` : ""}
        {error?.digest ? `\n\ndigest: ${error.digest}` : ""}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-6 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
