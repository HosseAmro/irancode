import { SimilarStringRemover } from "@/utils/SimilarStringRemover";
import { InitState } from "@/context";
import { schemaBarcode } from "@/zod";
import axios from "axios";

export async function apiBarcode(
  barcode: string,
  state: InitState,
  overWrite: (payload: { value: any; scope?: string }) => any
) {
  const dataAxios = await axios.post(
    `http://185.213.167.156:1016/v1/service/irancode/GTIN/inquiry`,
    { GTINCode: barcode },
    { headers: { session: state.session } }
  );

  const dataSchema = schemaBarcode.safeParse(dataAxios.data);

  if (!dataSchema.success) {
    return { ok: false };
  }

  const oldAllBarcode = [...state.allBarcode, dataSchema.data.info.GTINCode];
  const newAllBarcode = SimilarStringRemover(oldAllBarcode);
  overWrite({
    value: { allBarcode: newAllBarcode },
  });
  overWrite({
    value: {
      allBarcodeDetails: {
        [dataSchema.data.info.GTINCode]: dataSchema.data,
      },
    },
  });
  return { ok: true, barcode: barcode };
}
