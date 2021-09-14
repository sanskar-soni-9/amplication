import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
//@ts-ignore
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
//@ts-ignore
import authProvider from `./auth-provider/${AUTH_PROVIDER_PATH}`;
//@ts-ignore
import { theme } from "./theme/theme";
//@ts-ignore
import Login from "./Login";
import "./App.scss";
//@ts-ignore
import Dashboard from "./pages/Dashboard";

declare const AUTH_PROVIDER_PATH: string;
declare const RESOURCES: React.ReactElement[];
declare const APP_NAME = "my app name";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={APP_NAME}
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        {RESOURCES}
      </Admin>
    </div>
  );
};

export default App;
