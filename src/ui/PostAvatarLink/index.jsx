import Card from "react-bootstrap/Card"
import avatar from 'assets/images/avatar.png'
import { Link } from "react-router-dom"

const PostAvatarLink = (props) => {
    return (
        <Link className="card__link" to={props.route}>
            <Card.Img variant="left" src={avatar} className={props.className}/>
        </Link>
    )
}

export default PostAvatarLink