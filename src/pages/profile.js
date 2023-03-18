import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import React from 'react';
import Image from 'next/image';
import profile from 'public/profile.jpg'

const user = {
    name: 'Agustin Gattone',
    position: 'Software Developer',
    userSocials: [{
        linkedIn: 'https://www.linkedin.com/in/agustin-gattone/',
        github: 'https://github.com/AgustinGattone',
        twitter: 'https://twitter.com/AgustinGattone'
    }]
};

export default function Profile() {
    return (
        <>
            <div className="bg-black rounded-lg shadow-2xl p-8 grid grid-cols-1 relative">
                <div className="flex items-center relative">
                    <Image
                        className="avatar"
                        src={profile}
                        alt={'Photo of ' + user.name}
                        width={90}
                        height={90}
                    />
                    <div className="absolute top-0 left-40 flex flex-col items-start">
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <h2 className="text-gray-500">{user.position}</h2>
                    </div>
                </div>
            </div>

            <div className='col-span-2'>
                <div className='flex flex-row-reverse space-x-4 space-x-reverse'>
                    {user.userSocials.map((social, index) => (
                        <a key={index} href={social.linkedIn} target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">
                                <BsLinkedin />
                            </button>
                        </a>
                    ))}
                    {user.userSocials.map((social, index) => (
                        <a key={index} href={social.github} target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">
                                <BsGithub />
                            </button>
                        </a>
                    ))}
                    {user.userSocials.map((social, index) => (
                        <a key={index} href={social.twitter} target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">
                                <BsTwitter />
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}