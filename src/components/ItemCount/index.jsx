import React, { useState } from 'react'
import { Quantity, AddToCartBtn, DecreaseBtn, IncreaseBtn } from './styled';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const ItemCount = ({stock, initial, onAdd}) => { 
    const [quantityToAdd, setQuantityToAdd] = useState(initial);
    const decrease = () => { 
        if(quantityToAdd <= initial) {
            return;
        } else {
            setQuantityToAdd(quantityToAdd - 1); 
        }
    }

    const increase = () => { 
        if(stock < 0  || quantityToAdd >= stock) {
            return;
        } else {
            setQuantityToAdd(quantityToAdd + 1);     
        }
    }

    const addItem = () => {
        if(stock >= 1) { 
            onAdd(quantityToAdd)
        } 
    }
    
    return (
        <>
        <Quantity>
            <DecreaseBtn onClick={decrease}><HorizontalRuleIcon/></DecreaseBtn>
            <input type="text" readOnly value={quantityToAdd} />
            <IncreaseBtn onClick={increase}><AddIcon/></IncreaseBtn>
        </Quantity>
        <AddToCartBtn onClick={addItem}>Agregar al carrito</AddToCartBtn>
        </>
    )
}

export default ItemCount