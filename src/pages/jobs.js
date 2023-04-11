import React from "react";
import { MdWork } from "react-icons/md";
import DownloadButton from "./api/functions";


export default function Jobs(job) {
    return (
        <div className="bg-black rounded-lg shadow-2xl p-8">
            <h2 className="text-white text-3xl font-bold mb-4"> <MdWork /> Jobs</h2>
            <div>
                <h3 className="text-3xl font-bold tracking-in-expand">Builder Group Company</h3>
                <h4 className="text-gray-500 tracking-in-expand">FrontEnd Developer</h4>
            </div>
            <div>
                <h3 className="text-3xl font-bold tracking-in-expand">UNQ</h3>
                <h4 className="text-gray-500 tracking-in-expand">Intership Trainee</h4>
            </div>
            <div className="col-span-2">
                <DownloadButton />
            </div>
        </div>
    )
}