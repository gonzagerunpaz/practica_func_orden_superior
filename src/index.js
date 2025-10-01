const productos = require("../data/productos.json");
const categorias = require("../data/categorias.json");

//1  Escriba una función que reciba por parámetro un nombre y retorne el producto que coincida exactamente con ese nombre utilizando.
const bucarProductoPorNombreConError = (valor) => {
  const productoEncontrado = productos.find((p) => p.nombre == valor);
  if (productoEncontrado) return productoEncontrado;
  else throw Error("Produto no encontrado.");
};

const bucarProductoPorNombreSinError = (valor) => {
  return productos.find((p) => p.nombre == valor);
};

console.log(bucarProductoPorNombreSinError("Notebook"));

//2  Escriba una función que no reciba parámetros y retorne un booleano indicando si todos los productos tienen precio mayor a 0.

const todosLosProductosTienePrecioMayorACero = () => {
  return productos.every((p) => p.precio > 0);
};

const todosLosProductosTienePrecioMayorACeroV2 = () => {
  return !productos.some((p) => p.precio <= 0);
};

console.log(todosLosProductosTienePrecioMayorACero());
console.log(todosLosProductosTienePrecioMayorACeroV2());

//3 🏆 Escriba una función que retorne el producto más caro, utilizando obligatoriamente el método .reduce().
const productoMasCaro = () => {
  if (productos.length > 0)
    return productos.reduce((p1, p2) => {
      return p1.precio > p2.precio ? p1 : p2;
    });
  else throw Error("No hay productos.");
};

console.log(productoMasCaro());

//🔗 Escriba una función que retorne la información combinada de producto y categoría, con la siguiente estructura:

const combinada = () => {
  return productos.map((p) => {
    const cate = categorias.find((c) => c.id == p.categoria_id);
    if (cate) {
      return {
        nombre: p.nombre,
        precio: p.precio,
        categoria: {
          id: cate.id,
          descripcion: cate.descripcion,
          esImportada: cate.esImportada,
        },
      };
    } else {
      return {
        nombre: p.nombre,
        precio: p.precio,
      };
    }
  });
};

console.log(JSON.stringify(combinada(), null, 2));

// 5 Escriba una función que retorne el precio promedio de todos los productos.

const promedioPrecioProductos = () => {
  if (productos.length > 0) {
    const precios = productos.reduce((a, b) => a + b.precio, 0);
    return precios / productos.length;
  }
  return 0;
};

console.log(promedioPrecioProductos());

// 5 Escriba una función que retorne el precio promedio de todos los productos de una determinada categoria

const promedioPrecioProductosPorCategoria = (id_categoria) => {
  const filtrada = combinada().filter((c) => c.categoria.id == id_categoria);
  const precios = filtrada.reduce((a, b) => a + b.precio, 0);
  return precios / filtrada.length;
};

console.log(promedioPrecioProductosPorCategoria(2));
