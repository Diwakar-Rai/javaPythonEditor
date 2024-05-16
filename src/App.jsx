import CodeComponent from "./CodeComponent";
import GlobalContext from "./GlobalContext";

function App() {
  return (
    <GlobalContext>
      <div>
        <CodeComponent />
      </div>
    </GlobalContext>
  );
}

export default App;
