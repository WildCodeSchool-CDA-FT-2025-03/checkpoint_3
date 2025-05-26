import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6366F1", // Indigo vif
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EC4899", // Rose vif
      light: "#F472B6",
      dark: "#DB2777",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8FAFC", // Fond légèrement bleuté
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1E293B", // Slate 800
      secondary: "#64748B", // Slate 500
    },
    error: {
      main: "#EF4444", // Rouge moderne
      light: "#FCA5A5",
      dark: "#DC2626",
    },
    warning: {
      main: "#F59E0B", // Orange moderne
      light: "#FCD34D",
      dark: "#D97706",
    },
    success: {
      main: "#10B981", // Vert moderne
      light: "#34D399",
      dark: "#059669",
    },
    info: {
      main: "#3B82F6", // Bleu moderne
      light: "#60A5FA",
      dark: "#2563EB",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#1E293B",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#1E293B",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#1E293B",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#334155", // Slate 700
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#475569", // Slate 600
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
          padding: "8px 16px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow:
            "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
          "&:hover": {
            boxShadow:
              "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0,0,0,0.05)",
    "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 1px 2px 0 rgba(0,0,0,0.05)",
    "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 1px 2px 0 rgba(0,0,0,0.05)",
    "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
    "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
    "0 25px 50px -12px rgba(0,0,0,0.25)",
  ],
});
