"use client";
import React from "react";
import { Statements } from "@/components/ProblemStatements";
import { Agenda } from "@/components/Agenda";
import { Resources } from "@/components/Resources";

const HomePage = () => {
  return (
    <div className="flex flex-col m-4 gap-4">
      <Agenda />
      <Statements />
      <Resources />
    </div>
  );
};

export default HomePage;
