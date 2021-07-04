import "./body.css";
import { popularPlanIndex } from "../../config/development.json";
import PlanHeading from "./PlanHeading";
import PlanBody from "./PlanBody";
import PlanFooter from "./PlanFooter";

export default function Plan(props) {
  return (
    <div>
      <PlanHeading index={props.index} data={props.data} />
      <div
        className={
          props.index === popularPlanIndex || props.data.plan === "Enterprise"
            ? "popular-background"
            : "normal-background"
        }
      >
        <PlanBody data={props.data} />
      </div>

      <PlanFooter
        index={props.index}
        data={props.data}
        handleShowModal={props.handleShowModal}
      />
    </div>
  );
}
