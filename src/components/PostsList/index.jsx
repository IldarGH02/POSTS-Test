import PostItem from "./components"

const PostsList = ({list, text, count, handleClick, users}) => {
    return (
       <ul className="posts__items">
            {list.map((post) => {
                return <PostItem
                    item={post}
                    key={post.id}
                    text={text}
                    count={count}
                    handleClick={handleClick}
                    users={users}
                />
            })}
       </ul> 
    )
}

export default PostsList