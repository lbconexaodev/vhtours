export const VH_API_URL =
  "https://script.google.com/macros/s/AKfycbwFtAkpo0-e_b20vL9-xMtadTfJZDpMlndWIg30c63SNc8nJEgJ4n_MH83ZQSWFLpq_BA/exec";

type RawPackage = Record<string, unknown>;

export type VhPackage = {
  line: number;
  destination: string;
  price: string;
  cardPrice: string;
  imageUrl: string;
  description: string;
};

const toText = (value: unknown) => String(value ?? "").trim();

const normalizePackage = (item: RawPackage, index: number): VhPackage => ({
  line: index + 2,
  destination: toText(item.DESTINO ?? item.destino ?? "Destino"),
  price: toText(item.PRECO ?? item["PRE\u00c7O"] ?? item["PREÃ‡O"] ?? item.preco),
  cardPrice: toText(item.CARTAO ?? item["CART\u00c3O"] ?? item["CARTÃƒO"] ?? item.cartao ?? item.precoParcelado),
  imageUrl: toText(item["URL DA IMAGEM"] ?? item.urlImagem),
  description: toText(item.DESCRICAO ?? item["DESCRI\u00c7\u00c3O"] ?? item["DESCRIÃ‡ÃƒO"] ?? item.descricao),
});

export async function fetchPackages(): Promise<VhPackage[]> {
  const response = await fetch(`${VH_API_URL}?action=getDestinos`);
  const data = await response.json();
  const items: RawPackage[] = Array.isArray(data) ? data : data.data || [];
  return items.map(normalizePackage);
}

export async function loginAdmin(user: string, pass: string): Promise<boolean> {
  const response = await fetch(
    `${VH_API_URL}?action=login&user=${encodeURIComponent(user)}&pass=${encodeURIComponent(pass)}`,
  );
  const data = await response.json();
  return Boolean(data.success);
}

export async function savePackage(payload: {
  line?: number;
  destination: string;
  price: string;
  cardPrice: string;
  imageUrl: string;
  description: string;
}): Promise<boolean> {
  const body = {
    action: payload.line ? "editar" : "adicionar",
    linha: payload.line ?? null,
    destino: payload.destination,
    preco: payload.price,
    cartao: payload.cardPrice,
    urlImagem: payload.imageUrl,
    descricao: payload.description,
  };

  const response = await fetch(VH_API_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const result = await response.json();
  return Boolean(result.success);
}

export async function deletePackage(line: number): Promise<void> {
  await fetch(VH_API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "excluir", linha: line }),
  });
}
