import "./header.css";

export default function Tab(props) {
  return (
    <div
      className={` ${
        props.index === 0
          ? "cornerLeftDiv"
          : props.index === props.headerDatalength - 1
          ? "cornerRightDiv"
          : "innerDivs"
      } ${props.index === props.selectedIndex ? "selectedTab" : ""}`}
      onClick={() => props.handleTabChange(props.index)}
    >
      <p
        className={
          props.index === props.selectedIndex ? "selectedTabDetail" : "rangeCls"
        }
      >
        {props.range}
      </p>
    </div>
  );
}
