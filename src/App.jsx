import Component1 from "./Component1";
import Component2 from "./Component2";
import { Fragment, Suspense } from "react";
import Loading from "./Loading";
function App() {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Component1 />
        <Component2 />
      </Suspense>
    </Fragment>
  );
}

export default App;
