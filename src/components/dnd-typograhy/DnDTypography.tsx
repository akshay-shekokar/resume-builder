import React, { useState } from "react";

interface TopLeftPosition {
  top: number;
  left: number;
}

const DnDTypography = () => {
  const [key] = useState(Date.now());
  const [position, setPosition] = useState<TopLeftPosition>({
    top: 0,
    left: 0,
  });
  const [clientPosition, setClientPosition] = useState<TopLeftPosition>({
    top: 0,
    left: 0,
  });

  return (
    <h2
      key={key}
      style={{ position: "absolute", top: position.top, left: position.left }}
      draggable
      onDragStart={(e) => {
        setClientPosition({ left: e.clientX, top: e.clientY });
      }}
      onDragEnd={(e) => {
        const clientRect = e.currentTarget.getBoundingClientRect();
        const leftPos = clientRect.left + e.clientX - clientPosition.left - 17;
        const topPos = clientRect.top + e.clientY - clientPosition.top - 89;
        setPosition({
          left: leftPos > 0 ? leftPos : 0,
          top: topPos > 0 ? topPos : 0
        });
      }}
    >
      Heading
    </h2>
  );
};

export default DnDTypography;
