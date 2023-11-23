import { AuthenticatedUserProvider, RootNavigator } from "./utils";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
};

export default App;
