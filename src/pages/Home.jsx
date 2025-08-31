import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import Tabs from "../components/Tabs";
import ItemCard from "../components/ItemCard";
import { mockItems, mockUser } from "../data/mockItems";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Filmes");

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <ProfileCard user={mockUser} />

      <div className="mt-4">
        <Tabs
          categorias={["Filmes", "Séries", "Livros", "Músicas", "Jogos"]}
          active={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <div className="mt-6 w-full max-w-md space-y-3">
        {mockItems
          .filter((item) => item.tipo === activeTab)
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
