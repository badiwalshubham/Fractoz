import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardHeader from '@mui/material/CardHeader'
import { faqs } from 'src/layouts/components/data/Faqs'
import Faqitem from 'src/layouts/components/Property/Faqitem'


function Faq() {
  return (
    <>
      <ul className='accordion'>
        {faqs.map((faq, index) => (
          <Faqitem key={index} faq={faq} />
        ))}
      </ul>
    </>
  )
}

export default Faq
