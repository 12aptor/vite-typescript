import { Fragment } from "react"
import { Outlet } from "react-router"
import { Header } from "../commons/Header"


export const MainLayout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}