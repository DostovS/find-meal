import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Recipe() {
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();
  console.log(details);
  console.log(params.name);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=9f363848a00b4f8f8b2179ea55fe5207`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <DetailWrapper>
      <Content>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </Content>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </motion.div>
        )}
        {activeTab === "ingredients" && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ul>
              {details.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          </motion.div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Content = styled.div` 
  img {
    margin-bottom: 3rem;
  }`
const Button = styled.div`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  display: inline;
`;

const Info = styled.div`
  
`;
export default Recipe;