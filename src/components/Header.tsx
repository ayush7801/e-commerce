import { useEffect, useRef, useState } from "react";
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
    const user = {_id: "gghj", role: ""};
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHandledClick, setIsHandledClick] = useState<boolean>(false);
    const boxRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            setIsHandledClick(true);
          } else {
            document.removeEventListener('mousedown', handleClickOutside);
            setIsHandledClick(false);
          }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const logoutHandler = () => {
        throw new Error("Function not implemented.");
    }

  return (
    <nav className="header">
        <Link to={'/'}>HOME</Link>
        <Link to={'/search'}><FaSearch /></Link>
        <Link to={'/cart'}><FaShoppingBag /></Link>
        {
        user?._id ? 
        <>
            <button onClick={() => {!isHandledClick && setIsOpen((prev) => !prev)}}>
                <FaUser />
            </button>
            <dialog open={isOpen} ref={boxRef}>
                <div>
                    {user.role === "admin" && <Link to="/admin/dashboard">Admin</Link>}
                    <Link to="/orders">Orders</Link>
                    <button onClick={logoutHandler}> <FaSignOutAlt /> </button>
                </div>
            </dialog>
        </> : 
        <Link to={'/login'}><FaSignInAlt /></Link>
        }
    </nav>
  )
}

export default Header