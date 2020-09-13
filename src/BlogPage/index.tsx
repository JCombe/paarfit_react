import React from 'react'
import BlogCard from '../BlogCard'
import './index.css'
import { handleLogout } from '../firebase'



export default function Blog() {



    return (
        <div className="">
            <div className="left__section">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
            <div className="right__section disable_on_small">
                Hallo World
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>

    )
}
