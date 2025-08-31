export default function Tabs({ categorias, active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categorias.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            active === cat
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
