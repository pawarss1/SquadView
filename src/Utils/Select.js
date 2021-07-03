import "./utility.css";

export default function Select(props) {
  /*  Assumption 1.1- If none of the picklist value is selected, by default the value is "-", which is null,
      so there is a check that verifies that the value is not null, based on the Assumption 1.0, which states that
      all the fields on the modal form are required.
  */
  return (
    <select
      className="arrows"
      required={props.required}
      onChange={(evt) =>
        props.updateFormData(props.fieldName, evt.target.value)
      }
    >
      {props.listOfOptions.map((option, index) => {
        return (
          <option
            key={`${option}${index}`}
            value={option === "-" ? "" : option}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
}
