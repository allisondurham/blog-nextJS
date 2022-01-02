import React from 'react';
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className="bg-white/90 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-top absolute h-80 w-full object-cover object-center shadow-lg rounded-t-lg lg:rounded-lg"
                />
            </div>
            <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-lime-700 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-gray-700 ml-2 text.lg">{post.author.name}</p>
                </div>
                <div className="flex items-center justify-center font-medium text-gray-700">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    </svg>
                    <span className="ml-2">
                        {moment(post.createdAt).format("MMM DD, YYYY")}
                    </span>
                </div>
            </div>
            <p className=" text-lg text-gray-700 font-normal px-6 lg:px-20 mb-8">{post.excerpt}</p>
            <div className="text-center">
                <Link href={`/post/${post.slug}`}>
                    <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-lime-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                        Continue Reading
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard