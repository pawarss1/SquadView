import "./body.css";

export default function PlanBody(props) {
  return (
    <>
      <div
        className={props.data.plan === "Enterprise" ? "display-hidden" : null}
      >
        <h1 className="display-price-per-qualified-lead">
          {props.data.pricePerLiveTransfer}
        </h1>
        <p className="inner-plan-details text-align-cls">Per Qualified lead</p>
        <div className="separator-grid">
          <div className="seperator-border" />
        </div>
      </div>
      <p className="inner-plan-details text-align-cls">
        {props.data.plan === "Enterprise" ? "Want " : null} Qualified Leads Per
        Month
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
    </>
  );
}
