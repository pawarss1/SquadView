import "./utility.css";

export default function Input(props) {
  return (
    <input
      className="nameInput"
      required={props.required}
      onChange={(evt) => {
        props.updateFormData(props.fieldName, evt.target.value);
      }}
    />
  );
}
