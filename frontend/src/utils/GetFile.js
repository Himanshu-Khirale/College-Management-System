export const getFileUrl = (file) => {
  if (!file) return "";
  // Cloudinary and any full remote URLs come back as complete http(s) URLs
  if (file.startsWith("http://") || file.startsWith("https://")) {
    return file;
  }
  // Normalize backslashes (Windows paths) to forward slashes
  const normalized = file.replace(/\\/g, "/");
  // Use env variable, falling back to the deployed Render API
  const mediaBase =
    process.env.REACT_APP_MEDIA_LINK ||
    "https://college-management-system-iyxw.onrender.com/media";
  // Strip a leading "media/" segment if the base already contains /media
  const cleanFile = normalized.startsWith("media/")
    ? normalized.slice("media/".length)
    : normalized;
  return `${mediaBase.replace(/\/$/, "")}/${cleanFile}`;
};
