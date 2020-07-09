import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 API started!`);
  console.log(
    process.env.MESSAGE ||
      `
      Nunca se esqueça dos seus objetivos! 
      E jamais se esqueça de que vc não deve 
      commitar seu arquivo .env com logins e senhas! 😅
      `
  );
});
