import "./utility.css";

export default function Checkbox(props) {
  return (
    // Assumption- The user can select multiple Options
    <span>
      <label title="">
        <div className="inliner-cls">
          <input type="checkbox" value="" required={props.required} />
          <p className="allign-sources-cls">{props.text}</p>
        </div>
      </label>
    </span>
  );
}
