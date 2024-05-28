import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
       
    };

    // const onSubmit = (event) => {
    //     event.preventDefault();

    //     if (inputValue.trim().length <= 1) return;

    //     //setCategories( categories => [inputValue, ...categories] );

    //     onNewCategory( inputValue.trim() );
    //     setInputValue('');
    // };

    const getCategories = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        
        <form aria-label="form">
        {/* Tambien se puede escribir asi: <form onSubmit={ onSubmit }> por el es el misom el parametro y el valor */}
            <div className="row">
                <div className="col-10">
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Buscar gifs"
                        value={inputValue} 
                        onChange={ onInputChange }
                    />
                </div>
                <div className="col-2">
                    
                    <button onClick={getCategories} className="btn btn-primary" >
                        Buscar
                    </button>

                </div>

            </div>
            
        </form>
        
    )
}