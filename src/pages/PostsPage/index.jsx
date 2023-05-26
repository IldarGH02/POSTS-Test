import { useEffect, useState } from 'react'
import { routeMain } from './routes'

import { useDispatch, useSelector } from 'react-redux'

import PageTitle from 'components/PageTitle'
import PostsList from 'components/PostsList'
import Loader from 'ui/Loader'

import { fetchInitialData, searchPosts } from 'store/posts/actions'
import { fetchInitiaUsers } from 'store/users/actions'
import SearchPost from 'components/SearchPost'

const PostsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const {users} = useSelector(state => state.users)
    const postsList = useSelector(state => {
        const {posts, searchValue} = state.posts
        if(!searchValue) return posts

        return posts.filter((post) => post.title.includes(searchValue))
    })

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

    const handleChange = (e) => {
        const target = e.target.value
        setValue(target)
    }

    
    const handleClear = () => {
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
                        handleChange={handleChange}
                        handleClick={handleClear}
                        value={value}
                    />
                    <PostsList 
                        list={postsList.slice(0, users.length)} 
                        text='Комментарии'
                        users={users}
                    />
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default PostsPage