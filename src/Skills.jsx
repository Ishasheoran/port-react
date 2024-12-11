import React from "react";
import reactLogo from './assets/react.svg'
import bootstrap from './assets/bootstrap.webp'
import css from './assets/css.webp'
// import html from ".assets/html.webp"
function Skill(){
    return<>
    <div className="skill" id="Ski">
    <div className="head">Skills </div>
<div className="pic"><img src={css} alt="" srcset="" />
<img src={bootstrap} alt="" srcset="" />
<img src={reactLogo} alt="" srcset="" /></div>
    </div>  </>
}
export default Skill