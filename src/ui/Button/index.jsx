import { Button } from "react-bootstrap"

const ButtonUi = (props) => {
    return (
        <Button className={props.className} onClick={props.onClick}>{props.description}</Button>
    )
}

export default ButtonUi