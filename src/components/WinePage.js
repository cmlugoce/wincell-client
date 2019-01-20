import React from "react";
import { connect } from "react-redux"; 
import {deleteWine} from '../actions/wines';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Divider, Image, Button } from 'semantic-ui-react'
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: orange;
  flex-shrink: 1;

`;

const Wrapper = styled.section`
  padding: 4em;
 
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const InfoWrapper = styled.section`
   display: flex;
   font-size: 1.5em;
   float: right;
   margin-top: 10px;
   margin-right: 5%;
   margin left: 10px;
   width: 45%;
   color: orange;
   
  
   
   

`;

const ContainerWrapper = styled.section`
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 background-color: black;
 
 
    
`;
class WinePage extends React.Component {
  deleteClick = (event) => {
    event.preventDefault()
    this.props.deleteWine(this.props.wine.id)
   .then(this.props.history.push('/wines'))
} 
   render(){
    return (
      <div>
      <Wrapper>
      <Title>{this.props.wine.name}</Title>
      </Wrapper>
      <ContainerWrapper id='ContainerWrapper'>
      <Image src={this.props.wine.image} id = 'image' size='medium'/>
      <InfoWrapper id='list'>

        <ul>
            
            <li><b>Wine type:</b> {this.props.wine.wine_type}</li>
            <li> <b>Year:</b> {this.props.wine.year} </li>
            <li> <b>Description:</b>  {this.props.wine.description} </li>
            <li> <b>Price:</b> ${this.props.wine.price} </li>
            <br />
            <li><Link to="/wines">
                <Button inverted color='violet' content='All Wines' id='allWines' /> 
               
                </Link>
               
                <Button inverted color='red' content='DELETE' onClick={this.deleteClick} value='delete'/></li>
            </ul>
            <br />
            

           </InfoWrapper>
      
       </ContainerWrapper>
                
                
      </div>
      
  );
};
}

const mapStateToProps = (state, ownProps) => {
  const wine = state.wines.find(
    wine => String(wine.id) === ownProps.match.params.id
  );
  if (wine) {
    return { wine: wine };
  } else {
    return { wine: {} };
  }
};

export default connect(mapStateToProps, {deleteWine})(WinePage);

{/* <section className="hero is-light is-fullheight is-bold">
      <div className="hero-head">
          <br />
          <br />
          <br />
          <br />
         
          <center>
          <Divider hidden className='wine-show-image' />
           <Image src={this.props.wine.image}   size='medium' rounded id='image' />
           </center>
           
           <br />
           <div id='wine-info'>
           <center>
            <h2 className = "active-wine_name"><strong>{this.props.wine.name}</strong></h2>
            
            <ul>
            
            <li><strong>Wine type:</strong> {this.props.wine.wine_type}</li>
            <li><strong> Year:</strong> {this.props.wine.year} </li>
            <li><strong> Description: </strong> {this.props.wine.description} </li>
            <li><strong> Price:</strong> ${this.props.wine.price} </li>
            
            </ul>
           </center>
            </div>
            <br></br>
            
                
                <Link to="/wines">
                <Button inverted color='violet' content='All Wines' /> 
               
                </Link>
                <Button inverted color='red' content='DELETE' onClick={this.deleteClick} value='delete'/>

      </div>
      </section> 
  ); */}