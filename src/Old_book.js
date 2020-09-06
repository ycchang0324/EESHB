import React, { useState, useEffect } from "react"
import "./Old_book.css"
import Scrollbars from "react-custom-scrollbars";
import axios from "axios";


const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(192,192,200, 0.5)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
}

const Old_book = (props) => {

    //categories for nav
    /* props format:
    {
        data:
            {
                cate1:[subject1,subject2...]
                cate2:[subject1,subject2...]
            }
    }
    */
    const nav_categories = {
        "全部書籍": null,
        "大一必修": ["微積分", "交換電路與邏輯設計", "計算機程式設計", "普通物理", "普通化學", "生物科學通論", "電路學"],
        "大二必修": ["微分方程", "線性代數", "電子學", "電磁學", "機率與統計", "信號與系統"],
        "系上選修": ["離散數學", "計算機概論", "系上其他選修"],
        "系外選修": null,
        "課外書": null,
        "光碟": null
    }



    const [currentCategory, setCurrentCategory] = useState("")
    const [categoryCardList, setCategoryCardList] = useState([])


    const handleCategoryChange = (newCategory) => {
        setCurrentCategory(newCategory)
        if(newCategory === "全部書籍"){
            getAllOldBook()
        }else{
            getOldBookListfromBackend(newCategory)
        }
    }

    const getOldBookListfromBackend = (newCategory) => {
        //TODO
        // axios => if success then call categorizeOldBooks => store in categoryTable
        axios.post("https://book.ntuee.org/backend/showOldBook.php",
            {
                category: newCategory
            })
            .then(
                data => {
                    if (data.data.success === 1) {
                        console.log(data)
                        // categorizeOldBooks(data.data.oldBookList)
                        // setCategoryTable(data.data.oldBookList)
                        let old_book_cards = renderChosenCategory(data.data.oldBookList)
                        setCategoryCardList(old_book_cards)
                    }
                    else {
                        console.log(data)
                        alert("Something's Wrong\nCan not fetch old book list from db")
                    }
                }
            )
    }

    /* const categorizeOldBooks = (oldbooks) => {
        //TODO
        // organize data from backend
        //format:
        /*
        {
            category1:
            {
                book1:
                {
                    img_path:
                    bookname:
                    price:
                }
            }
        } 
         
        for (let oldbook of oldbooks){

        }
    } */

    const renderChosenCategory = (currentCategoryBookList) => {
        //TODO
        // use currentCategory to choose from categoryTable and render into page
        // return list of Old_book_card

        // set a blank list to store Old_book_card
        let oldbook_list = []

        for (let oldbook of currentCategoryBookList) {
            oldbook_list.push(<Old_book_card data={oldbook} />)
        }

        return oldbook_list

    }

    const getAllOldBook = () => {
        axios.post("https://book.ntuee.org/backend/allOldBook.php",{})
        .then(
            (data) => {
                if(data.data.success === 1){
                    let old_book_cards = renderChosenCategory(data.data.orderList)
                    setCategoryCardList(old_book_cards)
                }else{
                    alert("Something's wrong\n Can get All Old Book!!")
                }
            }
        )
    }

    useEffect(() => {
        getAllOldBook()
    }, [])

    return (
        <div id="Old_book_container" className="card text-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Old_book_nav" aria-controls="Old_book_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="Old_book_nav" className="card-header collapse navbar-collapse bg-light" style={{borderBottom:"0px"}}>
                    
                    <Old_book_nav data={nav_categories} datafunc={handleCategoryChange} />
                    
                </div>
            </nav>
            <Scrollbars renderThumbVertical={renderThumb} >
                <div id="Old_book_cards" className="d-flex justify-content-center">
                    {categoryCardList}
                </div>
            </Scrollbars>
        </div>
    )
}

export default Old_book

/* props format:
{
    data:
        {
            cate1:[subject1,subject2...]
            cate2:[subject1,subject2...]
        }
}
 */

const Old_book_nav = (props) => {


    const renderNavCategories = () => {
        let navtabs_list = []
        for (let category in props.data) {

            if (props.data[category]) {
                let dropdown_items = []
                for (let subject of props.data[category]) {
                    dropdown_items.push(
                        <button className="dropdown-item"
                            onClick={(e) => {
                                e.preventDefault()
                                props.datafunc(subject)
                            }}>
                            {subject}
                        </button>)
                }

                navtabs_list.push(
                    <li className="nav-item dropdown col-12 col-sm-6 col-md-4 col-lg-3 col-xl p-xl-0">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" href = "#">
                            {category}
                        </a>
                        <div className="dropdown-menu">
                            {dropdown_items}
                        </div>
                    </li>
                )
            }
            else {
                navtabs_list.push(
                    <li className="nav-item col-12 col-sm-6 col-md-4 col-lg-3 col-xl p-xl-0 d-flex justify-content-center">
                        <button className="nav-link bg-light"
                            onClick={
                                (e) => {
                                    e.preventDefault()
                                    props.datafunc(category)
                                }}>
                            {category}
                        </button>
                    </li>
                )
            }
        }

        return navtabs_list
    }

    return (
        <ul className="nav nav-tabs card-header-tabs col-12">
            {renderNavCategories()}
        </ul>
    )
}

/* props format:
{
    data:
        {
            id:
            name:
            category:
            price:
            picture:
            isSold:
        }
}
 */

const Old_book_card = (props) => {

    //global image path
    const image_path = "https://book.ntuee.org/old_book_picture/image_"

    return (
        <div className="card mx-1 my-3 mx-md-2 m-lg-3 Old_book_card">
            <div className="mx-1 my-3 mx-md-2 m-lg-3">
                <img src={image_path + props.data.picture + ".jpg"} className="card-img-top img-fluid Old_book_card_img" alt={props.data.img_path} />
            </div>
            <div className="card-body px-2 py-1 d-flex flex-column">
                <p className="card-text Old_book_card_text">編號：<span style={{ color: "black", fontWeight: "bold" }}>{props.data.id}</span></p>
                <p className="card-text Old_book_card_text">{props.data.name}</p>
                <p className="card-title mt-auto"><span style={{textDecoration:"line-through",margin:"0",color:"gray"}}>售價{props.data.price}元</span></p>
                <p className="card-title Old_book_card_price mt-auto">校內同學<span style={{ color: "red", fontWeight: "bold" }}>{0.8*props.data.price}</span>元</p>
                <p className="card-title Old_book_card_price mt-auto">系上同學<span style={{ color: "red", fontWeight: "bold" }}>{0.5*props.data.price}</span>元</p>
            </div>
        </div>
    )
}
