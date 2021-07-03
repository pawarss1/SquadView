import "./utility.css";

export default function ButtonComponent(props) {
  return (
    <button
      type="button"
      className={props.buttonClassList || null}
      onClick={props.onClickHandler}
    >
      <p className={props.textClassList || null}>{props.text}</p>
    </button>
  );
}
