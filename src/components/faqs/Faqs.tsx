import * as React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { v4 as uuidv4 } from 'uuid'

const faqsList: { question: string; answer: string }[] = [
  {
    question: 'What services do you offer as a full-stack JavaScript engineer?',
    answer:
      'I provide comprehensive web development services using JavaScript, including front-end, back-end, and database integration solutions.'
  },
  {
    question: 'Which JavaScript frameworks do you specialize in?',
    answer:
      'I specialize in React, Node.js, and Express, ensuring robust and scalable web applications tailored to client needs.'
  },
  {
    question: 'Can you work remotely from Katowice?',
    answer:
      'Yes, I offer remote work services from Katowice, providing flexibility and effective communication through various digital collaboration tools.'
  },
  {
    question: 'Do you handle the entire development process?',
    answer:
      'Yes, I manage the full development lifecycle, from initial design and coding to deployment and post-launch support.'
  },
  {
    question: 'What is your approach to project management?',
    answer:
      'I follow agile methodologies, ensuring adaptive planning and collaboration, tailored to deliver efficient and timely project outcomes.'
  }
]

export default function Faqs() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <>
      <Typography variant='h1'>Comprehensive JavaScript FAQs</Typography>
      {faqsList.map((faq, index) => (
        <Accordion
          key={uuidv4()}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'>
            <Typography component='span'>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}
