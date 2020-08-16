import React, {Component} from 'react';
import Select from './component/Select';
import Axios from 'axios';
import './SellBook.css';
import { Redirect } from 'react-router';
const categories_subjects = {
    "大一必修":["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上下"],
    "大二必修":["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"],
    "複選必修":["資料結構", "演算法"],
    "選修":["工程數學-離散數學", "工程數學-複變"],
    "其他選修":["無"]
}
class SellBook extends Component {
    constructor(props){
        super(props)
        this.state={
            data:{
                name:'',
                stuid:'',
                category:'',
                subject:'',
                amount:'',
                others:''
            },
            captcha:''

        }
    }

    handleChildCurrentOptionChange = (dataname,currentOption) => {
        let newdata = this.state.data;
        newdata[dataname]= currentOption;
        this.setState({
            data:newdata
        })
        console.log(this.state.data);
    }

    handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let newdata = this.state.data;
        // console.log(newdata);
        newdata[name]= value;
        this.setState({
            data:newdata
        })
        console.log(this.state.data);
        
    }

    insertUser = (event) => {

        
        event.preventDefault();
        event.persist();
        Axios.post('https://book.ntuee.org/backend/captcha/checkcode.php',
        {"captcha":this.state.captcha}).then(
            function(data){
                console.log(data);
            }
        )
        Axios.post('https://book.ntuee.org/backend/backEndSeller.php', 
            this.state.data
            
        )
        
            .then(function ({ data }) {
                

                if (data.success == 1) {
                    //this.context.addNewUser(data.id, this.username.value, this.useremail.value);
                    //event.target.reset();
                    
                    console.log(data)
                    alert(data.msg)
                    alert("success")

                    return <Redirect to="/FillSuccess"/>
                    
                }
                else {
                    console.log(data)
                    alert(data.msg);
                    
                    
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    refresh_code = (e) => {
        e.target.src = "https://book.ntuee.org/backend/captcha/captcha.php"
    }
    // componentDidUpdate(){
    //     console.log(
    //         categories_subjects[this.state.data.category]
    //     )
    // }
    handleCaptchaChange = (e) => {
        this.setState({
            captcha:e.target.value
        },console.log(this.state))
    }
    render() {
        return(
            <div id="SellBook_container">
                <h1 id="h1">填寫賣書表單</h1>
            <div id="SellBook_box">
            <form onSubmit={this.insertUser}>
            <ul id="SellBook_main_ul">
                <li className="SellBook_li">
                    <div>
                    <label for="fname">name:</label>
                    <span className="separator"></span>
                    </div>
                {/* 還沒限制字數 */}
                    <div>
                    <input className="SellBook_box_input" type="text" id="name" name="name"  maxlength="9" required="required" onChange={this.handleInputChange} placeholder="ex:王"/>
                    <span className="separator"></span>
                    </div>
                </li>
                
                <li className="SellBook_li">
                    <div>
                    <label for="stdId">Student ID:</label>
                    <span className="separator"></span>
                    </div>
                    <div>
                    <input className="SellBook_box_input" type="text" id="stdId" name="stdId"  maxlength="9" required="required" onChange={this.handleInputChange} placeholder="ex:b08900000"/>
                    <span className="separator"></span>
                    </div>
                </li>
                <li>
                <label for="category">類別:</label>
                <Select id="Sellbook_category" className="SellBook_box_select" dataname="category" conn={this.handleChildCurrentOptionChange} defaultOption="Please Choose a category" options={Object.keys(categories_subjects)}/>
                {/* <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="category">
                    <option value="grade1">大一必修</option>
                    <option value="grade2">大二必修</option>
                    <option value="grade3">大三必修</option>
                    <option value="seleccompul">複選必修</option>
                    <option value="selective">選修</option>
                    <option value="otherselective">其他選修</option>
                    </select> */}
                </li>
                <li>
                <label for="category">科目:</label>
                <Select id="Sellbook_subject" className="SellBook_box_select" dataname="subject" conn={this.handleChildCurrentOptionChange} defaultOption="Please Choose a category_first" options={categories_subjects[this.state.data.category]?categories_subjects[this.state.data.category]:[]}/>
                {/* <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="subject">
                    <option value="LDSC">交換電路與邏輯設計</option>
                    {/* 還不會按照上方選擇改變此處(onchan?ge) */}
                    {/* ["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上"];
                    ["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"];
                    ["資料結構", "演算法"];
                    ["工程數學-離散數學", "工程數學-複變"]; 
                    </select> */}
                </li>
                
                <li>書價：
                    {/* <ul>
                    <li>200元<input type="radio" name="price" value="200"/></li>
                    <li>300元<input type="radio" name="price" value="300"/></li>
                    <li>500元<input type="radio" name="price" value="500"/></li>
                    <li>700元<input type="radio" name="price" value="700"/></li>
                    </ul> */}
                    <table>
                        <tbody>
                            <tr>
                                <td>200元</td>
                                <td><input type="radio" name="price" value="200" onChange={this.handleInputChange}/></td>
                                <td>300元</td>
                                <td><input type="radio" name="price" value="300" onChange={this.handleInputChange}/></td>
                            </tr>
                            <tr>
                                <td>500元</td>
                                <td><input type="radio" name="price" value="500" onChange={this.handleInputChange}/></td>
                                <td>700元</td>
                                <td><input type="radio" name="price" value="700" onChange={this.handleInputChange}/></td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li style={{height:"5vh"}} className="SellBook_li">
                    <div>
                    <label>其他事項：</label>
                    <span class="separator"></span>
                    </div>
                    <div>
                    <input className="SellBook_box_input" id="SellBook_box_others" type="text" name="others" maxlength="70" onChange={this.handleInputChange} placeholder="請大略說明書況等相關信息"/>
                    <span class="separator"></span>
                    </div>
                </li>
                <li>
                    <div>
                    <label>驗證碼</label>
                    
                    </div>
                    <div style={{float:"right"}}>
                    <input id="SellBook_captcha" className="SellBook_box_input" required="required" name="captcha" onChange={this.handleCaptchaChange} placeholder="請輸入驗證碼"/>
                    <span class="separator"></span>
                    </div>
                    <div>
                                    <img src="https://book.ntuee.org/backend/captcha/captcha.php" alt="captcha" onClick={this.refresh_code}/>
                        <span class="separator"></span>
                        <p style={{fontSize:"16px"}}>看不清楚? 點擊圖片換下一張</p>
                    </div> 
                    
                </li>
                <li id="SellBook_checkbox_li">
                <input  type="checkbox" name="condition" require="required" value="1"/>我已同意二手書網站條款
                </li>
                {/* <input type="submit" value="送出表單" onSubmit={this.insertUser}/> */}
                </ul>

                <button id="SellBook_submit_btn" type="submit" onSubmit={this.insertUser}>Submit</button>

            </form>
            </div>
        </div>
        )
    }
}

export default SellBook;

// const SellBook = () =>{
//     const [data,setData] = useState({
//         firstname:'',
//         lastname:'',
//         category:'',
//         subject:'',
//         amount:'',
//         others:''
//     })
    
//     const categories_subjects = {
//         "大一必修":["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上下"],
//         "大二必修":["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"],
//         "複選必修":["資料結構", "演算法"],
//         "選修":["工程數學-離散數學", "工程數學-複變"],
//         "其他選修":[]
//     }
//     const handleChildCurrentOptionChange = (dataname,currentOption) => {
//         let newdata = data;
//         newdata[dataname]= currentOption;
//         setData(newdata);
//         console.log(data);
//     }
//     const handleInputChange = (event) => {
//         let name = event.target.name;
//         let value = event.target.value;
//         let newdata = data;
//         // console.log(newdata);
//         newdata[name]= value;
//         setData(newdata);
//         console.log(data);
        
//     }
//     const insertUser = (event) => {
//         event.preventDefault();
//         event.persist();
//         Axios.post('http://localhost/php-react/add-user.php', 
//             data
//         )
//             .then(function ({ data }) {
//                 if (data.success === 1) {
//                     //this.context.addNewUser(data.id, this.username.value, this.useremail.value);
//                     //event.target.reset();
//                     alert(data.msg);
//                 }
//                 else {
//                     alert(data.msg);
//                 }
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
    
//     return(
//         <div id="SellBook_container">
//             <div id="SellBook_box">
//             <form onSubmit={insertUser}>
//             <ul>
//                 <li className="SellBook_li">
//                     <div>
//                     <label for="fname">First name:</label>
//                     <span className="separator"></span>
//                     </div>
//                 {/* 還沒限制字數 */}
//                     <div>
//                     <input className="SellBook_box_input" type="text" id="fname" name="firstname"  maxlength="9" required="required" onChange={handleInputChange}/>
//                     <span className="separator"></span>
//                     </div>
//                 </li>
//                 <li className="SellBook_li">
//                     <div>
//                     <label for="lname">Last name:</label>
//                     <span className="separator"></span>
//                     </div>
//                     <div>
//                     <input className="SellBook_box_input" type="text" id="lname" name="lastname"  maxlength="9" required="required" onChange={handleInputChange}/>
//                     <span className="separator"></span>
//                     </div>
//                 </li>
//                 <li>
//                 <label for="category">類別:</label>
//                 <Select id="Sellbook_category" className="SellBook_box_select" dataname="category" conn={handleChildCurrentOptionChange} defaultOption="Please Choose a category" options={Object.keys(categories_subjects)}/>
//                 {/* <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="category">
//                     <option value="grade1">大一必修</option>
//                     <option value="grade2">大二必修</option>
//                     <option value="grade3">大三必修</option>
//                     <option value="seleccompul">複選必修</option>
//                     <option value="selective">選修</option>
//                     <option value="otherselective">其他選修</option>
//                     </select> */}
//                 </li>
//                 <li>
//                 <label for="category">科目:</label>
//                 <Select id="Sellbook_subject" className="SellBook_box_select" dataname="subject" conn={handleChildCurrentOptionChange} defaultOption="Please Choose a category_first" options={categories_subjects[data.category]?categories_subjects[data.category]:[]}/>
//                 {/* <select id="category" require="required" className="SellBook_box_select" onChange={handleInputChange} name="subject">
//                     <option value="LDSC">交換電路與邏輯設計</option>
//                     {/* 還不會按照上方選擇改變此處(onchan?ge) */}
//                     {/* ["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上"];
//                     ["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"];
//                     ["資料結構", "演算法"];
//                     ["工程數學-離散數學", "工程數學-複變"]; 
//                     </select> */}
//                 </li>
//                 <li className="SellBook_li">
//                     <div>
//                         <label>數量</label>
//                         <span className="separator"></span>
//                     </div>
//                     <div>
//                     <input className="SellBook_box_input" type="number" name="amount" min="1" require="required" onChange={handleInputChange}/>
//                     <span className="separator"></span>
//                     </div>
//                 </li>
//                 <li>書價：
//                     {/* <ul>
//                     <li>200元<input type="radio" name="price" value="200"/></li>
//                     <li>300元<input type="radio" name="price" value="300"/></li>
//                     <li>500元<input type="radio" name="price" value="500"/></li>
//                     <li>700元<input type="radio" name="price" value="700"/></li>
//                     </ul> */}
//                     <table>
//                         <tbody>
//                             <tr>
//                                 <td>200元</td>
//                                 <td><input type="radio" name="price" value="200"/></td>
//                                 <td>300元</td>
//                                 <td><input type="radio" name="price" value="300"/></td>
//                             </tr>
//                             <tr>
//                                 <td>500元</td>
//                                 <td><input type="radio" name="price" value="500"/></td>
//                                 <td>700元</td>
//                                 <td><input type="radio" name="price" value="700"/></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </li>
//                 <li style={{height:"5vh"}} className="SellBook_li">
//                     <div>
//                     <label>其他事項：</label>
//                     <span class="separator"></span>
//                     </div>
//                     <div>
//                     <input className="SellBook_box_input" type="text" name="comment" size="70" maxlength="70" onChange={handleInputChange}/>
//                     <span class="separator"></span>
//                     </div>
//                 {/* 不知圖片怎麼找*/}
//                 </li>
//                 <li>
//                     驗證碼：<div><img src="" id="captcha"/></div> 
//                 </li>
//                 <li>
//                 <input type="checkbox" name="condition" require="required"/>我已同意二手書網站條款<br/><br/><br/>
//                 </li>
//                 <input type="submit" value="送出表單" onSubmit={insertUser}/>
//                 </ul>
//             </form>
            
//             </div>
//         </div>
//     )
// }
