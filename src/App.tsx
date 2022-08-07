import "./App.css";
import ColorPicker from "./ColorPicker";

function App() {
  const colorPalette = ["#010221", "#0A7373", "#B7BF99", "#EDAA25", "#C43302"];

  return (
    <div className="app">
      <div className="app-content">
        <ColorPicker colorPalette={colorPalette} selectedColorFontSize={40} />
      </div>
    </div>
  );
}

export default App;
