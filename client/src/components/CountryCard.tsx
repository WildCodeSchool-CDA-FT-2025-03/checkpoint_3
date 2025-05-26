import { Col, Card, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Country } from "../App";

type CountryCardProps = {
  country: Country;
  handleDelete: (index: number) => void;
  index: number;
};

export default function CountryCard({
  country,
  handleDelete,
  index,
}: CountryCardProps) {
  return (
    <Col xs={12} sm={8} md={6} lg={4}>
      <Card
        hoverable
        style={{
          textAlign: "center",
          borderRadius: "8px",
          position: "relative",
          cursor: "default",
        }}
        styles={{ body: { padding: "20px" } }}
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
  );
}
