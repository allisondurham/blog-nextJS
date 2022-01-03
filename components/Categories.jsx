import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, []);
    return (
        
        <div className="bg-white/90 shadow-lg rounded-lg p-8 mb-8 pb-12" >
        <Head>
            <title>A. Durham</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="cursor-pointer block pb-3 mb-3">
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
};

export default Categories
