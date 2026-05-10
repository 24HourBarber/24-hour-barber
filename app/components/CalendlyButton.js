"use client";

import { useEffect, useState } from "react";

export default function CalendlyButton() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.Calendly) {
      setIsReady(true);
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => setIsReady(true));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsReady(true);
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    if (!window.Calendly) {
      window.open("https://calendly.com/24hourbarber", "_blank");
      return;
    }

    window.Calendly.initPopupWidget({
      url: "https://calendly.com/24hourbarber",
    });
  };

  return (
    <button
      type="button"
      className="button button-outline button-full"
      onClick={openCalendly}
    >
      {isReady ? "Schedule Consultation" : "Open Scheduling"}
    </button>
  );
}
