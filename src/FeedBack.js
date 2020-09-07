import React, { useEffect } from "react";
import "./FeedBack.css";
import Comment_section from "./component/Comment_section";

const FeedBack = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-image-pc",
      "var(--bg-image-green-pc)"
    );
    document.documentElement.style.setProperty(
      "--bg-image-mobile",
      "var(--bg-image-green-mobile)"
    );
  }, []);
  return (
    <div style={{ backgroundColor: "var(--primary-color-4)" }}>
      <div id="FeedBack_container" className="page_container">
        <p id="FeedBack_title">回饋/反應表單</p>
        {/* <p>嗨各位大家好，我們是EESHB團隊，希望大家會喜歡我們用課餘時間所建立的平台，有任何對頁面或制度的想法都歡迎透過以下留言或直接透過Email,FB聯繫我們喔，有任何問題我們會盡快處理</p> */}

        <Comment_section />
      </div>
    </div>
  );
};
export default FeedBack;
