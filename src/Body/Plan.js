import "./body.css";
import { useState } from "react";
import ModalComponent from "../Utils/ModalComponent";

export default function Plan(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
      <div className="planDivTop">
        <p className="displayPlanDiv">{props.data.plan}</p>
      </div>
      <h1 className="displayPricePerQualifiedLeadCls">
        {props.data.pricePerLiveTransfer}
      </h1>
      <p className="innerPlanDetails">Per Qualified lead</p>
      <div className="seperatorCls" />
      <p className="innerPlanDetails">Qualified Leads Per Month</p>
      <p className="innerPlanNumberDetails">
        {props.data.qualifiedLeadsPerMonth}
      </p>
      <div className="seperatorCls" />
      <p className="innerPlanDetails">Platform Fee Per Month</p>
      <p className="innerPlanNumberDetails">{props.data.totalPlatformPrice}</p>
      <div className="planDivTop">
        <p className="displayPlanDiv">{props.data.finalPackagePrice}/mo</p>
      </div>
      <button type="button" className="btn-props" onClick={handleShowModal}>
        <p className="buttonDetails">Start Your Trial</p>
      </button>
      <ModalComponent showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
