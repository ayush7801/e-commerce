import { FaPlus } from "react-icons/fa";

type productProps = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    stock: number;
    handler: () => void;
}
const server = "fghjk";

const ProductCard = ({ productId, photo, name, price, stock, handler } : productProps) => {
  return (
    <div className="product-card">
        <img src={`${photo}`} alt={`${name} Image`}></img>
        <p>{name}</p>
        <span>₹{price}</span>

        <div>
            <button onClick={() => handler()}><FaPlus /></button>
        </div>
    </div>
  )
}

export default ProductCard