import React from "react";
import { ReactDOM } from "react-dom";
import Image from "next/image";
import { BsCode } from "react-icons/bs";
import nodejs from 'public/nodejs.png';
import next from 'public/nextjs.png';
import js from "public/js.png";
import git from "public/git.png";
import react from "public/react.png";
import npm from "public/npm.png";
import html from "public/html.png";
import css from "public/css.png";
import mongodb from "public/mongodb.png"
import sql from "public/sql.png"



export default function SkillsList() {
    return (
        <div className="bg-black rounded-lg shadow-2xl p-8">
            <h2 className="text-white text-3xl font-bold mb-4"> <BsCode /> Skills</h2>
            <div className="flex items-center relative space-x-4">
                <Image src={nodejs}
                    alt={"nodejs"}
                    height={60}
                    width={60} />
                <Image src={next}
                    alt={'nextjs'}
                    height={60}
                    width={60} />
                <Image src={js}
                    alt={'js'}
                    height={60}
                    width={60} />
                <Image src={git}
                    alt={'git'}
                    height={60}
                    width={60} />
                <Image src={react}
                    alt={'react'}
                    height={60}
                    width={60} />
                <Image src={npm}
                    alt={'npm'}
                    height={60}
                    width={60} />
                <Image src={html}
                    alt={'html'}
                    height={60}
                    width={60} />
                <Image src={css}
                    alt={'css'}
                    height={60}
                    width={60} />
                <Image src={mongodb}
                    alt={'mongodb'}
                    height={60}
                    width={60} />
                <Image src={sql}
                    alt={'sql'}
                    height={60}
                    width={60} />
            </div>
        </div>
    );
}