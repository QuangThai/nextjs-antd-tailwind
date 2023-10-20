import { Avatar, AvatarProps } from "antd";
import React from "react";

export interface AvatarCustomProps extends AvatarProps {
  level?: number;
}

function AvatarCustom(props: AvatarCustomProps) {
  const { level, ...rest } = props;
  return (
    <div style={{ position: "relative" }}>
      <Avatar {...rest} />
      {level && (
        <span
          style={{
            position: "absolute",
            left: "50%",
            bottom: -2,
            transform: "translateX(-50%)",
            display: "inline-block",
            background: "var(--color-primary)",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 700,
            borderRadius: 4,
            lineHeight: 1,
            padding: 1,
          }}
        >
          {`Lv:${level}`}
        </span>
      )}
    </div>
  );
}

export default AvatarCustom;
