import { Col, Row, Card, Input, Button } from "antd";
import { useState } from "react";
import { useAddCountryMutation } from "../types/graphql-generated";

export default function AddForm() {
  const [addCountry] = useAddCountryMutation();

  const [newCountry, setNewCountry] = useState({
    name: "",
    emoji: "",
    code: "",
  });

  const handleAdd = () => {
    if (newCountry.name && newCountry.emoji && newCountry.code) {
      addCountry({
        variables: {
          data: {
            name: newCountry.name,
            emoji: newCountry.emoji,
            code: newCountry.code,
          },
        },
      });
      setNewCountry({ name: "", emoji: "", code: "" });
    }
  };

  return (
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
            <div style={{ marginBottom: "8px", fontWeight: 500 }}>Emoji</div>
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
  );
}
