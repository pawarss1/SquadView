import "./utility.css";

export default function NoInternetComponent(props) {
  return (
    <div className="no-internet-screen">
      <h5 className="no-internet-text">{props.text}</h5>
    </div>
  );
}
