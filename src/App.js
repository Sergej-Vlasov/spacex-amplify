import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { fetchPayloads, fetchLaunches } from "./graphql/queries";

const App = () => {
  useEffect(() => {
    (async () => {
      const payloads = await API.graphql(graphqlOperation(fetchPayloads));
      console.log(payloads);
    })();
  }, []);

  return <div>Blank</div>;
};

export default App;
