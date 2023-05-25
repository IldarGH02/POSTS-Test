import { useEffect, useState } from 'react'
import { routeMain } from './routes'

import { useDispatch, useSelector } from 'react-redux'

import PageTitle from 'components/PageTitle'
import PostsList from 'components/PostsList'
import Loader from 'ui/Loader'
import ModalComments from 'ui/Modal'

import { fetchInitialData, searchPosts } from 'store/posts/actions'
import { fetchInitialComments } from 'store/comments/actions'
import { fetchInitiaUsers } from 'store/users/actions'
import SearchPost from 'components/SearchPost'

const PostsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    const {comment} = useSelector(state => state.comments) 
    const postsList = useSelector(state => {
        const {posts, searchValue} = state.posts
        if(!searchValue) return posts

        return posts.filter((post) => post.title.includes(searchValue))
    })    

    const commentsCount = comment.length    

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchInitialData())
            dispatch(fetchInitiaUsers())
            if(postsList) {
                setIsLoading(true)
            }
        }, 500);
        dispatch(searchPosts(value))
    }, [dispatch, value])

    if(!isLoading) {
        return (
            <Loader/>
        )
    }

    const handleShow = () => {
        setShow(true)
        dispatch(fetchInitialComments(1))
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (e) => {
        const target = e.target.value
        setValue(target)
    }

    const handleClean = () => {
        setValue('')
    }

    return (
        <section className="posts">
            <div className="container">
                <div className="posts__content">
                    <PageTitle
                        class='posts__title'
                        title='Список постов'
                    />
                    <SearchPost
                        handleChange={(e) => handleChange(e)}
                        value={value}
                        handleClick={handleClean}
                    />
                    <PostsList 
                        list={postsList} 
                        text='Комментарии' 
                        count={commentsCount} 
                        handleClick={handleShow}
                        users={users}
                    />

                    <ModalComments
                        show={show}
                        handleClose={handleClose}
                        commentsList={comment}
                    />
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default PostsPage