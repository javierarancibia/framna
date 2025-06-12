"use client";

import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  createdAt?: string;
  category?: string;
};

export default function Home() {

  return (
    <main>
      <div className="bg-white py-24 sm:py-32">
        <Hero />
        <ProjectList />
      </div>
    </main>
  );
}
