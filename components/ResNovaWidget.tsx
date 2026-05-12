"use client";

import { useEffect, useRef } from "react";

const SCRIPT_SRC = "https://resnova.resrequest.com/widget/js/app.js";

interface Props {
  widgetId: string;
}

export default function ResNovaWidget({ widgetId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create the custom element and add it to the DOM
    const widget = document.createElement("rr-resnova");
    widget.setAttribute("widget-id", widgetId);
    widget.setAttribute("api-url", "https://resnova.resrequest.com/api/");
    container.appendChild(widget);

    // Load the script once across the whole page
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [widgetId]);

  return <div ref={containerRef} className="w-full" />;
}
