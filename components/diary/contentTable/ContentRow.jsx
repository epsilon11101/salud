"use client";
import { Typography } from "@mui/material";
import { ContentRowStyled } from "./ContentRow.styled";

const ContentRow = ({ content_info, value, units, isinformative }) => {
  return (
    <ContentRowStyled isinformative={isinformative}>
      <Typography variant="h6" component="p">
        {content_info}
      </Typography>

      {isinformative && (
        <Typography variant="h6" component="p">
          {value} {units}
        </Typography>
      )}
    </ContentRowStyled>
  );
};

export default ContentRow;
