import "./styles.css";
import Headers from "./Heading/Headers";
import { useEffect, useState } from "react";
import PlanRow from "./Body/PlanRow";
import NoInternetComponent from "./Utils/NoInternetComponent";

export default function App() {
  const [noActiveInternet, setNoActiveInternet] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(2);

  const handleInternetIssue = (event) => {
    event.type === "offline"
      ? setNoActiveInternet(true)
      : setNoActiveInternet(false);
  };

  useEffect(() => {
    window.addEventListener("offline", handleInternetIssue);
    window.addEventListener("online", handleInternetIssue);

    let persistentSelectedIndex = localStorage.getItem("selectedIndex");
    if (persistentSelectedIndex) {
      setSelectedIndex(+persistentSelectedIndex);
    } else {
      // By default the selected average home value should be $300K - $400K, whose index in the config file is 2
      setSelectedIndex(2);
    }
    return () => {
      window.removeEventListener("offline", handleInternetIssue);
      window.removeEventListener("online", handleInternetIssue);
    };
  }, []);

  return (
    <div>
      {noActiveInternet === true ? (
        <NoInternetComponent text="You are not connected to internet!" />
      ) : (
        <>
          <Headers
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <PlanRow selectedIndex={selectedIndex} />
        </>
      )}
    </div>
  );
}
