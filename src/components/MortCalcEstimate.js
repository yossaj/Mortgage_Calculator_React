import React, {Fragment} from "react";

const MortCalcEstimate = ({salary1, salary2, combinedSalary}) => (
    <Fragment>
        <h2>Results</h2>
        <p>Your Salary : {salary1}</p>
        <p>Partner's Salary: {salary2}</p>
        <h3>Combined Salary: {combinedSalary}</h3>
    </Fragment>
);

export default MortCalcEstimate;