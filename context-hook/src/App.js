import React from 'react';
import ComponentC from './components/ComponentC';
import ComponentA from './components/ComponentA';
import UserContextProvider from './contexts/UserContext';

export const UserContext =  React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <ComponentA/>
      </UserContextProvider>
      {/* <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
