import "./body.css";
import { useState } from "react";
import ModalComponent from "../Utils/ModalComponent";
import ButtonComponent from "../Utils/ButtonComponent";

export default function Enterprise(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
      <div className="display-hidden mostPopularDiv text-align-cls">
        <p className="displayPlanDiv text-align-cls">Most Popular!</p>
      </div>
      <div className="planDivTop">
        <p className="displayPlanDiv text-align-cls">{props.data.plan}</p>
      </div>
      <div className="enterprise-background">
        <p className="enterprise-text">
          Want more than 80 qualified leads each month?
        </p>
      </div>
      <ButtonComponent
        buttonClassList="btn-props btn-layout-normal"
        textClassList="button-color-normal text-align-cls"
        text="Get in Touch"
        onClickHandler={handleShowModal}
      />
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        planSelected={props.data.plan}
      />
    </div>
  );
}
