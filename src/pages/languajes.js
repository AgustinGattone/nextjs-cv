import React from "react";
import { TbLanguageHiragana } from "react-icons/tb";

const user = {
    userLanguajes: [{
        english: 'https://efset.org/cert/DK1rxo'
    }]
}

export default function Jobs(job) {
    return (
        <div className="bg-black rounded-lg shadow-2xl p-8">
            <h2 className="text-white text-3xl font-bold mb-4 tracking-in-expand"> <TbLanguageHiragana /> Languajes</h2>
            <h3 className="text-white text-1xl font-bold mb-4 tracking-in-expand">EF SET English Certificate 73/100 (C2 Proficient)</h3>
            <div className='col-span-2'>
                <div className='flex'>
                    {user.userLanguajes.map((languajes, index) => (
                        <a key={index} href={languajes.english} target="_blank" rel="noopener noreferrer">
                            <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700">
                                Certificate
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}