import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_SHOXEZ_API_BACKEND_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// AI Prediction Services
export const predictionService = {
  // Get default predictions for common currencies
  getDefaultPredictions: async (lang = "en") => {
    const response = await api.get(`/predictions/default?lang=${lang}`);
    return response.data;
  },

  // Get prediction for a single currency
  getPrediction: async (currency: string, indicators?: any) => {
    const response = await api.post("/predictions/predict", {
      currency,
      indicators,
    });
    return response.data;
  },

  // Get predictions for multiple currencies
  getMultiplePredictions: async (currencies: string[], indicators?: any) => {
    const response = await api.post("/predictions/predict-multiple", {
      currencies,
      indicators,
    });
    return response.data;
  },

  // Get recent predictions for a currency
  getRecentPredictions: async (currency: string, limit: number = 10) => {
    const response = await api.get(
      `/predictions/recent/${currency}?limit=${limit}`
    );
    return response.data;
  },

  // Get prediction history
  getPredictionHistory: async (
    startDate: string,
    endDate: string,
    currency?: string
  ) => {
    const params = new URLSearchParams({ startDate, endDate });
    if (currency) params.append("currency", currency);
    const response = await api.get(`/predictions/history?${params.toString()}`);
    return response.data;
  },

  // Get prediction accuracy
  getAccuracy: async (currency: string) => {
    const response = await api.get(`/predictions/accuracy/${currency}`);
    return response.data;
  },

  // Get model status
  getModelStatus: async () => {
    const response = await api.get("/predictions/status");
    return response.data;
  },
};

export default api;
