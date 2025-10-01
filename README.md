📂 Archivos disponibles

Se cuenta con dos archivos:

**productos.json**

```
[
    {
        "id": Number,
        "nombre": String,
        "precio": Number,
        "categoria_id": Number
    },
    { ... }
]
```

**categorias.json**

```
[
    {
        "id": Number,
        "descripcion": String,
        "esImportada": Boolean
    },
    { ... }
]
```

✅ Requerimientos

1. 🔎 Escriba una función que reciba por parámetro un nombre y retorne el producto que coincida exactamente con ese nombre utilizando.

2. ✅ Escriba una función que no reciba parámetros y retorne un booleano indicando si todos los productos tienen precio mayor a 0.

3. 🏆 Escriba una función que retorne el producto más caro, utilizando obligatoriamente el método .reduce().

4. 🔗 Escriba una función que retorne la información combinada de producto y categoría, con la siguiente estructura:

```
[
    {
        "nombre": String,
        "precio": Number,
        "categoria": {
            "descripcion": String,
            "esImportada": Boolean
        }
    },
    { ... }
]
```

5. Escriba una función que retorne el precio promedio de todos los productos.

📊 Ejemplos de Datos

A continuación, se muestran ejemplos de los archivos con datos cargados:

**productos.json**

```json
[
  {
    "id": 1,
    "nombre": "Café",
    "precio": 800,
    "categoria_id": 2
  },
  {
    "id": 2,
    "nombre": "Notebook",
    "precio": 350000,
    "categoria_id": 1
  },
  {
    "id": 3,
    "nombre": "Auriculares",
    "precio": 15000,
    "categoria_id": 1
  }
]
```

**categorias.json**

```json
[
  {
    "id": 1,
    "descripcion": "Electrónica",
    "esImportada": true
  },
  {
    "id": 2,
    "descripcion": "Alimentos",
    "esImportada": false
  }
]
```

🎯 Salida esperada del punto 5

```json
[
  {
    "nombre": "Café",
    "precio": 800,
    "categoria": {
      "descripcion": "Alimentos",
      "esImportada": false
    }
  },
  {
    "nombre": "Notebook",
    "precio": 350000,
    "categoria": {
      "descripcion": "Electrónica",
      "esImportada": true
    }
  },
  {
    "nombre": "Auriculares",
    "precio": 15000,
    "categoria": {
      "descripcion": "Electrónica",
      "esImportada": true
    }
  }
]
```
