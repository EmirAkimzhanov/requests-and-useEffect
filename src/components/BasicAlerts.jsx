import * as React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import '../components/alerts.scss'

export default function BasicAlerts() {
  return (
    <div className='ParentBox'>
      <div className='info'>
        <div className='iconContainer'>
        <ListItemIcon><InfoOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
          <p className='boldText'>Info notification</p>
          <p className='regularText'>Notification message. Here will be information.</p>
        </div>
        <div className='iconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>
        </div>
      </div>
      <div className='error'>
        <div className='iconContainer'>
        <ListItemIcon><WarningAmberOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
          <p className='boldText'>Error notification</p>
          <p className='regularText'>Notification message. Here will be information.</p>
        </div>
        <div className='iconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>

        </div>
      </div>
      <div className='success'>
        <div className='iconContainer'>
        <ListItemIcon><CheckCircleOutlineOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
          <p className='boldText'>Success notification</p>
          <p className='regularText'>Notification message. Here will be information.</p>
        </div>
        <div className='iconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>

        </div>
      </div>
      <div className='noLabelInfo'>
        <div className='noLabelIconContainer'> 
        <ListItemIcon><InfoOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
        <p className='regularText'>Notification message. Here will be information.</p>

        </div>
        <div className='noLabelIconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>
        </div>
      </div>
      <div className='noLabelError'>
        <div className='noLabelIconContainer'> 
        <ListItemIcon><WarningAmberOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
        <p className='regularText'>Notification message. Here will be information.</p>

        </div>
        <div className='noLabelIconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>
        </div>
      </div>
      <div className='noLabelSuccess'>
        <div className='noLabelIconContainer'> 
        <ListItemIcon><CheckCircleOutlineOutlinedIcon/></ListItemIcon>
        </div>
        <div className='textContainer'>
        <p className='regularText'>Notification message. Here will be information.</p>

        </div>
        <div className='noLabelIconContainer'>
        <ListItemIcon><CloseOutlinedIcon/></ListItemIcon>
        </div>
      </div>
      
      </div>
  );
}