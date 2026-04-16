export const baseApiURL = () => {
  const link = process.env.REACT_APP_APILINK || "http://localhost:4000/api";
  // Clean trailing slash
  const cleanLink = link.replace(/\/$/, "");
  // Ensure it ends with /api
  if (!cleanLink.endsWith("/api")) {
    return `${cleanLink}/api`;
  }
  return cleanLink;
};
