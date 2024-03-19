# React Query example

This is a simple React Query example to show how a loading/fetching animation can be started and stoped depending on the state of the query.

The useQuery() is initiated with a enabled:false so the query will only execute upon pressing the button.

The query will start fetching the data and the isFetching property is set to true. When the data is fetched the isFetching property is set to false. This query object property can then be used to show an animation.
