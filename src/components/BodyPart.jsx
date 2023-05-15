import React from 'react'
import {Stack, Typography} from "@mui/material"

import Icon from "../assets/icons/gym.png"

function BodyPart({item, bodyPart, setBodyPart, handleSearch}) {
  return (
    <Stack type="button" alignItems="center" justifyContent="center" 
        className='bodyPart-card'
        sx={{borderTop: bodyPart === item ? "4px solid #ff2625" : "", 
            backgroundColor: '#fff', 
            borderRadius: '20px', 
            height: "280px", 
            cursor: "pointer", gap: "47px"}}
        onClick={() => {
          setBodyPart(item)
          handleSearch(item)
          window.scrollBy({top: 500, left: 0, behavior: "smooth"})
          }}
    >
        <img src={Icon} alt="" style={{width: "40px", height: "40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3a1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart