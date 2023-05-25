import UserPostsItem from "./components"

const UserPosts = ({postsList}) => {
    return (
        <ul className="user__posts">
            {postsList.map(post => {
                return <UserPostsItem post={post} key={post.id}/>
            })}
        </ul>
    )
}

export default UserPosts