import { useState, useEffect, useContext } from 'react';
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const { cart, emptyCart, total, totalQuantity } = useContext(CartContext);

  const formHandler = (event) => {
    event.preventDefault();

    if (!name || !surname || !phone || !email || !emailConfirm) {
      setError("Please enter all the information above to continue!");
      return;
    }

    if (email !== emailConfirm) {
      setError("Please enter your email address again. The email and confirmation email do not match")
      return;
    }

    const order = {
      items: cart.map(product => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity
      })),
      total: total,
      date: new Date(),
      name,
      surname,
      phone,
      email
    };

      Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db, "inventario", productOrder.id);

        const productDoc = await getDoc(productRef);
        const stockNow = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockNow - productOrder.quantity
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), order)
          .then(docRef => {
            setOrderId(docRef.id);
            emptyCart();
          })
          .catch(error => {
            console.log("Something went wrong", error);
            setError("Something went wrong when creating the order")
          })
      })
      .catch((error) => {
        console.log("Can't update stock", error);
        setError("Can't update stock, try again");
        })

  }

  return (
    <div>
      <h2> Checkout </h2>

      <form onSubmit={formHandler}>
        {
          cart.map(product => (
            <div key={product.item.id}>
              <p> {product.item.name} x {product.quantity} </p>
              <p> {product.item.price} </p>
              <hr />
            </div>
          ))
        }

        <div>
          <label htmlFor=""> Name </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label htmlFor=""> Surname </label>
          <input type="text" onChange={(e) => setSurname(e.target.value)} />
        </div>

        <div>
          <label htmlFor=""> Phone </label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div>
          <label htmlFor=""> Email </label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor=""> Confirm Email </label>
          <input type="email" onChange={(e) => setEmailConfirm(e.target.value)} />
        </div>

        {
          error && <p style={({ color: "red" })}> {error} </p>
        }

        <button type="submit"> Confirm Purchase </button>

        {
          orderId && (
            <strong> Thanks for your purchase ;) Your order number is: {orderId} </strong>
          )
        }

      </form>
    </div>
  )
}

export default Checkout