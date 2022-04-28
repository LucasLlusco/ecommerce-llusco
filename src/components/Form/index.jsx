import React, { useState } from 'react'
import { FormContainer, InputContainer } from './styled'
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 


const Form = ({cartItems, total}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [idVenta, setIdVenta] = useState("")
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("acaban de enviarse los datos de la compra")
        finalizarCompra(user)
    }
    const handlerChangeInputs = (target) => {
        setUser({...user, [target.name]: target.value});
    }
    console.log(user)
    const finalizarCompra = (user) => {
        const ventaCollection = collection(db, "Ventas") 
        addDoc(ventaCollection, { 
            user,
            items: cartItems,
            total: total,
            date: serverTimestamp()
        }).then((result) => {
            setIdVenta(result.id);
            console.log(result.id)
        });

    };

  return (
    <FormContainer onSubmit={handlerSubmit} onChange={({target}) => {handlerChangeInputs(target)}}>
        <InputContainer>
            <label>Nombre</label>
            <input type="text" name="name" value={user.name} />
        </InputContainer>
        <InputContainer>
            <label>Email</label>
            <input type="email" name="email" value={user.email} />
        </InputContainer>
        <InputContainer>
            <label>Telefono</label>
            <input type="number" name="phone" value={user.phone} />
        </InputContainer>
        <InputContainer>
            <input type="submit" value="finalizar compra" />
        </InputContainer>
        <p>id de tu orden: {idVenta}</p>
    </FormContainer>
  )
}

export default Form