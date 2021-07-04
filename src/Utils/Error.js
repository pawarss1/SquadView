import "./utility.css";

export default function Error(props) {
  return <p className="error-cls">{props.error || "NA"}</p>;
}
