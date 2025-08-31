export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold text-purple-700">{item.titulo}</h2>
      <p className="text-sm text-gray-500">{item.ano}</p>
      <p className="text-yellow-500">⭐ {item.nota}</p>
    </div>
  );
}
