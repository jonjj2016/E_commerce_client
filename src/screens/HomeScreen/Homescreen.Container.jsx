import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Component from './HomeScreen';
import { actions } from '../../redux/Products/actions';

const Container = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(actions.get_start())
  }, []);

  return (products&&<Component products={ products }/>
    
  )
}

export default Container
