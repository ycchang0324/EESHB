import React, { useState, useEffect } from "react"
import "./Old_book.css"
import Scrollbars from "react-custom-scrollbars";
import axios from "axios";

const test_bookdata = {
    img_path: "https://book.ntuee.org/textbook_image/logic_design.jpg",
    bookname: "Foundmental of Login Design",
    price: 500
}
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
    }

    //global image path
    const image_path = "https://book.ntuee.org/old_book_picture/image_"

    const [currentCategory, setCurrentCategory] = useState("")
    const [categoryTable, setCategoryTable] = useState({})


    const handleCategoryChange = (newCategory) => {
        setCurrentCategory(newCategory)
        getOldBookListfromBackend()
    }

    const getOldBookListfromBackend = () => {
        //TODO
        // axios => if success then call categorizeOldBooks => store in categoryTable
        axios.post("https://book.ntuee.org/backend/showOldBook.php",
            {
                category: currentCategory
            })
            .then(
                data => {
                    if (data.data.success === 1) {
                        console.log(data)
                        //setCategoryTable(data.data.oldBookList)
                    }
                    else {
                        console.log(data)
                        alert("Something's Wrong\nCan not fetch old book list from db")
                    }
                }
            )
    }

    const categorizeOldBooks = (oldbooks) => {
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
         */
    }

    const renderChosenCategory = (currentCategory) => {
        //TODO
        // use currentCategory to choose from categoryTable and render into page
        // return list of Old_book_card


    }

    // useEffect(() => {
    //     getOldBookListfromBackend()
    // }, [])

    return (
        // <div>
        //     
        // </div>
        <div id="Old_book_container" className="card text-center">
            <div id="Old_book_nav" className="card-header">
                {/* <Old_book_nav data={nav_categories} datafunc={handleCategoryChange} /> */}
            </div>
            <p>{currentCategory}</p>
            {/* <Scrollbars renderThumbVertical={renderThumb} >
                <div id="Old_book_cards" className="d-flex justify-content-center">
                    {/* {renderChosenCategory(currentCategory)} 
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />
                    <Old_book_card data={test_bookdata} />

                </div>
            </Scrollbars> */}
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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
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
                    <li className="nav-item">
                        <button className="nav-link" href="#"
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
        <ul className="nav nav-tabs card-header-tabs">
            {renderNavCategories()}
        </ul>
    )
}

/* props format:
{
    data:
        {
            img_path:
            bookname:
            price:
        }
}
 */

const Old_book_card = (props) => {

    return (
        <div className="card mx-1 my-3 mx-md-2 m-lg-3">
            <div className="mx-1 my-3 mx-md-2 m-lg-3">
                <img src={props.data.img_path} className="card-img-top img-fluid Old_book_card_img" alt={props.data.img_path} />
            </div>
            <div className="card-body px-2 py-1">
                <p className="card-text Old_book_card_text">{props.data.bookname}</p>
                <p className="card-title Old_book_card_price"><span style={{ color: "red", fontWeight: "bold" }}>{props.data.price}</span>元</p>
            </div>
        </div>
    )
}
