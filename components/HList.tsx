import React from "react";
import { FlatList, useColorScheme } from "react-native";
import styled from "styled-components/native";
import VMedia from "./VMedia";

const ListContainer = styled.View`
  margin-bottom: 40px;
`;
const ListTitle = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : props.theme.textColor)};
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 20px;
`;
const ListScroll = styled.FlatList`` as unknown as typeof FlatList;
const HListSeparator = styled.View`
  width: 20px;
`;

interface HListProps {
  title: string;
  data: any[];
}

const HList: React.FC<HListProps> = ({ title, data }) => {
  const isDark = useColorScheme() === "dark";
  return (
    <ListContainer>
      <ListTitle isDark={isDark}>{title}</ListTitle>
      <ListScroll
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={HListSeparator}
        contentContainerStyle={{ paddingHorizontal: 30 }}
        data={data}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_title ?? item.original_name}
            voteAverage={item.vote_average}
            fullData={item}
          />
        )}
      />
    </ListContainer>
  );
};

export default HList;
