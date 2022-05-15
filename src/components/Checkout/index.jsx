import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { context } from '../../context/CartContext';
import { CheckoutContainer, 
  Form,
  FormError,
  FormSuccess,
  FormSubmit,
  SubmitBtn
} from './styled'
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore'; 
import Input from '../Input';
import { ProductList, 
  Product, 
  ProductImg, 
  ProductName, 
  ProductPrice, 
  ProductQuantity,
  SummaryItems,
  SummaryTitle,
  SummaryItem,
  ProductDetails,
  Details,
  EmptyCartContainer
} from '../Cart/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Checkout = () => {
  const [name, setName] = useState({field: "", valid: null}); 
  const [email, setEmail] = useState({field: "", valid: null});
  const [phone, setPhone] = useState({field: "", valid: null});
  const [form, setForm] = useState(null);
  const [idVenta, setIdVenta] = useState("");

  const {cartItems, cartItemsQuantity, total, clear} = useContext(context)

  const regex = {
		name: /^[a-zA-ZÀ-ÿ\s]{2,21}$/, 
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ 
	}

  const onSubmit = (e) => { 
    e.preventDefault();
    if(name.valid === "true" && email.valid === "true" && phone.valid === "true" ) {
      const user = {
        name: name.field,
        email: email.field,
        phone: phone.field
      }
      finalizarCompra(user);
    } else {
      setForm(false);
    }
  }

  const finalizarCompra = (user) => { 
    const ventaCollection = collection(db, "Ventas");
    addDoc(ventaCollection, {  
      user,   
      items: cartItems, 
      total: total,
      date: serverTimestamp()
    }).then((result => {
      setIdVenta(result.id); 
      setForm(true);
      setName({field: "", valid: null});
      setEmail({field: "", valid: null});
      setPhone({field: "", valid: null});
      updateStock()
    }))
    .catch (error => { 
      console.log(error)   
    }) 
  }
  const updateStock =  () => {
    const productCollection = collection(db, "Productos");
      cartItems.forEach((element) => {
        const productStock = element.stock; 
        const productQuantity = element.quantity;
        const newProductStock = productStock - productQuantity;  
        const productId = element.id; 
  
        const docProductRef = doc(productCollection, productId); 
        updateDoc(docProductRef, { 
          stock: newProductStock,
        })
      })
      clear() 
  }
  return (
    <>
    {form ? ( 
      <FormSuccess>
        <CheckCircleIcon/>
        <h2>Los datos han sido enviados correctamente.</h2>
        <p>Este es el id de su compra: <b>{idVenta}</b></p>
        <p>Volver al <Link to={"/"}>ir al <b>inicio</b></Link></p>
      </FormSuccess>
    ) : (
      cartItems.length === 0 ? (
        <EmptyCartContainer>
          <ShoppingCartOutlinedIcon/>
          <h2>Aún no hay items en el carrito!</h2>
          <p>Agrega primero un producto al carrito para poder finalizar la compra.</p>
          <p>Volver al <Link to={"/"}>ir al <b>inicio</b></Link></p>
        </EmptyCartContainer>
      ) : (
        <CheckoutContainer>
          <Form onSubmit={onSubmit}>
            <Input
              state={name} 
              setState={setName} 
              type="text"
              label="Nombre"
              placeholder="Lucas"
              name="Nombre"
              error="El nombre solo puede contener letras, espacios y de 2 a 21 digitos."
              regex={regex.name} 
            />
            <Input
              state={email} 
              setState={setEmail} 
              type="email"
              label="Correo"
              placeholder="lucas.correo@gmail.com"
              name="Correo"
              error="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
              regex={regex.email}
            />
            <Input
              state={phone} 
              setState={setPhone} 
              type="text"
              label="Teléfono"
              placeholder="1130254040"
              name="Teléfono"
              error="El teléfono solo puede contener numeros y el maximo son 14 dígitos."
              regex={regex.phone}
            />
            {form === false && 
            <FormError> 
              <p>Los datos ingresados son inválidos y/o estan incompletos.</p>
            </FormError>
            }
            <FormSubmit>
              <SubmitBtn type="submit">Enviar</SubmitBtn>
            </FormSubmit>
          </Form>
          <ProductList>
            <SummaryTitle>Resumen de compra</SummaryTitle>
            {cartItems.map((product) => {
              return <Product key={product.id}>
                <ProductImg>
                  <img src={product.img} alt={product.name} />
                </ProductImg>
                <ProductDetails>
                  <Details>
                    <ProductName><b>Producto:</b> {product.name}</ProductName>
                    <ProductQuantity><b>Cantidad:</b> {product.quantity}</ProductQuantity>
                    <ProductPrice><b>P.unit</b> ${product.price}</ProductPrice> 
                  </Details>
                </ProductDetails>
              </Product>
            })}
            <SummaryItems inCheckout={"inCheckout"}>
              <SummaryItem><span>Productos</span><span>{cartItemsQuantity}</span></SummaryItem>
              <SummaryItem><span>Total</span><span>${total}</span></SummaryItem>
            </SummaryItems>
          </ProductList>
        </CheckoutContainer>
      )
    )}
    </>
  )
}

export default Checkout