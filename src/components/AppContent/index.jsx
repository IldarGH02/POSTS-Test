import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import PostsPage, { routeMain as routePostsPage } from "pages/PostsPage"
import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage"
import UserDetail, { routeMain as routeUserDetail } from "pages/UserDetail"
import Layout from "pages/Layout"
import Loader from "ui/Loader"

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