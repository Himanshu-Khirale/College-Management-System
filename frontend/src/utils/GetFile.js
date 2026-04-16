export const getFileUrl = (file) => {
  if (!file) return "";
  if (file.startsWith("http")) {
    return file;
  }
  return `${process.env.REACT_APP_MEDIA_LINK}/${file}`;
};
