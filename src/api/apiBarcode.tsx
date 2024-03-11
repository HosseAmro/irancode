import { InitState, useContext } from "@/context";
import { schemaBarcode } from "@/zod";
import axios from "axios";

export async function Barcode(
  barcode: string,
  state: InitState,
  overWrite: Function
) {
  const dataAxios = await axios.post(
    `http://185.213.167.156:1016/v1/service/irancode/GTIN/inquiry`,
    { GTINCode: barcode },
    { headers: { session: state.session } }
  );

  const dataSchema = schemaBarcode.safeParse(dataAxios.data);

  if (!dataSchema.success) {
    return false;
  }

  overWrite({
    value: { allBarcode: [...state.allBarcode, dataSchema.data.info.GTINCode] },
  });
  overWrite({ value: { lastBarcode: dataSchema.data } });
  return true;
}
