import React, { useState } from 'react'
import { Cantidad } from './styled';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const ItemCount = ({stock, initial, onAdd}) => { 
    const [contador, setContador] = useState(initial); 

    const restar = () => { 
        if(contador <= initial) {
            console.log("te pasaste por debajo del minimo")
            return;
        } else {
            setContador(contador - 1); 
        }
    }

    const aumentar = () => { 
        if(contador >= stock) {
            console.log("te pasaste del stock")
            return;
        } else {
            setContador(contador + 1);   
        }
    }

    const comprarItem = () => {
        onAdd(contador)
    }
    
    return (
        <>
        <Cantidad>
            <button onClick={restar}><HorizontalRuleIcon/></button>
            <input type="text" readOnly value={contador} />
            <button onClick={aumentar}><AddIcon/></button>
        </Cantidad>
        <button onClick={comprarItem}>Comprar</button>
        </>
    )
}

export default ItemCount