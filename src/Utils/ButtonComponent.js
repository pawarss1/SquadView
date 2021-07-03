import "./utility.css";

export default function ButtonComponent(props) {
  return (
    <button
      type="button"
      className={props.buttonClassList}
      onClick={props.onClickHandler}
    >
      <p className={props.textClassList}>{props.text}</p>
    </button>
  );
}
