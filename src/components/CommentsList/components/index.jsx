import prepareText from "utils"

const CommentsItem = ({user}) => {
    return (
        <li className="comments__item">
            <div className="modal__user-information">
                <p className="modal__user-email">{user.email}</p>
            </div>
            <div className="modal__user-comment">
                <p className="modal__user-comment">
                    {prepareText(user.body)}
                </p>
            </div>
        </li>
    )
}

export default CommentsItem