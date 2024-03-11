import { schemaSign } from "@/zod";
import axios from "axios";

export async function Sing(sing: string, overWrite: Function) {
  const dataAxios = await axios.post(
    `http://185.213.167.156:1016/v1/service/irancode/auth/user`,
    { sign: sing }
  );

  const dataSchema = schemaSign.safeParse(dataAxios.data);

  if (!dataSchema.success) {
    overWrite({ value: { session: "" } });
    return false;
  }

  overWrite({ value: { session: dataSchema.data.info.session } });
  return true;
}