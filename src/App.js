import "./styles.css";
import Headers from "./Heading/Headers";
import { useEffect, useState } from "react";
import PlanRow from "./Body/PlanRow";

export default function App() {
  // window.addEventListener("online", function (e) {
  //   console.log("offline");
  // });
  const [selectedIndex, setSelectedIndex] = useState(2);

  useEffect(() => {
    const persistentSelectedIndex = +localStorage.getItem("selectedIndex");
    if (persistentSelectedIndex) {
      setSelectedIndex(persistentSelectedIndex);
    } else {
      setSelectedIndex(2);
    }
  }, []);

  return (
    <div>
      <Headers
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <PlanRow selectedIndex={selectedIndex} />
    </div>
  );
}
