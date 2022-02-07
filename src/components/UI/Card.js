import stylesss from './Card.module.css'

const Card =(props) =>{
return(
    <div className={stylesss.card}>{props.children}</div>
    
    );
};

export default Card;
