import React, { Component, useState } from "react";
import Select from "./component/Select";
import Axios from "axios";
import "./SellBook.css";
import { Redirect } from "react-router-dom";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const categories_subjects = {
  大一必修: ["交換電路與邏輯設計", "生物科學通論", "普通物理學甲"],
  大二必修: [
    "電子學(一)",
    "電磁學(一)",
    "工程數學-線性代數",
    "工程數學-微分方程",
  ],
  大三必修: ["演算法"],
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

const price_to_fee = {
  "": "0",
  200: "20",
  300: "30",
  500: "50",
  700: "70",
};

class SellBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        name: "",
        stuid: "",
        category: "",
        subject: "",
        price: "",
        others: "",
        fee: "",
      },
      captcha: "",
      is_fillsuccess: false,
      open_term: false,
    };
  }

  handleChildCurrentOptionChange = (dataname, currentOption) => {
    let newdata = this.state.data;
    newdata[dataname] = currentOption;
    this.setState({
      data: newdata,
    });
    // console.log(this.state.data);
  };

  handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let newdata = this.state.data;
    // console.log(newdata);
    newdata[name] = value;
    newdata.fee = price_to_fee[newdata.price];
    this.setState({
      data: newdata,
    });
    // console.log(this.state.data);
  };
  insertUser = (event) => {
    event.preventDefault();
    // console.log(this.state.captcha);
    if (this.state.data.category === "" || this.state.data.subject === "") {
      alert("Please fill the category/subject!");
      return;
    }
    Axios.post("https://book.ntuee.org/backend/captcha/checkcode.php", {
      captcha: this.state.captcha,
    }).then((data) => {
      console.log(data.data.success);
      if (data.data.success === 1) {
        console.log(data);
        Axios.post(
          "https://book.ntuee.org/backend/backEndSeller.php",
          this.state.data
        )

          .then((data) => {
            console.log(data);
            if (data.data.success === 1) {
              alert(data.data.msg);

              console.log(data);
              this.setState({
                is_fillsuccess: true,
              });
              // alert(data.msg)
            } else {
              alert(data.data.msg);
              console.log(data);
              this.setState({
                is_fillsuccess: false,
              });
              // alert(data.msg);
            }
          })
          .catch(function (error) {
            console.log(error);
            alert("發生錯誤\n" + error);
          });
      } else {
        alert("驗證碼錯誤\n");
        console.log(data);
      }
    });
  };

  refresh_code = (e) => {
    e.target.src = "https://book.ntuee.org/backend/captcha/captcha.php";
  };

  handleCaptchaChange = (e) => {
    this.setState(
      {
        captcha: e.target.value,
      },
      console.log(this.state)
    );
  };

  componentDidMount() {
    document.documentElement.style.setProperty(
      "--bg-image-pc",
      "var(--bg-image-yellow-pc)"
    );
    document.documentElement.style.setProperty(
      "--bg-image-mobile",
      "var(--bg-image-yellow-mobile)"
    );
  }
  render() {
    if (this.state.is_fillsuccess) {
      return (
        <Redirect
          to={{
            pathname: "/FillSuccess",
            state: {
              fee: price_to_fee[this.state.data.price],
            },
          }}
        />
      );
    } else {
      return (
        <div style={{ backgroundColor: "var(--primary-color-3)" }}>
          <div id="SellBook_container" className="page_container">
            <p id="FeedBack_title">填寫賣書表單</p>

            <div
              id="SellBook_box"
              className="container col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 mx-auto p-0 "
            >
              <form onSubmit={this.insertUser}>
                <ul id="SellBook_main_ul">
                  <li className="SellBook_li form-group">
                    <div>
                      <label for="fname">name:</label>
                      <span className="separator"></span>
                    </div>
                    <div className="col-3 col-sm-2 p-0">
                      <input
                        className="SellBook_box_input form-control p-0"
                        type="text"
                        id="name"
                        name="name"
                        maxlength="9"
                        required="required"
                        onChange={this.handleInputChange}
                        placeholder="ex:王XX"
                      />
                      <span className="separator"></span>
                    </div>
                  </li>

                  <li className="SellBook_li form-group">
                    <div>
                      <label for="stdId">Student ID:</label>
                      <span className="separator"></span>
                    </div>
                    <div className="col-5 col-sm-3 col-lg-2 p-0">
                      <input
                        className="SellBook_box_input form-control p-0"
                        type="text"
                        id="stdId"
                        name="stdId"
                        maxlength="9"
                        required="required"
                        onChange={this.handleInputChange}
                        placeholder="ex:b08900000"
                      />
                      <span className="separator"></span>
                    </div>
                  </li>
                  <li>
                    <label for="category">類別:</label>
                    <Select
                      id="Sellbook_category"
                      className="SellBook_box_select"
                      dataname="category"
                      conn={this.handleChildCurrentOptionChange}
                      defaultOption="Please Choose a category"
                      options={Object.keys(categories_subjects)}
                    />
                  </li>
                  <li>
                    <label for="category">科目:</label>
                    <Select
                      id="Sellbook_subject"
                      className="SellBook_box_select"
                      dataname="subject"
                      conn={this.handleChildCurrentOptionChange}
                      defaultOption="Please Choose a category_first"
                      options={
                        categories_subjects[this.state.data.category]
                          ? categories_subjects[this.state.data.category]
                          : []
                      }
                    />
                  </li>
                  <li>
                    <label>預覽圖</label>
                    <div className="d-flex justify-content-center my-3">
                      <img
                        src={
                          this.state.data.subject
                            ? img_source +
                              subjects_img_name[this.state.data.subject]
                            : null
                        }
                        alt={
                          this.state.data.subject
                            ? subjects_img_name[this.state.data.subject]
                            : ""
                        }
                        className="img-fluid"
                      />
                    </div>
                  </li>

                  <li>
                    書價：
                    <div className="d-flex justify-content-center">
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="price"
                            value="200"
                            onChange={this.handleInputChange}
                          />
                          <label className="form-check-label">200元</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="price"
                            value="300"
                            onChange={this.handleInputChange}
                          />
                          <label className="form-check-label">300元</label>
                        </div>
                      </div>
                      <div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="price"
                            value="500"
                            onChange={this.handleInputChange}
                          />
                          <label className="form-check-label">500元</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="price"
                            value="700"
                            onChange={this.handleInputChange}
                          />
                          <label className="form-check-label">700元</label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="SellBook_li form-group">
                    <div className="col-4 p-0">
                      <label>手續費:</label>
                    </div>
                    <div className="col-5 col-sm-3 col-md-2 p-0">
                      <input
                        className="SellBook_box_input form-control p-0"
                        id="SellBook_box_fee"
                        type="text"
                        name="fee"
                        readOnly
                        value={
                          this.state.data.price
                            ? price_to_fee[this.state.data.price] + "元"
                            : "請選擇書價"
                        }
                      />
                    </div>
                  </li>
                  <li className="SellBook_li form-group">
                    <div>
                      <label>其他事項：</label>
                      <span class="separator"></span>
                    </div>
                    <div className="col-12">
                      <input
                        className="SellBook_box_input form-control"
                        id="SellBook_box_others"
                        type="text"
                        name="others"
                        maxlength="70"
                        onChange={this.handleInputChange}
                        placeholder="請大略說明書況等相關信息"
                      />
                      <span class="separator"></span>
                    </div>
                  </li>
                  <li className="form-group">
                    <div>
                      <label>驗證碼</label>
                    </div>
                    <div className="col-8">
                      <input
                        id="SellBook_captcha"
                        className="SellBook_box_input form-control"
                        required="required"
                        name="captcha"
                        onChange={this.handleCaptchaChange}
                        placeholder="請輸入驗證碼"
                      />
                      <span class="separator"></span>
                    </div>
                    <div>
                      <img
                        src="https://book.ntuee.org/backend/captcha/captcha.php"
                        alt="captcha"
                        onClick={this.refresh_code}
                      />
                      <span class="separator"></span>
                      <p>看不清楚? 點擊圖片換下一張</p>
                    </div>
                  </li>
                  <div className="d-flex justify-content-auto">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="1"
                        name="condition"
                        required="required"
                      />
                      <label className="form-check-label" for="inlineCheckbox1">
                        我已同意二手書網站
                        <button
                          className="SellBook_terms_btn"
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ open_term: !this.state.open_term });
                          }}
                        >
                          條款
                        </button>
                      </label>
                    </div>
                  </div>
                  <div>
                    <SlideDown className={"my-dropdown-slidedown"}>
                      {this.state.open_term ? <Terms /> : null}
                    </SlideDown>
                  </div>
                </ul>

                <div className="d-flex justify-content-center my-1">
                  <button
                    id="SellBook_submit_btn"
                    className="btn"
                    type="submit"
                    onSubmit={this.insertUser}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SellBook;

const Terms = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <ol
      id="SellBook_terms"
      className="pt-2 pb-3 pl-1"
      style={{ listStyleType: "decimal" }}
    >
      <li>
        1.賣家必須先填賣書表單，其中書價
        <span className="text-danger">只有四種選擇</span>，分別為
        <ul className="pl-3">
          <li>700元：書況良好</li>
          <li>500元：有些許筆記痕跡</li>
          <li>300元：書本筆記稍多</li>
          <li>200元：書況較差</li>
        </ul>
      </li>
      <li>
        若賣家對賣書價格不確定，可以查看
        <button
          className="SellBook_terms_btn"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          賣書建議售價
        </button>
        來決定書籍售價
      </li>
      <SlideDown className={"my-dropdown-slidedown pl-3"}>
        {open ? <Recommend_price /> : null}
      </SlideDown>
      <li>
        2.若書本封面破損嚴重或是缺頁過多，二手書團隊有權利
        <span className="text-danger">拒收</span>
      </li>
      <li>
        3.填寫完賣書表單後按下送出鍵，系統會寄確認信至ntu信箱中，上面會提醒賣家在指定時間帶著學生證到指定地點繳交書籍
      </li>
      <li>4.賣家需在指定時間帶著學生證到指定地點交書</li>
      <li>5.若過了指定時間沒有到指定地點交書，視同未成功賣書。</li>
      <li>
        6.書本賣出後，會寄信通知賣家在指定時間帶著學生證到指定地點領取扣除手續費後的賣書錢。
      </li>
      <li>7.若書本沒有賣出，請在指定時間帶著學生證到指定地點領取退書。</li>
      <li>
        8.若賣書錢或退書在指定時間內未領取，請靜候二手書臉書專頁公告，擇日領取書錢或退書
      </li>
      <li>
        9.<b>電機二手書團隊擁有活動最終解釋權</b>
      </li>
    </ol>
  );
};

const Recommend_price = (props) => {
  return (
    <ul>
      <li>
        封面破損超過<span className="text-warning">1/3</span>
        、內頁缺頁以致內文遺失的課本 -{">"} 不收
      </li>
      <li>書本泡水 -{">"} 200元</li>
      <li>筆記雜亂 -{">"} 300元</li>
      <li>在習題旁邊寫答案 -{">"} 500元</li>
      <li>內頁有撕到 -{">"} 500元</li>
      <li>封面及內頁有汙損、折到 -{">"} 500元</li>
      <li>以上六項缺點皆沒有 -{">"} 700元</li>
    </ul>
  );
};
