import Login from './Login'
import Logout from './Logout'
import { auth } from '../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user] = useAuthState(auth);
  // console.log(user);
  
  const image = user ? user.photoURL : "/userImage.png";
  const name = user ? user.displayName : "";

  return (
    <div className='bg-light border rounded p-3'>
      <h1><i className="fa-solid fa-cat"></i>Chat</h1>
      <div className="card p-3">
        <img className="card-img-top border rounded" src={image} alt="user photo" referrerPolicy='no-referrer'/>
        <h6 className="card-title text-center pt-2">{name}</h6>
          {user ? <Logout/> : <Login/>}
      </div>
    </div>
  )
}

export default User