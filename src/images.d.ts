import images from "./images"; // Adjust path as necessary

declare module "*.js" {
  const content: any;
  export default content;
}

declare module "*.ts" {
  const content: any;
  export default content;
}

declare module "*.json" {
  const content: any;
  export default content;
}

// src/images.d.ts
declare module "*.jpg" {
  const value: string;
  export default value;
}
