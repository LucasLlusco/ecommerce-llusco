import React, { useState } from 'react'
import { Cantidad } from './styled';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantityToAdd, setQuantityToAdd] = useState(initial); 

    const restar = () => { 
        if(quantityToAdd <= initial) {
            console.log("te pasaste por debajo del minimo")
            return;
        } else {
            setQuantityToAdd(quantityToAdd - 1); 
        }
    }

    const aumentar = () => { 
        if(quantityToAdd >= stock) {
            console.log("te pasaste del stock")
            return;
        } else {
            setQuantityToAdd(quantityToAdd + 1);     
        }
    }


    const comprarItem = () => {
        onAdd(quantityToAdd)
    }
    
    return (
        <>
        <Cantidad>
            <button onClick={restar}><HorizontalRuleIcon/></button>
            <input type="text" readOnly value={quantityToAdd} />
            <button onClick={aumentar}><AddIcon/></button>
        </Cantidad>
        <button onClick={comprarItem}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount