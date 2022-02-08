import { Fragment } from "react/cjs/react.production.min"
import stylesss from "./Headerr.module.css"
import backIhghgfghmage from '../../assets/meals.jpg'
import ChartButton from "./ChartHeaderButton";
const Headerr =(props) =>{
   
    return(
        <Fragment>
        
    <header className={stylesss.header}>
    <h1>Meals</h1>
     <ChartButton onConfirm={props.onConfirm}/>
    </header>

    <div className={stylesss['main-image']}>
    <img  src={backIhghgfghmage} alt="hgdhgdhgd"/>
    </div>
    
    </Fragment>
    );

}

export default Headerr;