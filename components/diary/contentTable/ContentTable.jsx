"use client";
import { Typography } from "@mui/material";
import { ContentTableStyled, ContentWrapper } from "./ContentTable.styled";

const ContentTable = ({ title, children }) => {
  return (
    <ContentWrapper>
      <ContentTableStyled>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        {children}
      </ContentTableStyled>
    </ContentWrapper>
  );
};

export default ContentTable;
