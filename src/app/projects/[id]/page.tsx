import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate static params for all project IDs
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ProjectDetail() {
  return <ProjectDetailClient />;
} 