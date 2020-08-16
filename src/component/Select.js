import React, { Component } from 'react';
import './Select.css';

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            options: this.props.options,
            //options: testmap,
            currentOption: this.props.defaultOption,
            datafunc: this.props.conn,
            dataname: this.props.dataname
            //currentOption: "testvalue"
        }

        this.renderOptions = this.renderOptions.bind(this)
        this.handleChangeCurrentOption = this.handleChangeCurrentOption.bind(this)
    }

    renderOptions() {
        let ul_mobile = document.getElementById(this.state.id + "_options_mobile")
        let ul_pc = document.getElementById(this.state.id + "_options_pc")
        console.log(ul_mobile)
        console.log(ul_pc)
        let count = 1
        this.props.options.forEach(
            option => {
                if (option != this.state.currentOption) {
                    //console.log(option+"      "+this.state.currentOption)
                    let li = document.createElement('li')
                    li.innerHTML = option
                    li.setAttribute("className", "Select_li dropdown-item")
                    li.setAttribute("id", this.state.id + "_li_" + count)
                    li.onclick = this.handleChangeCurrentOption
                    
                    ul_mobile.appendChild(li)
                    
                    
                    count += 1
                }
            })
        count = 1
        this.props.options.forEach(
            option => {
                if (option != this.state.currentOption) {
                    //console.log(option+"      "+this.state.currentOption)
                    let li = document.createElement('li')
                    li.innerHTML = option
                    li.setAttribute("className", "Select_li dropdown-item")
                    li.setAttribute("id", this.state.id + "_li_" + count)
                    li.onclick = this.handleChangeCurrentOption
                    
                    ul_pc.appendChild(li)
                    
                    
                    count += 1
                }
            })
        
    }
    handleChangeCurrentOption(e) {
        let value = e.target.innerHTML;
        this.setState({
            currentOption: value
        }
            , console.log(this.state))

        if (this.state.datafunc) {
            this.state.datafunc(this.state.dataname, this.state.currentOption)
        }

    }
    componentDidMount() {
        
        this.renderOptions()
    }
    componentDidUpdate() {
        let ul_mobile = document.getElementById(this.state.id + "_options_mobile")
        let ul_pc = document.getElementById(this.state.id + "_options_pc")
        for (let i = ul_mobile.childNodes.length - 1; i >= 0; i--) {
            
            ul_mobile.removeChild(ul_mobile.childNodes[i]);
            
        }
        for (let i = ul_pc.childNodes.length - 1; i >= 0; i--) {
            
            ul_pc.removeChild(ul_pc.childNodes[i]);
            
        }
        this.renderOptions()
    }
    render() {
        return (
            <div>
                <li id={this.state.id + "_select"} className={"Select_main_li d-none d-lg-block " + (this.props.className ? this.props.className : "")}>
                    {this.state.currentOption ? this.state.currentOption : this.props.defaultOption}
                    <ul id={this.state.id + "_options_pc"} className="Select_ul col-12">
                    </ul>
                </li>

                <div className="dropdown d-block d-lg-none ">
                    <a id={this.state.id + "_select"} className="btn dropdown-toggle mt-n1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.currentOption ? this.state.currentOption : this.props.defaultOption}
                    </a>

                    <ul id={this.state.id + "_options_mobile"} className="dropdown-menu col-12" aria-labelledby={this.state.id + "_select"}>
                    
                    </ul>
                </div>
            </div>
        )
    }
}

export default Select;