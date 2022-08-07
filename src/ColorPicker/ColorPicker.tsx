import { useState } from "react";
import { invertColor } from "../helper";
import "./ColorPicker.css";

type ColorPickerProps = {
  colorPalette: string[];
  selectedColorFontSize?: number;
};

export default function ColorPicker({
  colorPalette,
  selectedColorFontSize,
}: ColorPickerProps) {
  const [currentColor, setCurrentColor] = useState("#000000");

  const colorClickHandler = async (color: string) => {
    setCurrentColor(color);
    await navigator.clipboard.writeText(color);
  };

  return (
    <div className="color-picker">
      <div
        data-testid="colorpicker-currentColor"
        className="color-picker-current-color-container"
        style={{
          backgroundColor: currentColor,
          color: invertColor(currentColor),
          fontSize: `${selectedColorFontSize}px`,
        }}
      >
        {currentColor}
      </div>
      {colorPalette.map((color) => (
        <div
          key={color}
          data-testid="colorpicker-colorSelector"
          className="color-picker-selector"
          style={{
            backgroundColor: color,
          }}
          onClick={() => colorClickHandler(color)}
        />
      ))}
    </div>
  );
}
