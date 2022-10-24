
import { Form } from "react-bootstrap"

export const InputForm = ({label,  text, value, onChange, type})=>{
    return(
     
            <Form.Group className="formGroup">
                <Form.Label> {label} </Form.Label>
                <Form.Control 
                    type={type} 
                    value={value}
                    onChange={onChange}
                    />
                <Form.Text> {text} </Form.Text>
            </Form.Group>
    )
}
