import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const HMovie = styled.View`
  padding: 0px 30px;
  flex-direction: row;
`;

const HColumn = styled.View`
  margin-left: 15px;
  width: 80%;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
`;

const Release = styled.Text`
  color: white;
  font-size: 12px;
  margin: 5px 0;
  font-weight: 500;
  opacity: 0.6;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.8;
  width: 80%;
`;

interface HMediaProps {
  posterPath: string;
  originalTitle: string;
  overview: string;
  releaseDate?: string;
  voteAverage?: number;
}

const HMedia: React.FC<HMediaProps> = ({
  posterPath,
  originalTitle,
  overview,
  releaseDate,
  voteAverage,
}) => (
  <HMovie>
    <Poster path={posterPath} />
    <HColumn>
      <Title>
        {originalTitle.length > 30
          ? `${originalTitle.slice(0, 30)}...`
          : originalTitle}
      </Title>
      {releaseDate ? (
        <Release>
          {new Date(releaseDate).toLocaleDateString("ko", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Release>
      ) : null}
      {voteAverage ? <Votes votes={voteAverage} /> : null}
      <Overview>
        {overview !== "" && overview.length > 140
          ? `${overview.slice(0, 140)}...`
          : overview}
      </Overview>
    </HColumn>
  </HMovie>
);

export default HMedia;
