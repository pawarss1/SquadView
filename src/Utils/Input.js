import "./utility.css";

export default function Input(props) {
  return (
    <input
      type={props.type}
      className="name-input"
      required={props.required}
      onChange={(evt) => {
        props.updateFormData(props.fieldName, evt.target.value);
      }}
    />
  );
}
