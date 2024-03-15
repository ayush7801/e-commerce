import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
    });
    const changeHandler = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log("func")
        setShippingInfo((prev) => ({ ...prev, [e.target.name] : e.target.value,} ) );
    };
  return (
    <div className="shipping">
        <button>
            <BiArrowBack />
        </button>
        <form>
            <h1>Shipping Address</h1>
            <input required type="text" placeholder="Address" name="address" value={shippingInfo.address} onChange={changeHandler}/>
            <input required type="text" placeholder="City" name="city" value={shippingInfo.city} onChange={changeHandler}/>
            <input required type="text" placeholder="State" name="state" value={shippingInfo.state} onChange={changeHandler}/>
            <select required name="country" value={shippingInfo.country} onChange={changeHandler}>
                <option value="">Choose country</option>
                <option value="India">India</option>
            </select>
            <input required type="number" placeholder="Pin Code" name="pinCode" value={shippingInfo.pinCode} onChange={changeHandler}/>
            <button type="submit">Pay Now</button>
        </form>
    </div>
  )
}

export default Shipping