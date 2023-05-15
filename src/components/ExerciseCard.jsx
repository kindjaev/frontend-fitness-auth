import React from 'react'
import {Link} from "react-router-dom"
import {Stack, Button, Typography} from "@mui/material"

function ExerciseCard({data}) {
    const handleClick = () => {
        window.location.href=`/exercise/${data.id}`
        // data.id.location.reload(true)
    }
  return (
    <Stack alignItems="center" justifyContent="center" sx={{borderRadius: "20px",}}>
        <Link className="exercise-card" onClick={handleClick} style={{overflow: "hidden"}}>
            <img src={data.gifUrl} alt={data.name} loading="lazy" />
            <Stack direction="row">
                <Button sx={{ml: "21px", color: "white", background: "#ffa9a9", 
                    fontSize: "14px", borderRadius: "20px", textTransfrom: "capitalize"}}
                >
                    {data.bodyPart}
                </Button>
                
                <Button sx={{ml: "21px", color: "white", background: "#fcc757", 
                    fontSize: "14px", borderRadius: "20px", textTransfrom: "capitalize"}}
                >
                    {data.target}
                </Button>
            </Stack>

            <Typography
                ml="21px" fontWeight="bold" color="black" textTransform="capitalize" mt="11px" pb="10px" fontSize="20px"
            >
                {data.name}
            </Typography>
        </Link>
    </Stack>

  )
}

export default ExerciseCard