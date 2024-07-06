import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");

  const products = [
    {id:101, name: "JBL Live 770NC", price: 11999, image: "/assets/images/770NC.png"},
    {id:102, name: "JBL Live 660NC", price: 14999, image: "/assets/images/660NC.png"},
    {id:103, name: "Sennheiser momentum 4 wireless", price: 24999, image: "/assets/images/momentum4.jpg"},
    {id:104, name: "JBL Tour One", price: 24999, image: "/assets/images/Tour_one.png"},
    {id:105, name: "Marshell Monitor 2", price: 23999, image: "/assets/images/monitor_2.jpeg"},
    {id:106, name: "Sony WH-10000 XM-4", price: 22999, image: "/assets/images/xm4.jpg"},
    {id:107, name: "Sony WH-10000 XM-5", price: 11999, image: "/assets/images/xm5.jpg"},
    {id:108, name: "Sennheiser HD", price: 19999, image: "/assets/images/shd.jpg"}
  ]

  const divStyle = {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
  }

  const mainStyle ={
    maxWidth: "1110px",
    margin: "auto",
  }

  return (
    <main style={mainStyle}>
      <div style={divStyle}>
        {
          products.map(eachProd => (
            <ProductCard key={eachProd.id} eachProd={eachProd}/>
          ))
        }
      </div>
    </main>
  )
}
