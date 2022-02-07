

import stylesss from './ChartHeaderButton.module.css'

const ChartButton =(props) =>{
return(
    <button className={stylesss.button}>
        <span className={stylesss.icon}><i class="fas fa-shopping-cart"></i></span>
        <span>Chart</span>
        <span className={stylesss.badge} > 1</span>
    </button>
);

}

export default ChartButton;

