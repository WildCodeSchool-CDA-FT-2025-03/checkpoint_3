import { Typography } from "antd";

const { Title } = Typography;

export default function Header() {
  return (
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
  );
}
