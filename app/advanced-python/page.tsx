"use client";
import React from "react";
import {Title, Divider} from "@mantine/core"
import { AdvancedPython } from "@/components/PythonSections"

const TypescriptPage = () => {
    return (
        <div className="flex flex-col m-4 gap-4">
        <div className='w-full'>
             <Divider
          orientation="horizontal"
          label={
            <Title order={2} c="pink.5">
              More advanced Python Plotly dash
            </Title>
          }
          w="100%"
          className="pt-4"
          c="pink.5"
          color="pink.5"
        />
        <div className='flex flex-col gap-4'>
        </div>
          <AdvancedPython/>
        </div>
        </div>
    )
}

export default TypescriptPage;