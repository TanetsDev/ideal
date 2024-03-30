import React from "react";
import MainSectionsBox from "../Common/MainSectionsBox";
import MainContainer from "../Containers/MainContainer";
import Title from "../Common/Title";

const TeamSection = () => {
  return (
    <MainSectionsBox>
      <MainContainer>
        <Title className="text-left">Наша команда</Title>
        <div className="w-full h-[230px] bg-cardGrey rounded"></div>
      </MainContainer>
    </MainSectionsBox>
  );
};

export default TeamSection;
