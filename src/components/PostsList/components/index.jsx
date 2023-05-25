import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import PostAvatarLink from "ui/PostAvatarLink"
import ButtonUi from "ui/Button"
import prepareText from "utils"
import { routeMain as routeUserDetail } from "pages/UserDetail"

const PostItem = ({item, text, count, handleClick, users}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const currentUser = users.find((user) => user.id === item.id)
        setUser(currentUser)
    }, [item.id, users])

    return (
        <li className="post__item">
            {user ? <Card className="post__card">
                <div className="post__card-left">
                    <PostAvatarLink
                        route={routeUserDetail(user.id)}
                        className="card__avatar"
                    />
                    <p className="post__card-username post__card-userInfo">{prepareText(user.username)}</p>
                    <p className="post__card-email post__card-userInfo">{user.email}</p>
                </div>
                <div className="post__card-right">
                    <Card.Body className="post__information">
                        <Card.Title className="post__title">
                            {prepareText(item.title)}
                        </Card.Title>
                        <Card.Text className="post__content">
                            {prepareText(item.body)}
                        </Card.Text>                        
                    </Card.Body>
                    <div className="post__card-actions">
                        <ButtonUi className="posts__button" onClick={handleClick} description={text}/>
                    </div>
                </div>                
            </Card> : <></>}
        </li>
    )
}

export default PostItem