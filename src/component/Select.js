import React,{Component} from 'react';
import './Select.css';
// const testmap = [111,222,333,444,555]
class Select extends Component {
    constructor(props){
        super(props)
        this.state={
            id : this.props.id,
            options:this.props.options,
            //options: testmap,
            currentOption:this.props.defaultOption,
            datafunc:this.props.conn,
            dataname:this.props.dataname
            //currentOption: "testvalue"
        }

        this.renderOptions = this.renderOptions.bind(this)
        this.handleChangeCurrentOption = this.handleChangeCurrentOption.bind(this)
    }

    renderOptions(){
        let ul = document.getElementById(this.state.id+"_options")
        let count = 1
        this.props.options.forEach(
            option => {
                if (option != this.state.currentOption)
                {
                    //console.log(option+"      "+this.state.currentOption)
                let li = document.createElement('li')
                li.innerHTML = option
                li.setAttribute("class","Select_li")
                li.setAttribute("id",this.state.id+"_li_"+count)
                li.onclick=this.handleChangeCurrentOption
                ul.appendChild(li)
                count+=1
                }
                // else{
                //     console.log("currentoption "+ this.state.currentOption+ " = choose")
                // }
            }
        )
    }
    handleChangeCurrentOption(e){
        let value = e.target.innerHTML;
        this.setState({
            currentOption:value
        }
        ,console.log(this.state))

        if(this.state.datafunc){
        this.state.datafunc(this.state.dataname,this.state.currentOption)
        }

    }
    componentDidMount(){
        let ul = document.getElementById(this.state.id+"_options")
        for(var i = ul.childNodes.length - 1; i >= 0; i--) { 
            //alert(ul.childNodes[i].nodeName); 
            ul.removeChild(ul.childNodes[i]); 
            } 
        this.renderOptions()
    }
    componentDidUpdate(){
        let ul = document.getElementById(this.state.id+"_options")
        for(var i = ul.childNodes.length - 1; i >= 0; i--) { 
            //alert(ul.childNodes[i].nodeName); 
            ul.removeChild(ul.childNodes[i]); 
            } 
        this.renderOptions()
    }
    render(){
        return(
            <li id={this.state.id+"_select"} className={"Select_main_li "+(this.props.className?this.props.className:"")}>
                {this.state.currentOption ? this.state.currentOption:this.props.defaultOption}
                <ul id={this.state.id+"_options"} className="Select_ul">
                </ul>
            </li>
        )
    }
}

export default Select;