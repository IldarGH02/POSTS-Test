const { default: CommentsItem } = require("./components")

const CommentsList = ({commentsList}) => {
    return (
        <ul className="comments__items">
            {commentsList.map((comment) => {
                return <CommentsItem 
                    user={comment} 
                    key={comment.id}
                />
            })}
        </ul>
    )
}

export default CommentsList

