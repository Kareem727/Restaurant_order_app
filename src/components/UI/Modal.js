
import stylesss from './Modal.module.css'
import ReactDOM from 'react-dom';
import { Fragment } from 'react/cjs/react.production.min';

const BackDroop = (props) =>{
    return(
        <div className={stylesss.backdrop}  onClick={props.onClose}/>
    );
  };

  const ModalOverLay = (props) =>{
   return(
       <div className={stylesss.modal}>
           <div className={stylesss.content}>{props.children}</div>
       </div>
   );
  };

  const overLayRoot = document.getElementById('overLay');


const Modal = (props) =>{

return(
    <Fragment>
        {ReactDOM.createPortal(<BackDroop   onClose={props.onClose} />, overLayRoot )}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, overLayRoot)}
    </Fragment>
); 
}

export  default Modal; 