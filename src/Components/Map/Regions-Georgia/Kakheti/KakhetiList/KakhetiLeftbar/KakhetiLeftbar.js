import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import style from "./KakhetiLeftbar.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

const KakhetiLeftbar = () => {
  return (
    <div className={style.leftbar}>
      <div>
        <h2>რეგიონული სტატისტიკა </h2>
      </div>
      <div>
        <Accordion style={{ backgroundColor: "rgba(240, 248, 255, 0.737)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.mIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{fontWeight: 700}}>ძირითადი ინფორმაცია:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  რეგიონის ფართობი
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
              <br />
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  მუნიციპალიტეტების, ქალაქების
                  <br /> და სოფლების რაოდენობა
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            backgroundColor: "rgba(240, 248, 255, 0.737)",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.mIcon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography style={{fontWeight: 700}}>მოსახლეობა:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  მოსახლეობა
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ backgroundColor: "rgba(240, 248, 255, 0.737)" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.mIcon} />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography style={{fontWeight: 700}}>დემოგრაფია:</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  მოკვდაობა
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  გარდაცვალების მიზეზები
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
              <Tooltip title="Download file.xlsx">
                <a href="/src/assets/docs/regionis fartobi.xlsx" download>
                  ძირითადი დემოგრაფიული
                  <br /> მაჩვენებლები
                  <FileDownloadRoundedIcon
                    className={style.dIcon}
                    style={{ width: 19 }}
                  />
                </a>
              </Tooltip>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default KakhetiLeftbar;
