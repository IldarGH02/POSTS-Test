import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { routeMain } from "./routes"
import User from "components/User"
import PageTitle from "components/PageTitle"
import { fetchInitialUserPosts } from "store/userPosts/actions"
import UserPosts from "components/UserPosts"
import Loader from "ui/Loader"

const UserDetail = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {users} = useSelector(state => state.users)
    const {userPosts} = useSelector(state => state.userPosts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const currentUser = users.find((user) => (user.id).toString() === id)
        setUser(currentUser)  
        setTimeout(() => {
            dispatch(fetchInitialUserPosts(currentUser.id))
            if(userPosts) {
                setIsLoading(true)
            }
        }, 500) 
    }, [dispatch, id, users])

    if(!isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <section className="user">
            <div className="container">
                <div className="user__content">
                    <PageTitle class='user__title' title={`Пользователь: ${user?.username}`}/>
                        {user ? <User
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        website={user.website}

                        city={user.address.city}
                        street={user.address.street}
                        suite={user.address.suite}

                        company={user.company.name}
                        position={user.company.catchPhrase}
                    
                    /> : <></>}
                    <PageTitle class='user__posts-title' title='Посты пользователя'/>
                    <UserPosts postsList={userPosts}/>
                </div>
            </div>
        </section>
    )
}

export { routeMain }

export default UserDetail