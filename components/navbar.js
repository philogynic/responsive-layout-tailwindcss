export default function Navbar() {
  return (
    <div className="p-6 sticky top-0 flex max-w-4xl mx-auto justify-between items-center bg-gray-100 border-b-2 bg-opacity-90 z-10">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="text-gray-700 text-2xl font-bold">chbimo.io</div>
      <div className="flex space-x-4">
        <div className="text-gray-700">about</div>
        <div className="text-gray-700">login</div>
      </div>
    </div>
  );
}
