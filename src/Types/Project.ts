export type Project = {
    title: string;
    image: string | { base: string; md: string }; // Allow image to be a string or an object with base and md properties
    link: string;
  };