import Link from "next/link";

const examples = [
  {
    title: "Infinite Carousel",
    description: "",
    path: "/examples/infinite-carousel",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Useful Code Examples</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <Link
            key={example.path}
            href={example.path}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{example.title}</h2>
            <p className="text-gray-600">{example.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
