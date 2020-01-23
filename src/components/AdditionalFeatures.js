import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {RemoveFeature, AddFeature} from '../action/actionThingy';
import {connect} from 'react-redux';
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} AddFeature={props.AddFeature}/>
          ))}
        </ol>
      ):(
        <p>Nice looking car!</p>
      )}
    </div>
  )};
const mapStateToProps=state=>{return{car:state.car,additionalFeatures:state.additionalFeatures}};
export default connect(mapStateToProps,{AddFeature,RemoveFeature})(AdditionalFeatures);