import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogBox(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClick}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{props.titleMsg}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.descMsg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={props.onClick}>Cancel</Button>
          <Button variant="contained" color="error" onClick={props.click}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
