import BlogDetailClient from "./BlogDetailClient";

// Generate static params for all blog IDs
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function BlogDetail() {
  return <BlogDetailClient />;
} 