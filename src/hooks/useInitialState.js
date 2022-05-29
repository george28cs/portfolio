import { useState } from 'react';

const initialState = {
  id: 1,
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setSelectedId = (payload) => {
    setState({
      ...state,
      id: payload,
    });
  }
  return {
    state,
    setSelectedId,
  };
}

export default useInitialState;