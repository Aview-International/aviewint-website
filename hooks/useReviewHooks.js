import { useDispatch } from 'react-redux';
import {
  setCountriesAndCodes,
  setSupportedLanguages,
} from '../store/reducers/aview.reducer';
import { useEffect } from 'react';

const useReviewHooks = (languages, countries) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSupportedLanguages(languages));
    dispatch(setCountriesAndCodes(countries));
  }, []);

  return;
};

export default useReviewHooks;
