import { useEffect, useState } from "react"
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"

function Popular() {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular');
    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes)
    }
  }
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide options={{ perPage: 4, arrows: false, pagination: false, drag: "free", gap: "5rem" }}>
        {
          popular.map((recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <Card >
                  <p>
                    <span>
                      {recipe.title}
                    </span>
                  </p>
                  <img src={recipe.image} alt="" />
                </Card>
              </SplideSlide>
            )
          }))
        }
      </Splide>

    </Wrapper>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
  height: 300px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img{
    border-radius: 2rem;
    width: 100%;
    object-fit: cover;
    height: 100%;
   
  }
  p{
    margin: 0;
    top:0%; 
      left: 0;
      right: 0;
      bottom: 0;
    position: absolute;
    background: linear-gradient(331deg, #000000ab, transparent);
    transition: 0.5s linear;
    z-index: 1;
    span{
      position: absolute;
      bottom: 50px;
      color: white;
      width: 100%;
      text-align: center;
    }
  }
  &:hover{
    p{
    background: linear-gradient(331deg, #000000f9, transparent);
    }
  }
`;

export default Popular
