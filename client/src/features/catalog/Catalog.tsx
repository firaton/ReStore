import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

/** TypeSciprt için props kullanıyoruz, type güvenliği sağlıyoruz.*/
// interface Props {
//   products: Product[];
//   addProduct: () => void;
// }

// props parametresi ile kullanabildiğimiz gibi
//destructing yaparak "props" kelimesini kullanmadan da yazabiliriz.
// export default function Catalog(props: Props){
//     return (
//       <>
//         <ul>
//           {props.products.map((product) => (
//             <li key={product.id}>{product.name} - {product.price}</li>
//           ))}
//         </ul>
//         <button onClick={props.addProduct}>Ekle</button>
//       </>
//     );
export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // const [yeni, setYeni] = useState({
  //   id: 0,
  //   name: "",
  //   price: 0,
  //   pictureUrl: "/images/products/boot-ang1.png",
  //   source: "manuel",
  // });

  //function addProduct() {
  //   var addedItem = products.find((c) => c.name === yeni.name);
  //   if (yeni.id > 0 && yeni.name && !addedItem) {
  //     setProducts((prevState) => [...prevState, yeni]);
  //   }
  // }

  // const handleChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setYeni({
  //     id: products.length + 1,
  //     name: value,
  //     price: products.length * 333,
  //     pictureUrl: "/images/products/boot-ang2.png",
  //     source: name,
  //   });
  // };

  return (
    <>
      <ProductList products={products} />
      {/* <Button variant="contained" onClick={addProduct}>
        Ekle
      </Button> */}
      {/* <input onChange={handleChange} type="text" id="inputum"></input> */}
    </>
  );
}
