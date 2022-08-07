import { useState } from "react";
import { invertColor, isValidColor } from "../helper";
import "./Drawing.css";

export default function Drawing() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000");

  const handleClick = async () => {
    const copiedColor = await navigator.clipboard.readText();
    if (isValidColor(copiedColor)) {
      setBackgroundColor(copiedColor);
    }
  };

  return (
    <div
      className="drawing"
      style={{ backgroundColor, color: invertColor(backgroundColor) }}
      onClick={handleClick}
    >
      Click here to fill the color
    </div>
  );
}
