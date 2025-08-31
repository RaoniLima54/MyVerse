export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center w-full max-w-md">
      <img
        src={user.avatar}
        alt="Foto de Perfil"
        className="w-20 h-20 rounded-full mx-auto mb-3"
      />
      <h1 className="text-xl font-bold text-purple-700">{user.nome}</h1>
      <p className="text-gray-600">{user.bio}</p>
    </div>
  );
}
