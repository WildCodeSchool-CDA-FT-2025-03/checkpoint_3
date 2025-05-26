import { Col, Card, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Country } from "../../pages/Homepage";
import { useDeleteCountryMutation } from "../../types/graphql-generated";
import { Link } from "react-router-dom";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const [deleteCountry] = useDeleteCountryMutation();

  const handleDelete = () => {
    deleteCountry({ variables: { id: country.id } });
  };

  return (
    <Col xs={12} sm={8} md={6} lg={4} style={{ cursor: "pointer" }}>
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
          onClick={handleDelete}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            opacity: 0.7,
          }}
        />
        <Link to={`/country/${country.code}`}>
          <div style={{ marginBottom: "8px", fontWeight: 500, color: "black" }}>
            {country.name}
          </div>
          <div style={{ fontSize: "48px", lineHeight: "48px", color: "black" }}>
            {country.emoji}
          </div>
        </Link>
      </Card>
    </Col>
  );
}
