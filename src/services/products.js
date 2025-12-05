const API = '6904ab416b8dabde4964a766';
const URL_BASE = "https://"+API+".mockapi.io/api/v1/articulos/";

export const createProduct = async (product) => {
  const res = await fetch(URL_BASE, {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear nuevo producto");
  }

  const result = await res.json();
  return result;
}

export const getProducts = async (category) => {
  let url = URL_BASE;

  if (category) {
    url = `${URL_BASE}?category=${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }

  const result = await res.json();
  return result;
}


export const getProductsById = async (id) => {
  if (!id) {
    throw new Error("Tiene que enviar un ID para esta búsqueda");
  }
  let url = `${URL_BASE}/${id}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al intentar buscar un producto");
  }

  const result = await res.json();
  return result;
}
