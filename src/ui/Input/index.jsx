import Form from 'react-bootstrap/Form'

const Input = (props) => {
    return (
        <Form.Control className={props.input} type={props.type} placeholder={props.placeholder} onChange={props.onChange} defaultValue={props.value}/>
    )
}

export default Input