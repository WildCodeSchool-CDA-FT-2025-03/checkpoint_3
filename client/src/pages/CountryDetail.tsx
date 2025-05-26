import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Descriptions,
  Typography,
  Space,
  Spin,
  Alert,
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  useCountryQuery,
  useDeleteCountryMutation,
} from "../types/graphql-generated";

const { Title } = Typography;

export default function CountryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [deleteCountry] = useDeleteCountryMutation();

  const { data, loading, error } = useCountryQuery({
    variables: { code: id?.toString() || "" },
    skip: !id,
  });

  const handleDelete = async () => {
    if (data?.country) {
      try {
        await deleteCountry({
          variables: { id: data.country.id },
          refetchQueries: ["Countries"],
        });
        navigate("/");
      } catch (error) {
        console.error("Error deleting country:", error);
      }
    }
  };

  const handleEdit = () => {
    navigate(`/country/${id}/edit`);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <Alert
          message="Erreur"
          description={`Impossible de charger les détails du pays: ${error.message}`}
          type="error"
          showIcon
        />
      </div>
    );
  }

  if (!data?.country) {
    return (
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <Alert
          message="Pays non trouvé"
          description="Le pays demandé n'existe pas ou a été supprimé."
          type="warning"
          showIcon
          action={
            <Button size="small" onClick={() => navigate("/")}>
              Retour à l'accueil
            </Button>
          }
        />
      </div>
    );
  }

  const { country } = data;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
      {/* Header avec bouton retour */}
      <div style={{ marginBottom: "24px" }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/")}
          style={{ marginBottom: "16px" }}
        >
          Retour à la liste
        </Button>
      </div>

      {/* Card principale avec les détails */}
      <Card
        style={{ borderRadius: "8px" }}
        actions={[
          <Button
            key="edit"
            type="text"
            icon={<EditOutlined />}
            onClick={handleEdit}
          >
            Modifier
          </Button>,
          <Button
            key="delete"
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={handleDelete}
          >
            Supprimer
          </Button>,
        ]}
      >
        {/* En-tête avec drapeau et nom */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              fontSize: "120px",
              lineHeight: "120px",
              marginBottom: "16px",
            }}
          >
            {country.emoji}
          </div>
          <Title level={1} style={{ margin: 0, color: "#e91e63" }}>
            {country.name}
          </Title>
          <Title
            level={3}
            style={{ margin: "8px 0 0 0", fontWeight: "normal", color: "#666" }}
          >
            Code: {country.code}
          </Title>
        </div>

        {/* Informations détaillées */}
        <Descriptions
          title="Informations détaillées"
          bordered
          column={1}
          size="middle"
          labelStyle={{
            backgroundColor: "#fafafa",
            fontWeight: "600",
            width: "200px",
          }}
        >
          <Descriptions.Item label="Nom du pays">
            {country.name}
          </Descriptions.Item>
          <Descriptions.Item label="Code pays">
            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#e91e63",
              }}
            >
              {country.code}
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Drapeau">
            <span style={{ fontSize: "32px" }}>{country.emoji}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Identifiant">
            #{country.id}
          </Descriptions.Item>
        </Descriptions>

        {/* Section continent (si disponible) */}
        {country.continent && (
          <div style={{ marginTop: "24px" }}>
            <Descriptions
              title="Localisation"
              bordered
              column={1}
              size="middle"
              labelStyle={{
                backgroundColor: "#fafafa",
                fontWeight: "600",
                width: "200px",
              }}
            >
              <Descriptions.Item label="Continent">
                {country.continent.name}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Card>

      {/* Actions supplémentaires */}
      <div
        style={{
          marginTop: "24px",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        <Space size="middle">
          <Button size="large" onClick={() => navigate("/")}>
            Voir tous les pays
          </Button>
          <Button
            type="primary"
            size="large"
            onClick={handleEdit}
            style={{
              backgroundColor: "#e91e63",
              borderColor: "#e91e63",
            }}
          >
            Modifier ce pays
          </Button>
        </Space>
      </div>
    </div>
  );
}
