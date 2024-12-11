import React from "react";
function Contact() {
    return(
    <>
    <div className="contact" id="Cat">
    <div className="head">Contact Me</div>
        <div className="Con"><input type="text" placeholder="Name" className="name" />
        <input type="email"  placeholder="Email"/>
        <input type="number" name="" id="" placeholder="Number"/>
        <input type="text" placeholder="Message" className="message"/>
        <button type="submit">Submit</button></div>
        {/* <a href="https://api.whatsapp.com/send?phone=8987657654">8987657654</a> */}
    </div> </>)
}
export default Contact