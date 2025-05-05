import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "42px", textTransform: "uppercase" };
  return (
    <div>
      <header className="header">
        <h1>Nardi React Pizza Co.</h1>
      </header>
    </div>
  );
}

function Menu() {
    const pizzas = pizzaData;
    //const pizzas = []
    const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>

    {numPizzas > 0 ? (
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizzaData.name} />
        ))}
      </ul>
    ): (
        <p>we are still working on our menu. Please come back later </p>
    )}




      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> 

      <Pizza
       name= "Pizza Funghi"
       ingredients= "Tomato, mozarella, mushrooms, and onion"
       price={12}
       photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);

//   yhie pizza keliele it wont be displayed return null slalnew
  if(props.pizzaObj.soldOut) return null; 
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName}></img>
      <li>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </li>
    </div>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(isOpen);

  console.log(currentHour);
  // if(currentHour>=openHour&&currentHour<=closeHour ? 'opened' : 'closed')
  //    if(currentHour>=openHour&&currentHour<= closeHour)alert("we are opened");
  //    else alert("sorry we'are closed")

//based on condition we can return more than one thing so this thing is true it wont render the component down
// if(!isOpen)
//     return (
//         <p>We are happy to welcome you between {openHour}:00 - {closeHour}:00</p>
//     );

  return (
    <>
      <footer className="footer">
        {/* {new Date().toLocaleTimeString()}. we are currently open!!! */}

        {/* short circuiting */}
        {/* {isOpen && (
            <div className="order">    
          <p>
            we are open untill {closeHour}:00. come and visit us or order online
          </p>
          <button className="btn">Order</button>
            </div>
        )} */}

        {/* terinary operator */}
        {isOpen ? (
            <div className="order">    
          <p>
            we are open untill {closeHour}:00. come and visit us or order online
          </p>
          <button className="btn">Order</button>
            </div>
        ): <p>We are happy to welcome you between {openHour}:00 - {closeHour}:00</p>}

      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
