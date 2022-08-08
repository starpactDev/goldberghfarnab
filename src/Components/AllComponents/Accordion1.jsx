import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Accordion1({ QnA }) {
  return (
    <div>
      {
        QnA.map((item, key) => {
          return(
          <Accordion sx={{ backgroundColor: "#F2F2F2", textAlign: "left" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" textAlign="left">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
          )

        })

      }


    </div>
  )
}

export default Accordion1