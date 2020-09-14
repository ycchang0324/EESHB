import React, { useState, useEffect } from "react";
import "./SellerStateBar.css";
import Select from "./Select";

const statesmap = {
  0: "尚未收到書",
  1: "已收到書",
  2: "沒有拿書過來",
  3: "已賣出",
  4: "沒賣出",
  5: "已領錢",
  6: "未領錢",
  7: "已退書",
  8: "未退書",
};

const colormap = {
  尚未收到書: "#FFB8BA",
  已收到書: "#E8B77B",
  沒有拿書過來: "#FFFFFF",
  已賣出: "#FFFA94",
  沒賣出: "#7BE88A",
  已領錢: "#9CEAFF",
  未領錢: "#C87FF0",
  已退書: "FFFFCD",
  未退書: "D2691E",
};

const SellerStateBar = (props) => {
  const [state, setState] = useState(props.state);
  useEffect(() => {
    document.getElementById(props.id + "_background").style.backgroundColor =
      colormap[state];
  }, [state]);

  const handleBgColorChange = (blank, newState) => {
    setState(newState);
    props.func(props.bookId, newState);
  };
  return (
    <Select
      id={props.id}
      options={Object.values(statesmap)}
      defaultOption={props.state}
      conn={handleBgColorChange}
      className="sellerStateBar_class"
    />
  );
};

export default SellerStateBar;
