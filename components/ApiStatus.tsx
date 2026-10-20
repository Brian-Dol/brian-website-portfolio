"use client";

import { useEffect, useState } from "react";

type ApiState = "checking" | "online" | "offline";

function isHealthyResponse(value: unknown): value is { status: "ok" } {
  return (
    typeof value === "object" &&
    value !== null &&
    "status" in value &&
    value.status === "ok"
  );
}

export default function ApiStatus() {
  const [status, setStatus] = useState<ApiState>("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/health", { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Health endpoint returned ${response.status}`);
        }
        return response.json();
      })
      .then((result: unknown) => {
        setStatus(isHealthyResponse(result) ? "online" : "offline");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        console.error("Portfolio health check failed:", error);
        setStatus("offline");
      });

    return () => controller.abort();
  }, []);

  const label = {
    checking: "CHECKING API",
    online: "API ONLINE",
    offline: "API UNAVAILABLE",
  }[status];

  return (
    <p className={`api-status api-status-${status}`} aria-live="polite">
      <span className="api-status-dot" aria-hidden="true" />
      {label} · NEXT.JS ROUTE HANDLER
    </p>
  );
}
