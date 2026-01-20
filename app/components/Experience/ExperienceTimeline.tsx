import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import en from "./en.json";
import pl from "./pl.json";
import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { stringToHTML } from "./utils";
import { useLanguage } from "@/context/LanguageContext";

const ExperienceTimeline = () => {
  const { language } = useLanguage();
  const data = language === "pl" ? pl : en;
  return (
    <Timeline position="alternate">
      {data.map((el) => (
        <TimelineItem key={uuidv4()} sx={{ padding: 1.2 }}>
          <TimelineOppositeContent align="right" variant="body1" sx={{ paddingTop: 0 }}>
            <Typography variant="h5" component="span">
              {el.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ paddingTop: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="h5" component="span">
                <strong>{el.position}</strong>
              </Typography>
              <Typography variant="h6" component="span">
                {el.company}
              </Typography>
              <Box sx={{ textAlign: "start" }}>{stringToHTML(el.summary)}</Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
