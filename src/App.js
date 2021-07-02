import "./styles.css";
import Headers from "./Heading/Headers";
import { useEffect, useState } from "react";

export default function App() {
  window.addEventListener("online", function (e) {
    console.log("offline");
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <Headers
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}
