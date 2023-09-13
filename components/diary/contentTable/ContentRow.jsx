"use client";
import { Typography } from "@mui/material";
import { ContentRowStyled } from "./ContentRow.styled";

const ContentRow = ({ content_info, value, units, isInformative }) => {
  return (
    <ContentRowStyled isInformative={isInformative}>
      <Typography variant="h6" component="p">
        {content_info}
      </Typography>

      {isInformative && (
        <Typography variant="h6" component="p">
          {value} {units}
        </Typography>
      )}
    </ContentRowStyled>
  );
};

export default ContentRow;
