import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  ResultsPageContainer,
  ResultsPageTitle,
  ComparisonStoresContainer,
  StoreTitle,
  StoreContainer,
} from "./results-page.styles";

import apiCall from "../../components/web-scrappers/web-scrappers";
import ItemsContainer from "../../components/items-container/items-container.component";
import Spinner from "../../components/spinner/spinner.component";

const ResultsPage = () => {
  const ItemsContainerWithSpinner = Spinner(ItemsContainer);

  const data = useLocation();
  const { valueToCompare, storeOne, storeTwo } = data.state;

  const [dataStoreOne, setDataStoreOne] = useState(null);
  const [dataStoreTwo, setDataStoreTwo] = useState(null);
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    setDataStoreOne(apiCall(storeOne, valueToCompare));
    setDataStoreTwo(apiCall(storeTwo, valueToCompare));
  }, [storeOne, valueToCompare, storeTwo]);

  useEffect(() => {
    setTimeout(() => {
      if (dataStoreOne && dataStoreTwo) {
        toggleLoading(false);
      } else {
        toggleLoading(true);
      }
    }, 6000);
  }, [dataStoreOne, dataStoreTwo]);

  return (
    <ResultsPageContainer>
      <ResultsPageTitle>
        These are the results after comparing {valueToCompare}
      </ResultsPageTitle>
      <ComparisonStoresContainer>
        <StoreContainer>
          <StoreTitle>{storeOne}</StoreTitle>
          <ItemsContainerWithSpinner
            isLoading={isLoading}
            data={dataStoreOne}
          />
        </StoreContainer>

        <StoreContainer>
          <StoreTitle>{storeTwo}</StoreTitle>
          <ItemsContainerWithSpinner
            isLoading={isLoading}
            data={dataStoreTwo}
          />
        </StoreContainer>
      </ComparisonStoresContainer>
    </ResultsPageContainer>
  );
};

export default ResultsPage;
