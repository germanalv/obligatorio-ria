import { useState } from "react";
import { GifExpertApp } from "./gif/GifExpertApp";

export const GifModal = ({ onImageSelect }) => {
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const handleImageSelect = (url) => {
        setSelectedImageUrl(url);
        onImageSelect(url); // Actualiza el estado en SendMessage
    };


    
  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i className="fa-solid fa-face-laugh-squint"></i>
    </button>

    
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">

            <div className="modal-content">

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">GIFS</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    {selectedImageUrl && (
                        <div className="row">
                            <div className="col-10">
                                <h4>Imagen seleccionada:</h4>
                                <img src={selectedImageUrl} alt="Seleccionada" />
                            </div>
                            <div className="col-2">
                                <button className="btn btn-dark" data-bs-dismiss="modal">Enviar GIF</button>
                            </div>
                        </div>
                    )}
                    <GifExpertApp onImageSelect={handleImageSelect} />
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
