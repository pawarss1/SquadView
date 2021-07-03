import "./utility.css";

export default function Select(props) {
  return (
    <select className="arrows">
      {/* <option value="Vancouver Island University">
        Vancouver Island University
      </option>
      <option value="Western University">Western University</option>
      <option value="Wilfrid Laurier University">
        Wilfrid Laurier University
      </option>
      <option value="York University">York University</option> */}
      {props.listOfOptions.map((option, index) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
}
