import React, { useState, useEffect } from 'react'
import "./Old_book_sell.css"
import Select from '../component/Select'
import Axios from 'axios'

const Old_book_sell = (props) => {

    const identity_option = {
        "訪客": 1,
        "校內同學": 0.8,
        "系上同學": 0.5,
        "工人優惠": 0
    }

    const image_path = "https://book.ntuee.org/old_book_picture/image_"

    const [stuId, setStdId] = useState("")
    const [bookId, setBookId] = useState("")
    const [identity, setIdentity] = useState("")
    const [price, setPrice] = useState("")

    const handleIdentityChange = (blank, newIdentity) => {
        setIdentity(newIdentity)
    }

    const handleSearchBookId = () => {
        Axios.post("https://book.ntuee.org/backend/manage/getOldBookPrice.php", {
            id:bookId
        })
            .then()
            .catch()
    }

    return (
        <div id="Old_book_sell_container">
            <form>
                <div className="form-group">
                    <label>Student ID</label>
                    <input className="form-control" type="text" onChange={}></input>
                </div>
                <div className="form-group row">
                    <label>Book ID</label>
                    <input className="form-control" type="text" onChange={}></input>
                    <button className="btn btn-primary" onClick={handleSearchBookId}>Search</button>
                </div>

                <div>
                    <img src={bookId ? image_path + bookId + ".jpg" : null}></img>
                </div>

                <div>
                    <Select conn={handleIdentityChange} defaultOption="Please choose an identity type" options={Object.keys(identity_option)}></Select>
                </div>
                <div>
                    <p>原價:{price}元</p>
                    <p>售價:{price?price*identity_option[identity]:""}元</p>
                </div>

            </form>
        </div>
    )
}

export default Old_book_sell