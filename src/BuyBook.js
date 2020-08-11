import React, { useState,useEffect } from 'react';
import Select from "./component/Select";
import Rolling_Number from './component/Rolling_Number'
import axios from 'axios';
import './BuyBook.css'
const categories_subjects = {
    "大一必修":["交換電路與邏輯設計", "計算機程式設計", "生物科學通論", "普通化學丙", "普通物理學甲", "微積分甲上下"],
    "大二必修":["電子學(一)", "電磁學(一)", "工程數學-線性代數", "工程數學-微分方程"],
    "複選必修":["資料結構", "演算法"],
    "選修":["工程數學-離散數學", "工程數學-複變"],
    "其他選修":["無"]
}
const BuyBook = () =>{
    // let subjects = {
    //     'subject1':true,
    //     'subject2':true,
    //     'subject3':true,
    // }
    // const [book_num, setBookNum] = useState({
    //     "200":0,
    //     "300":0,
    //     "500":0,
    //     "700":0
    // })

    const [category,setCategory] = useState(
        ""
    )
    const [subject,setSubject] = useState(
        "微積分甲上下"
    )
    const [dataFromBackEnd,setDataFromBackEnd] = useState({
        "Default":[0,0,0,0],
        "交換電路與邏輯設計":[0,0,0,0],
        "計算機程式設計":[0,0,0,0], 
        "生物科學通論":[0,0,0,0], 
        "普通化學丙":[0,0,0,0], 
        "普通物理學甲":[0,0,0,0],
        "微積分甲上下":[0,0,0,0],
        "電子學(一)":[0,0,0,0],
        "電磁學(一)":[0,0,0,0], 
        "工程數學-線性代數":[0,0,0,0], 
        "工程數學-微分方程":[0,0,0,0],
        "資料結構":[0,0,0,0], 
        "演算法":[0,0,0,0],
        "工程數學-離散數學":[0,0,0,0], 
        "工程數學-複變":[0,0,0,0]
    })
    // const subjects=[
    //     "Calculus","Electric Circuits","Physics","Switching Circuits and Logic Design"
    // ]
    const handleSelectChange = (dataname,option) => {
        if(dataname==="category"){
            setCategory(option)
        }else if (dataname==="subject"){
            setSubject(option)
        }
    }
     useEffect(() => {
         axios.post('https://book.ntuee.org/backend/buyBookPage.php',{})
             .then(function (data) {
                 console.log(subject)
                 console.log(data.data)
                 console.log(data.data[subject])
                 setDataFromBackEnd(data.data);
                 
         }).catch(function (error) {
                 console.log(error);
            });
     },[])
    return(
        <div id="BuyBook_container">
            {/* <h1 id="h1">選擇科目</h1> */}
            <h1 id="h1">剩餘書籍</h1>
            <form id="form1">
            <div id="BuyBook_search_bar_category" className="BuyBook_search_bar">
                
                    <Select id="BuyBook_categories" defaultOption="Choose Your Grade " options={Object.keys(categories_subjects)} conn={handleSelectChange} dataname="category"/>
                    
                   {/* <Select id="Sellbook_category" className="SellBook_box_select" dataname="category" conn={this.handleChildCurrentOptionChange} defaultOption="Please Choose a category" options={Object.keys(categories_subjects)}/>
                   <Select id="Sellbook_subject" className="SellBook_box_select" dataname="subject" conn={this.handleChildCurrentOptionChange} defaultOption="Please Choose a category_first" options={categories_subjects[this.state.data.category]?categories_subjects[this.state.data.category]:[]}/> */}
                    {/* <select name="YourLocation">
                    　<option value="1">電路學</option>
                    　<option value="2">微積分</option>
                    　<option value="3">普通物理學</option>
                    </select> */}
            
                
            </div> 
            <div id="BuyBook_search_bar_subject" className="BuyBook_search_bar">
                <Select id="BuyBook_subjects" defaultOption="Choose Your Grade First" options={categories_subjects[category]?categories_subjects[category]:[]} conn={handleSelectChange} dataname="subject"/>
            </div>
            </form>
                <div id="BuyBook_box">
                <div id="BuyBook_200" class="BuyBook_price">
                    $200
                    <Rolling_Number price="200" num={dataFromBackEnd[subject][0]?dataFromBackEnd[subject][0]:0}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_300" class="BuyBook_price">
                    $300
                    <Rolling_Number price="300" num={dataFromBackEnd[subject][1]?dataFromBackEnd[subject][1]:0}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_500" class="BuyBook_price">
                    $500
                    <Rolling_Number price="500" num={dataFromBackEnd[subject][2]?dataFromBackEnd[subject][2]:0}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                <div id="BuyBook_700" class="BuyBook_price">
                    $700
                    <Rolling_Number price="700" num={dataFromBackEnd[subject][3]?dataFromBackEnd[subject][3]:0}/>
                    <span className="Rolling_Number_text">本</span>
                </div>
                {/* <p>     200元  x本</p>
                <p>     300元  x本</p>
                <p>     400元  x本</p>
                <p>     400元  x本</p>
                <h2>賣書時間</h2> */}
            </div>
            {/* <button onClick={(e)=>{
                e.preventDefault()
                setBookNum({
                    "200":book_num["200"]+1,
                    "300":book_num["300"]+1,
                    "500":book_num["500"]+1,
                    "700":book_num["700"]+1
                })
            }}>111</button> */}
        </div>
    )
}
export default BuyBook;