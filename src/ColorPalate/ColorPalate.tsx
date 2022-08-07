import { useState } from "react";
import { getRandomColor, invertColor } from "../helper";
import "./ColorPalate.css";

let colors = Array(25)
  .fill(0)
  .map(() => getRandomColor());

interface Props {
  addColorPalate: (colors: string[]) => void;
}

export default function ColorPalate({ addColorPalate }: Props) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const colorClickHandler = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((clr) => clr !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const buttonClickHandler = () => {
    addColorPalate(selectedColors);
    setSelectedColors([]);
    colors = colors.map(() => getRandomColor());
  };

  return (
    <div className="color-palate">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-palate-color ${
            selectedColors.includes(color) && "selected"
          }`}
          style={{ backgroundColor: color }}
          onClick={() => colorClickHandler(color)}
        >
          {selectedColors.includes(color) && (
            <div style={{ color: invertColor(color) }}>✓</div>
          )}
        </div>
      ))}
      <button
        disabled={selectedColors.length === 0}
        className="color-palate-btn"
        onClick={buttonClickHandler}
      >
        Add {selectedColors.length > 1 ? "colors" : "color"} to color selector
        &rarr;
      </button>
    </div>
  );
}
