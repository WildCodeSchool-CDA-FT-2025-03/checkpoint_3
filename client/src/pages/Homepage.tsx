import { Row } from "antd";
import Header from "../components/layout/Header";
import AddForm from "../components/home/AddForm";
import CountryCard from "../components/home/CountryCard";
import { useCountriesQuery } from "../types/graphql-generated";

export type Country = {
  id: number;
  name: string;
  emoji: string;
  code: string;
};

export default function Homepage() {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <AddForm />

        <Row gutter={[16, 16]}>
          {data?.countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </Row>
      </div>
    </div>
  );
}
