import { MACAROON, LNDPORT, LNDHOST } from "../vars.ts";

const baseUrl = `https://${LNDHOST}:${LNDPORT}/v1`;

interface IOptions {
  method?: string;
  headers: string;
  body?: string;
}

let options = {
  headers: {
    "Grpc-Metadata-macaroon": MACAROON,
    "Content-Type": "application/json",
  },
};

const getInfo = async ({ response }: { response: any }) => {
  let lndResponse = await fetch(baseUrl + "/getinfo", options);
  let result = await lndResponse.json();
  response.body = result;
};

const addInvoice = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const { memo, amount } = await request.body().value;

  interface IRequestBody {
    memo: string;
    expiry: string;
    private: boolean;
    value?: string;
    value_msat?: string;
  }

  let requestBody: IRequestBody = {
    memo,
    expiry: "3600",
    private: false,
  };

  if (amount > 0 && amount < 1) {
    requestBody.value_msat = (amount * 1000).toString();
  } else {
    requestBody.value = amount.toString();
  }

  let lndResponse = await fetch(baseUrl + "/invoices", {
    method: "post",
    headers: {
      "Grpc-Metadata-macaroon": MACAROON,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  let result = await lndResponse.json();

  response.body = result;
  response.status = 200;
};

export { getInfo, addInvoice };
