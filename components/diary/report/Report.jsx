"use client";

import ContentTable from "../contentTable/ContentTable";
import ContentRow from "../contentTable/ContentRow";
import { ReportContainer } from "./Report.styled";

const Report = () => {
  return (
    <ReportContainer>
      <ContentTable title="Resumen para el 13.08.20">
        <ContentRow
          content_info="quedan"
          value="625"
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="consumido"
          value="2175"
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="tasa diaria"
          value="2800"
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="n% de lo normal"
          value="78"
          units="%"
          isinformative={true}
        />
      </ContentTable>
      <ContentTable title="Alimentos no recomendados">
        <ContentRow content_info="productos de harina" />
        <ContentRow content_info="leche" />
        <ContentRow content_info="carne roja" />
        <ContentRow content_info="carnes ahumadas" />
      </ContentTable>
    </ReportContainer>
  );
};

export default Report;
