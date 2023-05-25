import { useState } from "react"
import { fetchInitialComments } from 'store/comments/actions'
import PostItem from "./components"
import ModalComments from "ui/Modal"
import { useDispatch, useSelector } from "react-redux"

const PostsList = ({list, text, users}) => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const {comment} = useSelector(state => state.comments)

    const handleShow = (id) => {
        setShow(true)
        dispatch(fetchInitialComments(id))
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
       <ul className="posts__items">
            <ModalComments
                show={show}
                handleClose={handleClose}
                commentsList={comment}
            />
            {list.map((post) => {                
                return <PostItem
                    item={post}
                    key={post.id}
                    text={text}
                    handleClick={() => handleShow(post.id)}
                    users={users}
                />
            })}
       </ul> 
    )
}

export default PostsList