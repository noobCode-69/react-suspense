import Component1 from "./Component1";
import Component2 from "./Component2";
import { Fragment, Suspense } from "react";
import Loading from "./Loading";
import Parent from "./Parent";
import "./App.css";
function App() {
  return (
    <Fragment>
      <Suspense
        fallback={
          <Parent>
            <Loading />
          </Parent>
        }
      >
        <Parent>
          <Component1 />
        </Parent>
        <Parent>
          <Component2 />
        </Parent>

        <p
          style={{
            textAlign: "center",
            textAlign: "center",
            marginTop: "2rem",
            maxWidth: "575px",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          }}
        >
          Both the data1 and data2 are loaded from two different api's and they
          both can have different loading time but they always get's painted on
          the DOM at the same time, We can do that using React Suspense which is
          the feature of React 18.
        </p>
      </Suspense>
    </Fragment>
  );
}

export default App;
