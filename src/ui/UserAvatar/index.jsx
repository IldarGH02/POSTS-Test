import Card from "react-bootstrap/Card"
import avatar from 'assets/images/avatar.png'

const UserAvatar= (props) => {
    return (
        <Card.Img variant="left" src={avatar} className={props.className}/>
    )
}

export default UserAvatar