import { useState } from 'react';

import { useQuery, useMutation } from '@tanstack/react-query';
import WaitIndicator from './components/waitindicator';
import './App.css';

function wait(duration = 1) {
  return new Promise(resolve => setTimeout(resolve, duration * 1000));
}
function App() {
  // use tanstack react query to request a fake API
  // and display the response in a loading indicator
  const queryObj = useQuery({
    queryKey: ['AIbotAPI'],
    queryFn: () => {
      return wait(3).then(() => [
        { response: 'A dummy response from the server' },
      ]);
    },
  });

  queryObj.isLoading;

  function doTheQuery() {
    queryObj.IsLoading = true;
    queryObj.refetch();
  }

  return (
    <>
      <button onClick={() => doTheQuery()}>Click here to start awaiting</button>
      <WaitIndicator isLoading={queryObj.isLoading} />
    </>
  );
}

export default App;
