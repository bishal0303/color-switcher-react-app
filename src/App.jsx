import { useState } from "react";
import Button from "./components/Button";

function App() {
const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "pink",
  "teal",
  "cyan",
  "indigo",
  "violet",
  "magenta",
  "lime",
  "crimson",
  "darkgreen",
  "royalblue",
  "darkorange",
  "purple",
  "deeppink",
  "teal",
  "darkcyan",
  "indigo",
  "blueviolet",
  "mediumvioletred",
  "limegreen",
  "darkgoldenrod",
  "seagreen",
  "dodgerblue",
  "orangered",
  "slateblue",
  "dimgray",
  "maroon",
  "chocolate",
  "cornflowerblue",
  "gray"
];

  const [bgColor, setBgColor] = useState("red");
  return (
    <div
      className="flex min-h-dvh w-full flex-col items-center justify-center gap-6 px-4 py-8"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-center text-2xl font-bold capitalize sm:text-3xl md:text-4xl">
        color "{bgColor}"
      </h1>

      {/* color button */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
        {colors.map((items, index) => (
          <Button key={index} color={items} bgClr={setBgColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
