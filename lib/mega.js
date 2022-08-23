import { Storage } from "megajs";

export const storage = await new Storage({
  email: "fandy",
  password: "correct horse battery example",
}).ready;
