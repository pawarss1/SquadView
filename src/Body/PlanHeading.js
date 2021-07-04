import "./body.css";
import { popularPlanIndex } from "../../config/development.json";

export default function PlanHeading(props) {
  return (
    <>
      <div
        className={`${
          props.index === popularPlanIndex ? "" : "display-hidden"
        } most-popular-div text-align-cls`}
      >
        <p className="display-heading-inside-div text-align-cls">
          Most Popular!
        </p>
      </div>
      <div className="plan-div-heading">
        <p className="display-heading-inside-div text-align-cls">
          {props.data.plan}
        </p>
      </div>
    </>
  );
}
