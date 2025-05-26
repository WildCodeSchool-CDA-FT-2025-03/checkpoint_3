import { useState } from "react";
import { Row } from "antd";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import CountryCard from "./components/CountryCard";

export type Country = {
  name: string;
  emoji: string;
  code: string;
};

export default function App() {
  const [countries, setCountries] = useState<Country[]>([
    { name: "France", emoji: "🇫🇷", code: "FR" },
    { name: "China", emoji: "🇨🇳", code: "CN" },
    { name: "Canada", emoji: "🇨🇦", code: "CA" },
    { name: "Australia", emoji: "🇦🇺", code: "AU" },
    { name: "Kenya", emoji: "🇰🇪", code: "KE" },
    { name: "Brazil", emoji: "🇧🇷", code: "BR" },
  ]);

  const handleDelete = (index: number) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <AddForm setCountries={setCountries} />

        <Row gutter={[16, 16]}>
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
