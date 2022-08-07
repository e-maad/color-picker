import "./App.css";
import ColorPicker from "./ColorPicker/ColorPicker";
import ColorPalate from "./ColorPalate/ColorPalate";
import { useState } from "react";
import Drawing from "./Drawing/Drawing";

function App() {
  const [colorPalette, setColorPalate] = useState([
    "#010221",
    "#0A7373",
    "#B7BF99",
    "#EDAA25",
    "#C43302",
  ]);
  return (
    <div className="app">
      <div className="app-section">
        <div className="app-section-header">
          Select color(s) and add to Color Picker
        </div>
        <ColorPalate
          addColorPalate={(colors: string[]) =>
            setColorPalate([...colorPalette, ...colors])
          }
        />
      </div>
      <div className="app-section">
        <div className="app-section-header">Select Color from Color Picker</div>
        <ColorPicker colorPalette={colorPalette} selectedColorFontSize={40} />
      </div>
      <div className="app-section">
        <div className="app-section-header">
          Click in the container to fill with selected color
        </div>
        <Drawing />
      </div>
    </div>
  );
}

export default App;
