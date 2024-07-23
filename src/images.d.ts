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

// declare module "./images" {
//   const images: {
//     profilepicture: string;
//     exit1: string;
//     phoneSymb: string;
//     emailsymbol: string;
//     linkedinSymb: string;
//     wasymb: string;
//     github: string;
//     ResumeSymb: string;
//   };
//   export default images;
// }
