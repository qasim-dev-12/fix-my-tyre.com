"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError =
      /ChunkLoadError|Loading chunk|Importing a module|failed to fetch dynamically imported module/i.test(
        error?.message || "",
      );

    if (isChunkError && !sessionStorage.getItem("chunk-reload")) {
      sessionStorage.setItem("chunk-reload", "1");
      window.location.reload();
      return;
    }

    sessionStorage.removeItem("chunk-reload");
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p>Please try again.</p>
          <button
            onClick={() => reset()}
            className="rounded-md bg-primary px-6 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
