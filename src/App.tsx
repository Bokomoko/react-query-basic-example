import { useState } from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import WaitIndicator from './components/waitindicator';
import './App.css';

function wait(duration = 1) {
  return new Promise(resolve => setTimeout(resolve, duration * 1000));
}

function obtainData() {
  return wait(3).then(() => [{ response: 'A dummy response from the server' }]);
}

function App() {
  const queryObj = useQuery({
    queryKey: ['AIrequest'],
    queryFn: obtainData,
    enabled: false,
  });

  console.log({ data: queryObj.data });
  if (queryObj.isError) {
    return <pre>{JSON.stringify(queryObj.error)}</pre>;
  }

  return (
    <>
      <div className='answer-container'>
        <button
          onClick={() => {
            queryObj.refetch({ force: true });
            console.log('Button pressed');
          }}
        >
          Click here to start awaiting
        </button>
        <WaitIndicator isLoading={queryObj.isFetching} />
      </div>
      <br />
      {!queryObj.isLoading && <pre>{JSON.stringify(queryObj.data)}</pre>}
    </>
  );
}

export default App;
