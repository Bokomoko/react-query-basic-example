import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
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
    queryKey: ['AIrequest'], // this must be unique for each different query
    queryFn: obtainData, // this is the function that actually makes the request
    enabled: false, // if enable, it will exec the query upon mounting
  });
  if (queryObj.isError) {
    // this if will handle the error case
    return <pre>{JSON.stringify(queryObj.error)}</pre>;
  }

  return (
    <>
      {/* this is the container that holds the button and the waiting indicator */}
      {/* make sure the container will handle the positioning of the button and the indicator correctly */}
      <div className='answer-container'>
        <button
          onClick={() => {
            queryObj.refetch({ force: true }); // force: true will make sure the query is redone ignoring cache. Sometimes, it's not good to force a refecth. Think about it
          }}
        >
          Click here to start awaiting
        </button>
        <WaitIndicator isLoading={queryObj.isFetching} />{' '}
        {/* this is the waiting indicator */}
      </div>
      <br />
      {!queryObj.isLoading && <pre>{JSON.stringify(queryObj.data)}</pre>}{' '}
      {/* this will print the data obtained in the query */}
    </>
  );
}

export default App;
