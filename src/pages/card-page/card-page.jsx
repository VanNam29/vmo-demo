// import React from "react";

import { useEffect } from "react";
import { Card } from "../../modules/card/card";

export function CardPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="">
      <div className="parallax-card relative opacity-60">
        <div className="w-full h-12 pt-16">
          <p className="text-white text-3xl font-sans">
            <strong>YOUR CARD</strong>
          </p>
        </div>
      </div>

      <div className="w-2/3 m-auto">
        <Card />
      </div>
    </div>
  );
}
