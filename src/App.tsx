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
    refetchOnMount: false,
    keepPreviousData: false,
  });

  console.log({ data: queryObj.data });
  if (queryObj.isError) {
    return <pre>{JSON.stringify(queryObj.error)}</pre>;
  }

  function doTheQuery() {
    queryObj.refetch();
  }

  return (
    <>
      <button
        onClick={() => {
          queryObj.refetch({ force: true });
          console.log('Button pressed');
        }}
      >
        Click here to start awaiting
      </button>
      <WaitIndicator isLoading={queryObj.isLoading} />
      {!queryObj.isLoading && <pre>{JSON.stringify(queryObj.data)}</pre>}
    </>
  );
}

export default App;
