import "./header.css";

export default function Tab(props) {
  const handleTabChange = () => {
    props.handleTabChange(props.index);
  };

  return (
    <div
      className={` ${
        props.index === 0
          ? "corner-left-div home-value-container"
          : props.index === props.headerDatalength - 1
          ? "corner-right-div home-value-container"
          : "home-value-container"
      } ${props.index === props.selectedIndex ? "selected-tab" : ""}`}
      onClick={handleTabChange}
    >
      <p
        className={
          props.index === props.selectedIndex
            ? "selected-tab-detail tab-inner-text-details"
            : "tab-detail tab-inner-text-details"
        }
      >
        {props.range}
      </p>
    </div>
  );
}
