// This file contains the configuration options for this sample app.

export const config = {};

if (process.env.NODE_ENV === "development") {
  config.baseUrl = "http://localhost:3000";
} else {
  config.baseUrl = "https://austinbspencer.com";
}

if (process.env.NODE_ENV === "development") {
  config.apiUrl = "http://127.0.0.1:8000/api/v2";
} else {
  config.apiUrl = "https://austinbspencer.com/api/v2";
}

// Debug while in development mode
config.debug = process.env.NODE_ENV === "development";
