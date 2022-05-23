import React from "react";


var style = "container";
var style_menu = "menu";
var style_links = "links";
var style_btn = "btn";


const Navbar = () =>{
    return <div>
    <div className={`${style}`}>
    <div className={`${style_menu}`}>
    <p style={{ color: "white"}}> LOGOBAKERY </p>
    <div className={`${style_links}`}>
    <a> Services </a>
    <a> Products </a>
    <a> About </a>
    </div>
      
      <button  className={`${style_btn}`}> Contact</button>

    </div>
  </div>
  </div>
}
export default Navbar;