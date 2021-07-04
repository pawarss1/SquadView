import "./body.css";
import { useState } from "react";
import ModalComponent from "../Utils/ModalComponent";
import { popularPlanIndex } from "../../config/development.json";
import ButtonComponent from "../Utils/ButtonComponent";

export default function Plan(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
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
      <div
        className={
          props.index === popularPlanIndex || props.data.plan === "Enterprise"
            ? "popular-background"
            : "normal-background"
        }
      >
        <div
          className={props.data.plan === "Enterprise" ? "display-hidden" : null}
        >
          <h1 className="display-price-per-qualified-lead">
            {props.data.pricePerLiveTransfer}
          </h1>
          <p className="inner-plan-details text-align-cls">
            Per Qualified lead
          </p>
          <div className="separator-grid">
            <div className="seperator-border" />
          </div>
        </div>
        <p className="inner-plan-details text-align-cls">
          Qualified Leads Per Month
        </p>
        <p className="inner-plan-amount-details text-align-cls">
          {props.data.qualifiedLeadsPerMonth}
        </p>
        <div
          className={props.data.plan === "Enterprise" ? "display-hidden" : null}
        >
          <div className="separator-grid">
            <div className="seperator-border" />
          </div>
          <p className="inner-plan-details text-align-cls">
            Platform Fee Per Month
          </p>
          <p className="inner-plan-amount-details text-align-cls">
            {props.data.totalPlatformPrice}
          </p>
          <div className="plan-div-heading">
            <p className="display-heading-inside-div text-align-cls">
              {props.data.finalPackagePrice}/mo
            </p>
          </div>
        </div>
      </div>
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
        onClickHandler={handleShowModal}
      />
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        planSelected={props.data.plan}
        text="Get Started with SquadVoice"
      />
    </div>
  );
}
