import React from "react"
import { Outlet } from "react-router-dom"

import Search from "./Search"
import Categories from "./Categories"

const Template = () => {
    return (
        <>
            <Search/>
            <Categories/>
            <Outlet />
        </>
    )
}

export default Template