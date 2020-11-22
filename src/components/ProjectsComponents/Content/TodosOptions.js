import React from 'react'
import ExpandInput from './ExpandInput'
import { Popper } from '@material-ui/core'

export default function TodosOptions() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState()
  const [expanded, setExpanded] = React.useState({})

  const handleClick = (id, newPlacement, event) => {
    handleClose()
    setExpanded({
      [id]: !expanded[id]
    })
    if (!expanded[id]) {
      setAnchorEl(event.currentTarget)
      setOpen(prev => placement !== newPlacement || !prev)
      setPlacement(newPlacement)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = { A: 'calendar', B: 'tags', C: 'checklist', D: 'deadline' }
  return (
    <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement}>
        Popper from {Object.keys(expanded)[0]} : display{' '}
        {body[Object.keys(expanded)[0]]}
      </Popper>
      <ExpandInput
        id={'A'}
        expanded={expanded}
        icon={'date_range'}
        option={'When'}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      <ExpandInput
        id={'B'}
        expanded={expanded}
        icon={'local_offer'}
        option={'Tags'}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      <ExpandInput
        id={'C'}
        expanded={expanded}
        icon={'format_list_bulleted'}
        option={'Checklist'}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      <ExpandInput
        id={'D'}
        expanded={expanded}
        icon={'schedule'}
        option={'Deadline'}
        handleClose={handleClose}
        handleClick={handleClick}
      />
      {/* <Icon fontSize="small" onClick={props.handleDeleteCard}>
              delete
            </Icon> */}
    </div>
  )
}
