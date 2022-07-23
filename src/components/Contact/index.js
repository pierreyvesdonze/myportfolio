import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ImageIcon from '@mui/icons-material/Image';

const secretLink = () => {
    return window.location.href = 'https://pydonze.fr/mylife/public/';
}

const actions = [
    { icon: <ImageIcon />, name: 'Mes travaux artistiques'}
];

export default function BasicCard() {
    return (
        <>
            <h1>Contact</h1>
            <Card sx={{ minWidth: 275 }} className="card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Pierre-Yves Donzé
                    </Typography>
                    <br />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <AlternateEmailIcon /> pierreyvesdonze.pro@gmail.com
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <LinkedInIcon /> <a href='https://www.linkedin.com/in/pierreyvesdonz%C3%A9/' target='_blank'>Linkedin</a>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <LocationOnIcon /> Nancy (Meurthe-Et-Moselle)
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 90, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={secretLink}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </>
    );
}
