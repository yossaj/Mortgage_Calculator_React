import React, { Component, Fragment } from 'react';

class MortCalcForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            customer_salary: 0,
            cust_partner_salary: 0
        }

        this.handleChangeCustSalary = this.handleChangeCustSalary.bind(this)
        this.handleChangeCustPartSalary = this.handleChangeCustPartSalary.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const customer_salary = this.state.customer_salary.trim();
        const cust_partner_salary = this.state.cust_partner_salary.trim();
        if (!customer_salary || !cust_partner_salary) {
            return
        }
        this.props.onSalarySubmit({ customer_salary: customer_salary, cust_partner_salary: cust_partner_salary});
        this.setState({ customer_salary: 0, cust_partner_salary: 0 });
    }

    handleChangeCustSalary(event){
        this.setState({ customer_salary: event.target.value });
    }

    handleChangeCustPartSalary(event){
        this.setState({ cust_partner_salary: event.target.value });
    }

    render() {
        return (
            <Fragment>
            <h1>Hello</h1>
                <form className="comment-form" onSubmit= {this.handleSubmit}>
                    <label>Your Salary</label>
                    <input
                        type="number"
                        placeholder="Salary"
                        value = {this.state.customer_salary}
                        onChange ={this.handleChangeCustSalary}
                    />
                    <label>Your Partner's Salary</label>
                    <input
                        type="number"
                        placeholder="Salary"
                        value = {this.state.cust_partner_salary}
                        onChange={this.handleChangeCustPartSalary}
                    />
                    <input type="submit" value="Post" />
                </form>
            </Fragment>
         )
    }
}

export default MortCalcForm;