export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Daniel Berneisch. All rights reserved.
        </p>
        <p className="mt-2">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
}
