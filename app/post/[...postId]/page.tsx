"use client";
import axios from "axios";
import { useState, useEffect } from "react";

// ideally we should use getServerSideProps to fetch data from an API
// but here we are using useEffect to fetch data from an API
// so that we can show how to use params in Next.js
// getServerSideProps is used to fetch data from an API at build time
// useEffect is used to fetch data from an API at runtime

export default function postHome({params}: {params: {postId: string[]}}) {

    return <div>
        <h1>Blog post {params.postId}</h1>
    </div>
//Error:    A param property was accessed directly with `params.postId`. `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap `params` with `React.use()`.

/*    const [blog, setBlog] = useState([]);
    const blogId = params.postId;
    // params is an object with key postId and value as an array of strings
    //params is a promise object, so we need to use params.postId to get the value
    console.log("params is promise: " + JSON.stringify(params));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    blogId.map((id) => axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`))
                );
                const data = responses.map(response => response.data);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [blogId]);

    return (
        <div>
            <div>
                <h4>Blog</h4>
                <p>{blogId.length >1 ? "Multiple" : "Single"}</p>
                {JSON.stringify(blogId)}
            </div>
            {blog.map((post, index) => (
                <div key={index}>
                    <h4><b>{post.title}</b></h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
*/
    }