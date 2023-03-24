import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import TableComponent from "./TableComponent";

const Component = (props) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (typeof window === "object") {
    console.log(window.location.pathname);

    if (window.location.pathname == "/CryptoFi") {
      return (
        <>
          {domLoaded && (
            <div>
              <PieChart
                one={props.assetOne}
                two={props.assetTwo}
                three={props.assetThree}
                four={props.assetFour}
                valueOne={props.assetValueOne}
                valueTwo={props.assetValueTwo}
                valueThree={props.assetValueThree}
                valueFour={props.assetValueFour}
              />
            </div>
          )}
        </>
      );
    } else if (window.location.pathname == "/LendFi") {
      return (
        <div>
          <TableComponent />
        </div>
      );
    }
  }
};

export default Component;
