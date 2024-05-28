import {auth} from '../config/firebase';
import { formatDate } from '../helpers';

const Message = ({ message }) => {
    let newStyle = 'text-start';
    if (auth.currentUser) {
      const user = auth.currentUser.uid;
      const newUser = message.uid;
      newStyle = user === newUser ? 'text-end' : 'text-start';
    }

    // const objMessage = message.text === '' ?
    //     {`<img style={{width: '50px', height:'50px'}} src={message.photo} className='rounded-circle border' alt="user photo" referrerPolicy='no-referrer'/>`} :
    //     `<div className='d-inline-flex bg-white p-2 rounded mt-2 shadow-sm'>{message.text}</div>`

    const date = new Date(message.timestamp?.seconds*1000);
    const options = { 
        month: 'long', 
        day: 'numeric' 
    };
    let h = date.getHours();
    let m = date.getMinutes();
    let time = h + ":" + m;
    const newDate = date.toLocaleDateString('es-UY', options);
    return ( 
        <>
        <article className={newStyle}>
            <div id='info' className=''>
                {
                    message.text === '' ?
                    <img style={{width: '100px', height:'100px'}} src={message.gifUrl} className='border rounded' alt="gif" referrerPolicy='no-referrer'/>
                    : 
                    <div className='d-inline-flex bg-white p-2 rounded mt-2 shadow-sm'>{ message.text }</div>
                }
                
                <p className="mt-3">{`${newDate} - ${time}`}</p>
            </div>
            <img style={{width: '50px', height:'50px'}} src={message.photo} className='rounded-circle border' alt="user photo" referrerPolicy='no-referrer'/>            
        </article>
        <hr />
        </>
        
     );
}
 
export default Message;