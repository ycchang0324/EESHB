import React, { useState, useEffect } from "react";
import Select from "./component/Select";
// import Rolling_Number from './component/Rolling_Number'
import axios from "axios";
import "./BuyBook.css";

const categories_subjects = {
  大一必修: ["交換電路與邏輯設計", "生物科學通論", "普通物理學甲"],
  大二必修: [
    "電子學(一)",
    "電磁學(一)",
    "工程數學-線性代數",
    "工程數學-微分方程",
  ],
  大三必修: ["演算法"],
  //"選修": ["無"],
  //"其他選修": ["無"]
};

const img_source = "https://book.ntuee.org/textbook_image/";

const subjects_img_name = {
  普通物理學甲: "physics.jpg",
  生物科學通論: "biology.jpg",
  交換電路與邏輯設計: "logic_design.jpg",
  "工程數學-線性代數": "linear_algebra.jpg",
  "工程數學-微分方程": "differential_equations.jpg",
  "電子學(一)": "electronics.jpg",
  "電磁學(一)": "electromagnetism.jpg",
  演算法: "algorithm.jpg",
};

const BuyBook = () => {
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [dataFromBackEnd, setDataFromBackEnd] = useState({
    "": [0, 0, 0, 0],
    交換電路與邏輯設計: [0, 0, 0, 0],
    生物科學通論: [0, 0, 0, 0],
    普通物理學甲: [0, 0, 0, 0],
    "電子學(一)": [0, 0, 0, 0],
    "電磁學(一)": [0, 0, 0, 0],
    "工程數學-線性代數": [0, 0, 0, 0],
    "工程數學-微分方程": [0, 0, 0, 0],
    演算法: [0, 0, 0, 0],
  });

  const handleSelectChange = (dataname, option) => {
    if (dataname === "category") {
      setCategory(option);
    } else if (dataname === "subject") {
      setSubject(option);
    }
  };
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-image-pc",
      "var(--bg-image-orange-pc)"
    );
    document.documentElement.style.setProperty(
      "--bg-image-mobile",
      "var(--bg-image-orange-mobile)"
    );

    axios
      .post("https://book.ntuee.org/backend/buyBookPage.php", {})
      .then(function (data) {
        // console.log(subject)
        // console.log(data.data)
        // console.log(data.data[subject])
        setDataFromBackEnd(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "var(--primary-color-2)" }}>
      <div
        id="BuyBook_container"
        className="container-fluid p-0 page_container"
      >
        <h1>剩餘書籍</h1>

        <form id="form1" className="container">
          <div
            id="BuyBook_search_bar_category"
            className="BuyBook_search_bar mt-5 mx-auto col-12 col-lg-10 p-0"
          >
            <Select
              id="BuyBook_categories"
              defaultOption="Choose Your Grade "
              options={Object.keys(categories_subjects)}
              conn={handleSelectChange}
              dataname="category"
            />
          </div>
          <div
            id="BuyBook_search_bar_subject"
            className="BuyBook_search_bar mt-5  mx-auto col-12 col-lg-10 p-0"
          >
            <Select
              id="BuyBook_subjects"
              defaultOption="Choose Your Grade First"
              options={
                categories_subjects[category]
                  ? categories_subjects[category]
                  : []
              }
              conn={handleSelectChange}
              dataname="subject"
            />
          </div>
        </form>
        <div
          className="justify-content-center my-3"
          style={{ display: subject ? "flex" : "none" }}
        >
          <img
            src={subject ? img_source + subjects_img_name[subject] : null}
            alt={subject ? subjects_img_name[subject] : ""}
            className="img-fluid"
          />
        </div>
        <div
          id="BuyBook_box"
          className="d-md-flex d-block col-md-10 col-lg-9 col-xl-7 justify-content-center mx-auto mt-2"
        >
          <div className="col-md-6 p-0 col-10 mx-auto">
            <div id="BuyBook_200" className="BuyBook_price col-12">
              $200
              <Rolling_Number
                price="200"
                num={
                  dataFromBackEnd[subject][0] ? dataFromBackEnd[subject][0] : 0
                }
              />
              <span className="Rolling_Number_text">本</span>
            </div>
            <div id="BuyBook_300" className="BuyBook_price col-12">
              $300
              <Rolling_Number
                price="300"
                num={
                  dataFromBackEnd[subject][1] ? dataFromBackEnd[subject][1] : 0
                }
              />
              <span className="Rolling_Number_text">本</span>
            </div>
          </div>
          <div className="col-md-6 p-0 col-10 mx-auto">
            <div id="BuyBook_500" className="BuyBook_price col-12">
              $500
              <Rolling_Number
                price="500"
                num={
                  dataFromBackEnd[subject][2] ? dataFromBackEnd[subject][2] : 0
                }
              />
              <span className="Rolling_Number_text">本</span>
            </div>
            <div id="BuyBook_700" className="BuyBook_price col-12">
              $700
              <Rolling_Number
                price="700"
                num={
                  dataFromBackEnd[subject][3] ? dataFromBackEnd[subject][3] : 0
                }
              />
              <span className="Rolling_Number_text">本</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyBook;

const Rolling_Number = (props) => {
  // const [num, setNum] = useState(props.num)
  const readNum = () => {
    let rolling_num = document.getElementById(
      "Rolling_Number_num_" + props.price
    );
    if (rolling_num !== undefined && rolling_num !== null) {
      // alert(console.log(rolling_num))
      let height = rolling_num.offsetHeight;
      // alert(height)
      rolling_num.style.top =
        "calc( -0.5rem - " + (height + 10) * props.num + "px)";
      // rolling_num.style.color = "black"
    }
  };
  // useEffect(() => {
  //     readNum()
  // }, [props.num])
  readNum();
  return (
    <div
      id="Rolling_Number_container"
      className="d-flex justify-content-center mx-auto"
    >
      <span
        id={"Rolling_Number_num_" + props.price}
        className="Rolling_Number_num"
      >
        0 1 2 3 4 5 6 7 8 9
      </span>
    </div>
  );
};
