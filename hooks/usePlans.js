import { useDispatch } from 'react-redux';
import { setAllPlans } from '../store/reducers/aview.reducer';
import { useEffect } from 'react';

const usePlans = (plans) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllPlans(plans));
  }, []);
  return;
};

export default usePlans;
