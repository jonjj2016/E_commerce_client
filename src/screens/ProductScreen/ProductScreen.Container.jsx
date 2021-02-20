import React ,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Component from './ProductScreen';
import { useParams } from 'react-router-dom';
import {actions } from '../../redux/Products/actions';




const Container = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(actions.find_start(id))
  },[]);

  const { product } = useSelector(state => state.products);
  
  return (product && <Component product={product} />);

}

export default Container
