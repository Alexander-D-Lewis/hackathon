"use client";
import React from "react";

import { PythonExamples, IntroToPython} from "@/components/PythonSections"

const PythonPage = () => {


    return (
        <div className="flex flex-col m-4 gap-4 max-w-screen">
        <IntroToPython/>
        <PythonExamples />
        </div>
    )
}

export default PythonPage;