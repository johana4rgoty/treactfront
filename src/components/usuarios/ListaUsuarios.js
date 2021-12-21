 import React from "react";
// // import {faClock, faCheckCircle, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
// // import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const ListaUsuarios = ({usuaris}) =>  {

// const ListaUsuarios = ({ usuarios, onDelete, onEdit }) => {
   return (
     <>
       <h3 className="mb-3">Mi lista de usuarios</h3>
       {
           usuaris.map(usuario=>
            <div className="mb-3 border rounded p-3" key={usuario._id}>
                {usuario.nombre}
            </div>
            )
       }

    
     </>
   );
 }
 export default ListaUsuarios;
/* <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={()=> onEdit(usuario)}/> 
<FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2" onClick={()=> onDelete(usuario)}/> */