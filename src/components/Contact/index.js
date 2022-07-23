import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

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
        </>
    );
}
