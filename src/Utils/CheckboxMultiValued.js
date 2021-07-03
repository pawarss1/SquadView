import "./utility.css";

export default function CheckboxMultiValued(props) {
  return (
    // Assumption- The user can select multiple Options
    <span>
      <label title="">
        <div className="inliner-cls">
          <input
            type="checkbox"
            onChange={(evt) => props.updateSelectedItem(props.index)}
          />
          <p className="allign-sources-cls">{props.text}</p>
        </div>
      </label>
    </span>
  );
}
