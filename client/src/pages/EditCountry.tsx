import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Input,
  Typography,
  Space,
  Spin,
  Alert,
  message,
} from "antd";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import {
  useCountryQuery,
  useUpdateCountryMutation,
} from "../types/graphql-generated";
import { COUNTRIES_QUERY } from "../schemas/county.schema";

const { Title } = Typography;

type FormValues = {
  name: string;
  emoji: string;
  code: string;
};

export default function EditCountry() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form] = Form.useForm<FormValues>();

  const { data, loading, error } = useCountryQuery({
    variables: { code: id?.toString() || "" },
  });

  const [updateCountry, { loading: updating }] = useUpdateCountryMutation({
    refetchQueries: [{ query: COUNTRIES_QUERY }],
    awaitRefetchQueries: true,
  });

  useEffect(() => {
    if (data?.country) {
      form.setFieldsValue({
        name: data.country.name,
        emoji: data.country.emoji,
        code: data.country.code,
      });
    }
  }, [data, form]);

  const handleSubmit = async (values: FormValues) => {
    if (!data?.country) return;

    try {
      await updateCountry({
        variables: {
          id: data.country.id,
          data: {
            name: values.name,
            emoji: values.emoji,
            code: values.code.toUpperCase(),
          },
        },
      });

      message.success("Pays modifié avec succès!");
      navigate(`/country/${values.code.toUpperCase()}`);
    } catch (error) {
      console.error("Error updating country:", error);
      message.error("Erreur lors de la modification du pays");
    }
  };

  const handleCancel = () => {
    navigate(`/country/${id}`);
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
      <div style={{ marginBottom: "24px" }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleCancel}
          style={{ marginBottom: "16px" }}
        >
          Retour aux détails
        </Button>
      </div>

      <Card style={{ borderRadius: "8px" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "32px",
            padding: "20px 0",
          }}
        >
          <div
            style={{
              fontSize: "80px",
              lineHeight: "80px",
              marginBottom: "16px",
            }}
          >
            {country.emoji}
          </div>
          <Title level={2} style={{ margin: 0, color: "#e91e63" }}>
            Modifier {country.name}
          </Title>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          size="large"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Form.Item
            label="Nom du pays"
            name="name"
            rules={[
              { required: true, message: "Le nom du pays est requis" },
              { min: 2, message: "Le nom doit contenir au moins 2 caractères" },
            ]}
          >
            <Input placeholder="Nom du pays" />
          </Form.Item>

          <Form.Item
            label="Emoji/Drapeau"
            name="emoji"
            rules={[{ required: true, message: "L'emoji est requis" }]}
          >
            <Input placeholder="🏳️" />
          </Form.Item>

          <Form.Item
            label="Code pays (2 lettres)"
            name="code"
            rules={[
              { required: true, message: "Le code pays est requis" },
              {
                len: 2,
                message: "Le code doit contenir exactement 2 caractères",
              },
              {
                pattern: /^[A-Z]{2}$/,
                message:
                  "Le code doit contenir uniquement des lettres majuscules",
              },
            ]}
          >
            <Input
              placeholder="XX"
              maxLength={2}
              style={{ textTransform: "uppercase" }}
              onChange={(e) => {
                e.target.value = e.target.value.toUpperCase();
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: "32px" }}>
            <Space
              size="middle"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Button size="large" onClick={handleCancel}>
                Annuler
              </Button>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={updating}
                icon={<SaveOutlined />}
                style={{
                  backgroundColor: "#e91e63",
                  borderColor: "#e91e63",
                }}
              >
                Sauvegarder
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
