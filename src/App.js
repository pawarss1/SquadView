import "./styles.css";
import Headers from "./Headers";
import { useEffect } from "react";

export default function App() {
  window.addEventListener("online", function (e) {
    console.log("offline");
  });
  return (
    <div>
      <Headers />
    </div>
  );
}
