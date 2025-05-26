import { useState } from "react";
import { Card, Input, Button, Row, Col, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface Country {
  name: string;
  emoji: string;
  code: string;
}

export default function App() {
  const [countries, setCountries] = useState<Country[]>([
    { name: "France", emoji: "🇫🇷", code: "FR" },
    { name: "China", emoji: "🇨🇳", code: "CN" },
    { name: "Canada", emoji: "🇨🇦", code: "CA" },
    { name: "Australia", emoji: "🇦🇺", code: "AU" },
    { name: "Kenya", emoji: "🇰🇪", code: "KE" },
    { name: "Brazil", emoji: "🇧🇷", code: "BR" },
  ]);

  const [newCountry, setNewCountry] = useState({
    name: "",
    emoji: "",
    code: "",
  });

  const handleAdd = () => {
    if (newCountry.name && newCountry.emoji && newCountry.code) {
      setCountries([...countries, newCountry]);
      setNewCountry({ name: "", emoji: "", code: "" });
    }
  };

  const handleDelete = (index: number) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#e91e63",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Title level={2} style={{ color: "white", margin: 0 }}>
          Checkpoint : frontend
        </Title>
        <Title
          level={3}
          style={{ color: "white", margin: "10px 0 0 0", fontWeight: "normal" }}
        >
          Countries
        </Title>
      </div>

      {/* Add Form */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Card style={{ marginBottom: "30px", borderRadius: "8px" }}>
          <Row gutter={16} align="middle">
            <Col span={7}>
              <div>
                <div style={{ marginBottom: "8px", fontWeight: 500 }}>Name</div>
                <Input
                  size="large"
                  value={newCountry.name}
                  onChange={(e) =>
                    setNewCountry({ ...newCountry, name: e.target.value })
                  }
                  placeholder="Country name"
                />
              </div>
            </Col>
            <Col span={7}>
              <div>
                <div style={{ marginBottom: "8px", fontWeight: 500 }}>
                  Emoji
                </div>
                <Input
                  size="large"
                  value={newCountry.emoji}
                  onChange={(e) =>
                    setNewCountry({ ...newCountry, emoji: e.target.value })
                  }
                  placeholder="🏳️"
                />
              </div>
            </Col>
            <Col span={7}>
              <div>
                <div style={{ marginBottom: "8px", fontWeight: 500 }}>Code</div>
                <Input
                  size="large"
                  value={newCountry.code}
                  onChange={(e) =>
                    setNewCountry({
                      ...newCountry,
                      code: e.target.value.toUpperCase(),
                    })
                  }
                  placeholder="XX"
                  maxLength={2}
                />
              </div>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                size="large"
                onClick={handleAdd}
                style={{
                  width: "100%",
                  backgroundColor: "#e91e63",
                  borderColor: "#e91e63",
                  marginTop: "22px",
                }}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Countries Grid */}
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
