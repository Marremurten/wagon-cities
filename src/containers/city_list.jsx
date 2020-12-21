import React, { Component } from 'react'
import City from './city';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import { setCities } from '../actions/index';


class CityList extends Component {
   
    componentWillMount() {
        this.props.setCities();
        } 
    render(){
        return(
            <div className="cities">
                {this.props.cities.map((city) => {
                    return <City key={city.name} city={city} />;
                })}
            </div> 
        );
    }    
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    { setCities: setCities },
    dispatch
    );
   } 

   function mapStateToProps(ReduxState) {
    return {
    cities: ReduxState.cities
    };
   } 

   export default connect(mapStateToProps, mapDispatchToProps)(CityList);