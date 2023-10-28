export const getImageUrl = (path) => {
  return new URL(`/assets/projects/project.jpg`, import.meta.url).href;
};
