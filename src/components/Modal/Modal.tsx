import * as React from "react";
import * as C from "./styles";
interface Props {
children: React.ReactNode
}
export default function Modal({children}:Props) {
const closeModal = ():void =>{
  const modal = document.querySelector('#modal');
  modal?.classList.add('hide')

}

  return (
    <div id="modal">
      <C.Fade onClick={closeModal}> </C.Fade>
        <C.Modal>
          <C.Modalh2>textModal</C.Modalh2>
          {children}
        </C.Modal>
     
    </div>
  );
}
