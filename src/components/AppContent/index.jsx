import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

// import PostsPage from "pages/PostsPage"
import { routeMain as routeAboutPage } from "pages/AboutPage"
import { routeMain as routeUserDetail } from "pages/UserDetail"
import Layout from "pages/Layout"
import Loader from "ui/Loader"

const PostsPage = lazy(() => import('pages/PostsPage'));
const UserDetail = lazy(() => import('pages/UserDetail'));
const AboutPage = lazy(() => import('pages/AboutPage'));

const AppContent = () => {
    return (
        <div className="mainWrapper">
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<PostsPage/>}/>
                        <Route path={routeAboutPage()} element={<AboutPage/>}/>
                        <Route path={routeUserDetail()} element={<UserDetail/>}/>
                        <Route/>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppContent