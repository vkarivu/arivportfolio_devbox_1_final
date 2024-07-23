// import images from "./src/images_fold";
import images from "../images";

const getContacts = () => {
  return [
    {
      icon: images["phoneSymb.jpg"],
      alt: "Phone Icon",
      text: "216-418-0886",
    },
    {
      icon: images["emailsymbol.jpg"],
      alt: "Email Icon",
      text: "arivkannagi@gmail.com",
    },
    {
      icon: images["linkedinSymb.jpg"],
      alt: "LinkedIn Icon",
      text: "LinkedIn",
      link: "https://www.linkedin.com/in/arivarasanvk/",
    },
    {
      icon: images["wasymb.jpg"],
      alt: "WhatsApp Icon",
      text: "WhatsApp",
      link: "https://wa.me/phone_number",
    },
    {
      icon: images["github.jpg"],
      alt: "GitHub Icon",
      text: "GitHub",
      link: "https://github.com/vkarivu",
    },
    {
      icon: images["ResumeSymb.jpg"],
      alt: "Resume Icon",
      text: "Resume",
      link: "https://wa.me/phone_number", // Update this link with the correct one
    },
  ];
};

export default getContacts;
