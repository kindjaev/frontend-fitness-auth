import React from 'react'
import {Stack, Button, Typography} from "@mui/material"

import BodyPartImg from "../assets/icons/body-part.png"
import TargetImg from "../assets/icons/target.png"
import EquipmentImg from "../assets/icons/equipment.png"


function Details({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

    const extraData = [
        {icon: BodyPartImg, name: bodyPart}, 
        {icon: TargetImg, name: target}, 
        {icon: EquipmentImg, name: equipment}
    ]

  return (
    <Stack gap="60px" sx={{p: "20px", alignItems: "center", flexDirection: {lg: "row"}}}>
        <img src={gifUrl} alt={name} loading="lazy" className='detail-image'/>
        <Stack sx={{gap: {lg: "35px", xs: "20px"}}}>
            <Typography variant='h3' textTransform="capitalize">{name}</Typography>
            <Typography variant="h6" >Exercise keep you strong. <span style={{textTransform: "capitalize"}}>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.</Typography>
            {extraData.map((item, i) => (
                <Stack key={i} direction="row" gap="24px" alignItems="center">
                    <Button sx={{background: "#fff2db", borderRadius: "50%", p: "18px"}}>
                        <img src={item.icon} alt={bodyPart} />
                    </Button>
                    <Typography variant='h5' textTransform="capitalize">{item.name}</Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details