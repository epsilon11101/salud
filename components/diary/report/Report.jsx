"use client";
import { useEffect, useState } from "react";
import ContentTable from "../contentTable/ContentTable";
import ContentRow from "../contentTable/ContentRow";
import ConfettiComponent from "@/components/ui/confetti/ConfettiComponent";
import { ReportContainer } from "./Report.styled";

//custom hooks
import { useDay } from "@/hooks/useDay";
import { useUser } from "@/hooks/useUser";
import { nanoid } from "nanoid";

const Report = () => {
  const { daily, date, day } = useDay();
  const { userData } = useUser();

  const [showOnly, setIsMounted] = useState(false);
  const [Goal, setGoal] = useState(false);

  useEffect(() => {
    const userGoal = daily.left < 0;
    setGoal(userGoal);
  }, [daily]);

  return (
    <ReportContainer>
      {Goal && <ConfettiComponent />}
      <ContentTable title={`Resumen para el ${date}`}>
        <ContentRow
          content_info="quedan"
          value={daily?.left || 0}
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="consumido"
          value={daily?.consumed || 0}
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="tasa diaria"
          value={daily?.total || 0}
          units="kcal"
          isinformative={true}
        />
        <ContentRow
          content_info="n% de lo normal"
          value={daily?.normal || 0}
          units="%"
          isinformative={true}
        />
      </ContentTable>
      <ContentTable title="Alimentos no recomendados">
        {userData.notAllowedProducts &&
          userData.notAllowedProducts.map((product) => (
            <ContentRow key={nanoid()} content_info={product} />
          ))}
      </ContentTable>
    </ReportContainer>
  );
};

export default Report;
