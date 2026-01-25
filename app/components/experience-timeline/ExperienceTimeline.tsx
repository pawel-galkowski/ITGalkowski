import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import en from "@/components/experience-timeline/data/en.json";
import pl from "@/components/experience-timeline/data/pl.json";
import { Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { stringToHTML } from "@/components/experience-timeline/utils";
import { useLanguage } from "@/context/LanguageContext";
import type { ExperienceItem } from "./types";
import {
  timelineStyles,
  timelineItemStyles,
  timelineOppositeContentStyles,
  timelineContentStyles,
  timelineBoxStyles,
  summaryBoxStyles,
} from "./ExperienceTimeline.styles";


export const experienceTimelineTestIds = {
  root: "experience-timeline-root",
  item: "experience-timeline-item",
  date: "experience-timeline-date",
  position: "experience-timeline-position",
  company: "experience-timeline-company",
  summary: "experience-timeline-summary",
  separator: "experience-timeline-separator",
  dot: "experience-timeline-dot",
  connector: "experience-timeline-connector",
  oppositeContent: "experience-timeline-opposite-content",
  content: "experience-timeline-content",
};

const ExperienceTimeline = () => {
  const { language } = useLanguage();
  const data = language === "pl" ? pl : en;
  return (
    <Timeline position="alternate" sx={timelineStyles} data-testid={experienceTimelineTestIds.root}>
      {data.map((el: ExperienceItem) => (
        <TimelineItem key={uuidv4()} sx={timelineItemStyles} data-testid={experienceTimelineTestIds.item}>
          <TimelineOppositeContent
            align="right"
            variant="body1"
            sx={timelineOppositeContentStyles}
            data-testid={experienceTimelineTestIds.oppositeContent}
          >
            <Typography variant="h5" component="span" data-testid={experienceTimelineTestIds.date}>
              {el.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator data-testid={experienceTimelineTestIds.separator}>
            <TimelineDot color="secondary" data-testid={experienceTimelineTestIds.dot} />
            <TimelineConnector data-testid={experienceTimelineTestIds.connector} />
          </TimelineSeparator>
          <TimelineContent sx={timelineContentStyles} data-testid={experienceTimelineTestIds.content}>
            <Box sx={timelineBoxStyles}>
              <Typography variant="h5" component="span" data-testid={experienceTimelineTestIds.position}>
                <strong>{el.position}</strong>
              </Typography>
              <Typography variant="h6" component="span" data-testid={experienceTimelineTestIds.company}>
                {el.company}
              </Typography>
              <Box sx={summaryBoxStyles} data-testid={experienceTimelineTestIds.summary}>
                {stringToHTML(el.summary)}
              </Box>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;
