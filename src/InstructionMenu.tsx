import { Card, CardContent, styled, Typography } from "@mui/material"
import React from "react"
import instructions from "./Instructions"
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip"

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9"
  }
}))

export default function InstructionMenu() {
  let key = 0

  return (
    <>
      <div style={{ display: "flex" }}>
        {instructions.map((instruction) => {
          return (
            <div key={key++}>
              <HtmlTooltip
                key={key++}
                title={
                  <>
                    <Typography>{instruction.name.toUpperCase()}</Typography>
                    <Typography>{instruction.description}</Typography>
                  </>
                }>
                <Card key={key++} sx={{ height: "3rem", width: "3rem" }}>
                  <CardContent>
                    <Typography sx={{ userSelect: "none" }}>{instruction.symbol}</Typography>
                  </CardContent>
                </Card>
              </HtmlTooltip>
            </div>
          )
        })}
      </div>
    </>
  )
}
