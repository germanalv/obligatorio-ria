import { auth } from '../config/firebase';
import { signOut } from "firebase/auth";


const Logout = () => {
    const logOut = () => {
        signOut(auth)
    }
  return (
    <>
        <button 
            onClick={logOut}
            className='btn btn-outline-primary btn-sm'
        >
            <i className="fa-brands fa-google"></i> Logout
        </button>
    </>
  )
}

export default Logout