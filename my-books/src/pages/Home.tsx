import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import ListContainer from "../containers/ListContainer";
import { RootState } from "../redux/modules/rootReducer";

export default function Home() {
  const token = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );

  if(token === null) {
    return <Redirect to="/signin" />
  }
  return <ListContainer />
}