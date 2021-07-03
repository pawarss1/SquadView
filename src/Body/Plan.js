import "./body.css";
import { useState } from "react";
import ModalComponent from "../Utils/ModalComponent";
import { popularPlanIndex } from "../../config/development.json";

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
        } mostPopularDiv text-align-cls`}
      >
        <p className="displayPlanDiv text-align-cls">Most Popular!</p>
      </div>
      <div className="planDivTop">
        <p className="displayPlanDiv text-align-cls">{props.data.plan}</p>
      </div>
      <div
        className={
          props.index === popularPlanIndex
            ? "popular-background"
            : "normal-background"
        }
      >
        <h1 className="displayPricePerQualifiedLeadCls">
          {props.data.pricePerLiveTransfer}
        </h1>
        <p className="innerPlanDetails text-align-cls">Per Qualified lead</p>
        <div className="seperatorCls" />
        <p className="innerPlanDetails text-align-cls">
          Qualified Leads Per Month
        </p>
        <p className="innerPlanNumberDetails text-align-cls">
          {props.data.qualifiedLeadsPerMonth}
        </p>
        <div className="seperatorCls" />
        <p className="innerPlanDetails text-align-cls">
          Platform Fee Per Month
        </p>
        <p className="innerPlanNumberDetails text-align-cls">
          {props.data.totalPlatformPrice}
        </p>
        <div className="planDivTop">
          <p className="displayPlanDiv text-align-cls">
            {props.data.finalPackagePrice}/mo
          </p>
        </div>
      </div>
      <button type="button" className="btn-props" onClick={handleShowModal}>
        <p className="buttonDetails text-align-cls">Start Your Trial</p>
      </button>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
