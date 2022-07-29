import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h1>Réalisations</h1>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="accordion-summary">
                    <Typography><span>Petit Foetus</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Démo réalisée en Symfony pour une artiste tatoueuse. L'application dispose d'un back-office pour que l'utilisateur puisse gérer ses images et ses données (le back-office n'est pas accessible publiquement).

                        <br />
                        <br />
                        Le site dispose aussi d'un convertisseur d'images afin de contrôler, réduire et optimiser la taille des fichiers envoyés.
                        <br />
                        <br />
                        <a href="https://pydonze.fr/foetus/public/home" target='_blank'>Lien vers le site</a>
                        <br />
                        <a href="https://github.com/pierreyvesdonze/foetus" target='_blank'>Lien vers le dépôt Github</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography><span>MyFood</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Réalisé avec Symfony et Javascript ce site permet à l'utilisateur enregistré de créer ses propres recettes de cuisine, de créer des liste de courses et de rechercher des recettes.
                        <br />
                        Plusieurs fonctions de recherche ont été implémentées, dont une fonction de recherche par ingrédient pour que l'utilisateur puisse trouver des recettes en fonction de ce dont il dispose (dans cette démo les ingrédients sont très limités).
                        <br />
                        <br />
                        <a href='https://pydonze.fr/myfood/public/' target='_blank'>Visiter le site</a>
                        <br />
                        <a href='https://github.com/pierreyvesdonze/myfood' target='_blank'>Visiter le dépôt Github</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography><span>Catshop</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Catshop est un faux site e-commerce réalisé avec Symfony. Le but était un entraînement pour apprendre à enregistrer des données en session, les retrouver après login mais aussi de créer un tunnel d'achat (jusqu'à un faux procédé de paiement).
                        <br />
                        <br />
                        <a href='https://pydonze.fr/catshop/public/' target='_blank'>Visiter le site</a>
                        <br />
                        <a href='https://github.com/pierreyvesdonze/catshop' target='_blank'>Visiter le dépôt Github</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography><span>Ce portfolio</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ce portfolio est entièrement réalisé avec React et Material-UI.
                        <br />
                        <br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
