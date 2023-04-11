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
import { motion } from "framer-motion";



export default function SkillsList() {
    return (
        <div className="bg-black rounded-lg shadow-2xl p-8 md:max-w-2xl">
            <h2 className="text-white text-3xl font-bold mb-4 "> <BsCode /> Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4" >

                <Image src={nodejs}
                    className="wobble-vertical-right"
                    alt={"nodejs"}
                    height={60}
                    width={60} />
                <Image src={next}
                    className="wobble-vertical-right"
                    alt={'nextjs'}
                    height={60}
                    width={60} />
                <Image src={js}
                    className="wobble-vertical-right"
                    alt={'js'}
                    height={60}
                    width={60} />
                <Image src={git}
                    className="wobble-vertical-right"
                    alt={'git'}
                    height={60}
                    width={60} />
                <Image src={react}
                    className="wobble-vertical-right"
                    alt={'react'}
                    height={60}
                    width={60} />
                <Image src={npm}
                    className="wobble-vertical-right"
                    alt={'npm'}
                    height={60}
                    width={60} />
                <Image src={html}
                    className="wobble-vertical-right"
                    alt={'html'}
                    height={60}
                    width={60} />
                <Image src={css}
                    className="wobble-vertical-right"
                    alt={'css'}
                    height={60}
                    width={60} />
                <Image src={mongodb}
                    className="wobble-vertical-right"
                    alt={'mongodb'}
                    height={60}
                    width={60} />
                <Image src={sql}
                    className="wobble-vertical-right"
                    alt={'sql'}
                    height={60}
                    width={60} />

            </div>
        </div>

    );
}