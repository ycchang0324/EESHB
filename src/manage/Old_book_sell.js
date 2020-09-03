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
    const [identity, setIdentity] = useState("訪客")
    const [price, setPrice] = useState("")

    const handleIdentityChange = (blank, newIdentity) => {
        setIdentity(newIdentity)
    }

    const handleSearchBookId = (e) => {
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/manage/getOldBookPrice.php", {
            bookId: bookId
        })
            .then(
                (data) => {
                    if (data.data.success === 1) {
                        setPrice(data.data.price)
                    }
                    else {
                        alert("Something's wrong\nCan get book price")
                    }
                }
            )
            .catch(err => (alert(err)))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("https://book.ntuee.org/backend/sellOldBook.php",
            {
                id: bookId,
                price: price * identity_option[identity],
                buyerId: stuId
            }).then((data) => {
                if (data.data.success === 1) {
                    alert(data.data.msg)
                }
                else {
                    alert("Something's wrong\nUpdate Fail!")
                }
            })
            .catch(err => (alert(err)))
    }


    return (
        <div id="Old_book_sell_container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Student ID</label>
                    <input className="form-control" type="text"
                        onChange={(e) => {
                            setStdId(e.target.value)
                        }}></input>
                </div>
                <div className="form-group row">
                    <label>Book ID</label>
                    <input className="form-control" type="text"
                        onChange={(e) => {
                            setBookId(e.target.value)
                        }}></input>
                    <button className="btn btn-primary" onClick={handleSearchBookId}>Search</button>
                </div>

                <div>
                    <img src={bookId ? image_path + bookId + ".jpg" : null}></img>
                </div>

                <div>
                    <Select conn={handleIdentityChange} defaultOption="訪客" options={Object.keys(identity_option)}></Select>
                </div>
                <div>
                    <p>原價:{price}元</p>
                    <p>售價:{price ? price * identity_option[identity] : ""}元</p>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Old_book_sell