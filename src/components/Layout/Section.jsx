import React from "react";

export default function Section({ id, children, spacing = "h-0" }) {
  return (
    <section id={id} className="scroll-mt-16">
      {spacing && <div className={spacing}></div>}
      {children}
    </section>
  );
}
