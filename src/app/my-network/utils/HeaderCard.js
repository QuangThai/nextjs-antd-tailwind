import React from "react";

function HeaderCard({ title = "My Network", desc }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "600",
          color: "var(--color-primary-text)",
        }}
      >
        {title}
      </div>
      {desc && (
        <div
          style={{
            fontSize: "14px",
            color: "var(--color-secondary-text)",
          }}
        >
          {desc}
        </div>
      )}
    </div>
  );
}

export default HeaderCard;
