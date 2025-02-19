import { useParams } from "react-router-dom";

function Infos() {
  const { id } = useParams();

  return <div>
        <h1>Mais infos do produto {id}</h1>
  </div>;
}

export default Infos;
