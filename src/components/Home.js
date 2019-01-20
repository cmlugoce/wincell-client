import React from "react";
import './components.css';
import { Container} from 'semantic-ui-react'
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  font-size: 4em;
  margin-top: 10%;
  color: orange;
  background:rgba(0,0,0,0.5);
  width: auto;
  

`;


const Home = () => {

    return (
      <div id='home'>
         <Wrapper id='wrap'>
        
           
              Life is too short to drink bad wine 
             
            
         </Wrapper>
         <div id='line'>
           <hr id='homey' />
           </div>
      </div>
      );
    };
export default Home;