import { useState } from 'react'
import { useRef } from 'react'
import { faqs } from 'src/layouts/components/data/Faqs'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardHeader from '@mui/material/CardHeader'


const Faqitem = ({ faq }) => {
  const [clicked, setClicked] = useState(false)
  const contentEl = useRef()

  const { question, answer } = faq

  const handleToggle = () => {
    setClicked(prev => !prev)
  }

  return (

    <li className={`accordion_item ${clicked ? 'active' : ''}`}>

      <button className='button' onClick={handleToggle}>
        {question}
        <span className='control'>{clicked ? '—' : '+'} </span>
      </button>

      <div
        ref={contentEl}
        className='answer_wrapper'
        style={clicked ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className='answer'>{answer}</div>
      </div>
    </li>
    

    // <CardHeader title='Frequently Asked Questions'></CardHeader>

    // <Accordion className={`accordion_item ${clicked ? 'active' : ''}`}>
    //     <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
    //       <Typography> {question} </Typography>
    //     </AccordionSummary>
    //     <AccordionDetails ref={contentEl}
    //     className='answer_wrapper'>
    //       <Typography className='answer'>
    //       {answer}
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    
  )
}

export default Faqitem
