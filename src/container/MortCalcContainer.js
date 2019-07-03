import React, { Component, Fragment } from 'react';
import MortCalcForm from '../components/MortCalcForm'
import MortCalcEstimate from '../components/MortCalcEstimate'

class MortCalcContainer extends Component{

constructor(props){
    super(props)
    this.state = {
        salary1:0,
        salary2:0,
        combinedSalary: 0
    }
    this.handleSalarySubmit = this.handleSalarySubmit.bind(this)
}
    handleSalarySubmit({customer_salary, cust_partner_salary}) {
        return this.setState(
                    { salary1: customer_salary, salary2: cust_partner_salary, combinedSalary: parseInt(customer_salary) + parseInt(cust_partner_salary)  });
    }

    combinedSalary(){
        console.log(this.state.combinedSalary)
        return this.setState({combinedSalary: this.state.salary1 + this.state.salary2})
    }

    
render(){
    console.log(this.state.combinedSalary)
    return(
        <Fragment>
            <MortCalcForm onSalarySubmit = {this.handleSalarySubmit}/>
            <MortCalcEstimate salary1 ={this.state.salary1} salary2 = {this.state.salary2} combinedSalary = {this.state.combinedSalary}/>
        </Fragment> 
    )
}

    
}

export default MortCalcContainer;