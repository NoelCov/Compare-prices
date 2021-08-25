import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ComparisonPageContainer,
  ProductToCompareText,
  ListsContainer,
} from "./comparison-page.styles";

import StyledInput from "../../components/styled-input/styled-input.component";
import SelectionList from "../../components/selection-list/selection-list.component";
import StyledButton from "../../components/styled-button/styled-button.component";

const ComparisonPage = () => {
  const [listsValues, setListsValues] = useState({
    listOneValue: "",
    listTwoValue: "",
  });

  const [valueToCompare, setValueToCompare] = useState("");

  return (
    <ComparisonPageContainer>
        <ProductToCompareText>
          Please enter the product you want to compare
        </ProductToCompareText>
        <StyledInput
          setNewValue={setValueToCompare}
          currentValue={valueToCompare}
        />
        <ListsContainer>
          <SelectionList
            currentSelection={listsValues.listOneValue}
            setCurrentSelection={setListsValues}
            selectionListNum="listOneValue"
          />
          <ProductToCompareText>vs</ProductToCompareText>
          <SelectionList
            currentSelection={listsValues.listTwoValue}
            setCurrentSelection={setListsValues}
            selectionListNum="listTwoValue"
          />
        </ListsContainer>
        <Link
          to={{
            pathname: "/results",
            state: {
              valueToCompare: valueToCompare,
              storeOne: listsValues.listOneValue,
              storeTwo: listsValues.listTwoValue,
            },
          }}
        >
          <StyledButton buttonText="Compare" />
        </Link>
    </ComparisonPageContainer>
  );
};

export default ComparisonPage;
