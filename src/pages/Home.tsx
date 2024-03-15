import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"


const Home = () => {
    const handler = () => {
        throw new Error("Empty function");
    }
  return (
    <div className="homepage">
        <section></section>
        <h1>
            Latest Products
            <Link to="/search" className="findmore">
                More
            </Link>
        </h1>
        <main>
            <ProductCard name="Macbook" handler={handler} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" price={200005} productId="tfyuijk" stock={6}></ProductCard>
        </main>
    </div>
  )
}

export default Home