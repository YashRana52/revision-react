import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.github.com/users/YashRana52')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, [])

    return (
        <div className='text-center m-4 bg-gray-700 text-white p-6 rounded-lg'>
            <img src={data.avatar_url} alt="gitpic" className='w-32 h-32 rounded-full mx-auto mb-4' />
            <h1 className='text-3xl font-bold'>{data.name} (@{data.login})</h1>
            <p className='text-gray-300'>{data.bio}</p>
            <p className='mt-2'>📍 {data.location}</p>
            <p className='mt-1'>🗓 Joined: {new Date(data.created_at).toDateString()}</p>
            <div className='flex justify-center gap-6 mt-4'>
                <span>👥 Followers: {data.followers}</span>
                <span>👤 Following: {data.following}</span>
                <span>📦 Repos: {data.public_repos}</span>
            </div>
            <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className='inline-block mt-4 text-blue-400 underline'
            >
                🔗 Visit GitHub Profile
            </a>
        </div>
    )
}

export default Github;
