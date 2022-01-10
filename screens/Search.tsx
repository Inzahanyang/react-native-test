import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import { movieApi, tvApi } from "../api";
import HList from "../components/HList";
import Loader from "../components/Loader";

const Container = styled.ScrollView``;
const SearchBar = styled.TextInput`
  background-color: white;
  padding: 10px 15px;
  border-radius: 15px;
  width: 90%;
  margin: 10px auto;
`;

const Search = () => {
  const [query, setQuery] = useState("");

  const {
    isLoading: moviesLoading,
    data: moviesData,
    refetch: moviesSearch,
  } = useQuery(["searchMovies", query], movieApi.search, { enabled: false });
  const {
    isLoading: tvLoading,
    data: tvData,
    refetch: tvSearch,
  } = useQuery(["searchTv", query], tvApi.search, { enabled: false });

  const onChangeText = (text: string) => setQuery(text);
  const onSubmit = () => {
    if (query === "") {
      return;
    }
    moviesSearch();
    tvSearch();
  };
  const loading = moviesLoading || tvLoading;

  console.log(moviesData?.results);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <SearchBar
        placeholder="Search for Movie or Tv Show"
        placeholderTextColor="grey"
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      {moviesData ? (
        <HList title="Movie Results" data={moviesData.results} />
      ) : null}
      {tvData ? <HList title="Tv Results" data={tvData.results} /> : null}
    </Container>
  );
};

export default Search;
