import { Button, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Loan from "../../images/loan.jpg"
import Loan2 from "../../images/loan2.png"

const Card = styled(Paper)(({ theme, myBGColor }) => ({
  width: "100%",
  height: "100%",
  background: myBGColor,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(4px)",
  color: "#f5f6f7",
  fontWeight: "bold",
  textShadow: "0px 0px 2px #1287fc",

}));


function FlipCard() {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ width: '100%', height: '100%' }} /// these are optional style, it is not necessary
    >
      <FrontSide style={{ backgroundImage: `url(${Loan})`, backgroundSize: "cover", padding: "0px", borderRadius: "8px" }} >
        <Card myBGColor="rgba(255, 111, 145, 0.6)">
          <Typography fontSize={28} fontWeight="bold">
            Our Services are better !
          </Typography>
          <Typography variant='body1' mt={2} width="80%" textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam, repellendus ipsum sapiente quibusdam voluptatum.
          </Typography>
        </Card>
      </FrontSide>
      <BackSide style={{ backgroundImage: `url(${Loan2})`, backgroundSize: "cover", padding: "0px", borderRadius: "8px"}}>
        <Card myBGColor="rgba(247, 194, 2, 0.2)">
          <Typography fontSize={28} fontWeight="bold">
            You can make it !!!
          </Typography>
          <Typography variant='body1' mt={2} width="80%" textAlign="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam, repellendus ipsum sapiente quibusdam voluptatum.
          </Typography>
          <Button variant='bold' sx = {{ mt: 4 }}>Click Now 👍</Button>
        </Card>
      </BackSide>
    </Flippy>

  )
}

export default FlipCard