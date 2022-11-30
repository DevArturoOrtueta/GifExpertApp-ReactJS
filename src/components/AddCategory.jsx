import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value)
    }

    const onSubmit = (event) =>{

        if(inputValue.trim().length >= 2) {
            event.preventDefault();
            onNewCategory(inputValue.trim())
            // setCategories( [inputValue, ...categories])
            setInputValue('');
        }else{
            event.preventDefault();
        }
        
    }

  return (
    <form onSubmit={ onSubmit }>
       <input 
        type='text'
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
        /> 
    </form>
    
  )
}

// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequired,
//     categories: PropTypes.array.isRequired
// }

// AddCategory.defaultProps = {
//     categories: []
// }