import "./utility.css";

export default function CheckboxSingleValued(props) {
  return (
    // Assumption- The user can select single Option
    <span>
      <label title="">
        <div className="inliner-cls">
          <input
            type="checkbox"
            onChange={(evt) => {
              // To uncheck the previous checked value
              props.setCheckedIndex(props.index);
              props.updateFormData(props.fieldName, props.text);
            }}
            checked={props.checkedFlag || false}
          />
          <p className="allign-sources-cls">{props.text || "NA"}</p>
        </div>
      </label>
    </span>
  );
}
