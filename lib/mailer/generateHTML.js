import fs from "fs";
import { resolve } from "path";

const generateHTML = ({ name, email, message } = {}) => {
  const templatePath = resolve(process.cwd(), "lib", "mailer", "template.html");

  const template = fs.readFileSync(templatePath, { encoding: "utf-8" });

  const html = template
    .replace(/##name##/g, name)
    .replace(/##email##/g, email)
    .replace(/##message##/g, message);

  return html;
};

export default generateHTML;
