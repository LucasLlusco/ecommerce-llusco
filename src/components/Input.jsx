import React from 'react'
import { 
    FormItem, 
    Label, 
    InputGroup, 
    FormInput, 
    IconValidation, 
    InputError, 
} from './Checkout/styled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

  const Input = ({state, setState, type, label, placeholder, name, error, regex}) => {
  const onChange = (e) => {
    setState({...state, field: e.target.value}); 
  }
  const validation = () => {
    if(state.field.length > 0) {
      if(regex) { 
        if(regex.test(state.field)) { 
          setState({...state, valid: "true"})
        } else {
          setState({...state, valid: "false"})
        }
      }
    } else { 
      setState({...state, valid: null})      
    }
  }
  return (
    <FormItem>
        <Label htmlFor={name} valid={state.valid}>{label} </Label>
        <InputGroup>
            <FormInput 
            type={type} 
            id={name} 
            placeholder={placeholder}
            value={state.field} 
            onChange={onChange} 
            onKeyUp={validation} 
            onBlur={validation}
            valid={state.valid} 
            />     
            <IconValidation valid={state.valid} > 
                {state.valid === "true" ? <CheckCircleIcon/> : <CancelIcon /> }
            </IconValidation>
        </InputGroup>
        <InputError valid={state.valid}>{error}</InputError>
    </FormItem>
  )
}

export default Input