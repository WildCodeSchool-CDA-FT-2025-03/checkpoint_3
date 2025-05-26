import { useState } from "react";
import { Card, Button, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

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
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "8px",
                  position: "relative",
                  cursor: "default",
                }}
                bodyStyle={{ padding: "20px" }}
              >
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  size="small"
                  onClick={() => handleDelete(index)}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    opacity: 0.7,
                  }}
                />
                <div style={{ marginBottom: "8px", fontWeight: 500 }}>
                  {country.name}
                </div>
                <div style={{ fontSize: "48px", lineHeight: "48px" }}>
                  {country.emoji}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
