import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  fetchPayloads,
  fetchLaunches,
  fetchLaunch,
  getPayload,
  getLaunch
} from "./graphql/queries";

import { createPayload, createLaunch } from "./graphql/mutations";

const App = () => {
  const [payloads, setPayloads] = useState();
  const [launches, setLaunches] = useState();
  const [launch, setLaunch] = useState();

  useEffect(() => {
    (async () => {
      // const payloads = await API.graphql(graphqlOperation(fetchPayloads));
      // const launches = await API.graphql(graphqlOperation(fetchLaunches));
      // console.log(payloads);
      // console.log(launches);

      console
        .log
        // await API.graphql(graphqlOperation(getLaunch, { name: "CRS-6" }))
        // await API.graphql(
        //   graphqlOperation(getPayload, {
        //     id: "2708599e-c816-4f0d-8e69-6ced385e1c50"
        //   })
        // )
        ();

      // setLaunches(launches.data.fetchLaunches);
    })();
  }, []);

  useEffect(() => {
    if (launches) {
      launches.forEach(launch => {
        (async () => {
          console.log(launch);
          const input = {
            ...launch
          };
          delete input.payloads;

          console.log("input", input);

          API.graphql(graphqlOperation(createLaunch, { input: input }));
        })();
      });
    }
  }, [launches]);

  useEffect(() => {
    if (payloads) {
      // (async () => {
      //   const launchFetch = await API.graphql(
      //     graphqlOperation(fetchLaunch, { params: { id: payloads[0].launch } })
      //   );
      //   if (launchFetch.data) {
      //     console.log(launchFetch.data.fetchLaunch);
      //     const input = {
      //       ...payloads[0],
      //       launch_name: launchFetch.data.fetchLaunch.name
      //     };
      //     delete input.launch;

      //     console.log("input", input);

      //     await API.graphql(graphqlOperation(createPayload, { input: input }));
      //   }
      // })();

      payloads
        .filter(payload => payload.launch)
        .forEach(payload => {
          (async () => {
            const launchFetch = await API.graphql(
              graphqlOperation(fetchLaunch, { params: { id: payload.launch } })
            );
            if (launchFetch.data) {
              console.log(launchFetch.data.fetchLaunch);
              const input = {
                ...payload,
                launch_name: launchFetch.data.fetchLaunch.name
              };
              delete input.launch;

              console.log("input", input);

              API.graphql(graphqlOperation(createPayload, { input: input }));
            }
          })();
        });

      // payloads
      //   .filter(payload => payload.launch)
      //   .forEach(payload => {
      //     console.log(payload.launch);

      //     (async () => {
      //       const launch = await API.graphql(
      //         graphqlOperation(fetchLaunc, { id: payload.launch })
      //       );
      //       setLaunch(launch);
      //       setTimeout(3000);
      //       if (launch) {
      //         console.log(launch);
      //       }
      //     })();
      // //   });
      // console.log(launch);
    }
  }, [payloads]);

  return <div>Blank</div>;
};

export default App;
