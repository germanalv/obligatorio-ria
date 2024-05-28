import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import {auth, db} from '../config/firebase';
import { GifModal } from "./GifModal";

const SendMessage = ({ scroll }) => {
    
    const [input, setInput] = useState('');

    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const sendMessage = async (e) => {
        console.log(scroll);
        e.preventDefault();

        if( (input === '') && (selectedImageUrl === '') ){
            alert('Ingresar un mensaje válido');
            return;
        }
        
        const {uid, displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp(),
            gifUrl: selectedImageUrl
        }) 
        setInput('');
        setSelectedImageUrl('');
        console.log("Aca ajustaria el scroll");
        // scroll.current.scrollIntoView({behavior: 'smooth'})
        scroll.current.scrollTop = scroll.current.scrollHeight;
    }


    return ( 
        <form onSubmit={sendMessage} className="row">

            <div className="col-1">
                <GifModal onImageSelect={setSelectedImageUrl}/>
            </div>
            <div className="col-9">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Mensaje..." 
                    value={input} 
                    onChange={e=>setInput(e.target.value)} 
                />
            </div>
            <div className="col-2">
                <button className="btn btn-dark" type="submit" disabled={!input.trim()}>
                    Enviar <i className="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </form>
    );
}
 
export default SendMessage;