import "./body.css";
import { popularPlanIndex } from "../../config/development.json";
import ButtonComponent from "../Utils/ButtonComponent";

export default function PlanFooter(props) {
  return (
    <ButtonComponent
      buttonClassList={`btn-props ${
        props.index === popularPlanIndex
          ? "btn-layout-popular"
          : "btn-layout-normal"
      }`}
      textClassList={`${
        props.index === popularPlanIndex
          ? "button-color-popular"
          : "button-color-normal"
      } text-align-cls`}
      text={
        props.data.plan === "Enterprise" ? "Get in Touch" : "Start Your Trial"
      }
      onClickHandler={() => props.handleShowModal(props.data.plan)}
    />
  );
}
