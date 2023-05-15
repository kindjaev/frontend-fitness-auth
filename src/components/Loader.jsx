import React from "react"
import {Stack} from "@mui/material"
function Loader() {
  return (
    <Stack alignItems="center" justifyContent="center" mt="50px">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Stack>
  )
}

export default Loader