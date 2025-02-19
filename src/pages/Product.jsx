import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, erro } = useFetch(url);  

  return (
    <>
      <p>ID do produto: {id}</p>
      {erro && <p>Houve um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>R$: {product.price}</p>
            <Link to={`/products/${product.id}/infos`}>Mais Informações</Link>
        </div>
      )}
    </>
  );
}

export default Product;
