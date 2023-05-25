import prepareText from "utils"

const UserPostsItem = ({post}) => {
    return (
        <li className="user__post">
            <div className="user__post-card">
                <h4 className="user__post-title">{prepareText(post.title)}</h4>
                <p className="user__post-text">{prepareText(post.body)}</p>
            </div>
        </li>
    )
}

export default UserPostsItem