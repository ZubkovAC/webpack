import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from 'app/store/store';
import { incCount } from 'app/reducers/testReducer';


export const App = () => {

  const dispatch = useDispatch()
  let inc = useSelector<AppStateType,number>(state=>state.test.count)

  return (
    <div>
      <button onClick={()=>dispatch(incCount())}>increased</button>
      Counter:
      {inc}
    </div>
  );
};

