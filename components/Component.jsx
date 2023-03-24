import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import TableComponent from "./TableComponent";
import { useRouter } from "next/router";

const Component = (props) => {
  // const [domLoaded, setDomLoaded] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   setDomLoaded(true);
  // }, []);

  if (router.pathname == "/CryptoFi") {
    return (
      <>
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
      </>
    );
  } else if (router.pathname == "/LendFi") {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
};

export default Component;
