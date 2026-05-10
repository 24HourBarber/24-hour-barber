"use client";

import { useEffect } from "react";

export default function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/24hourbarber",
      });
    }
  };

  return (
    <button
      type="button"
      className="button button-outline button-full"
      onClick={openCalendly}
    >
      Schedule Consultation
    </button>
  );
}
