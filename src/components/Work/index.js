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
    const [expanded, setExpanded] = React.useState();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <h1>Réalisations</h1>           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="accordion-summary">
                    <Typography><span>My Market</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-work">
                        <div className="flex-typography">
                            <Typography>
                                Démo de site e-commerce avec back-office permettant de gérer les produits, les commandes, les clients... L'application utilise l'api Stripe pour les paiements.

                                <br />
                                <br />
                                Le site dispose aussi d'un convertisseur d'images afin de contrôler, réduire et optimiser la taille des fichiers envoyés.
                                <br />
                                <br />
                                <a href="https://pydonze.fr/mymarket/public" target='_blank' rel="noreferrer">Lien vers le site</a>
                                <br />
                            </Typography>
                        </div>
                        <div className='work-img work-mymarket'>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel12-content" id="panel2d-header" className="accordion-summary">
                    <Typography><span>Cooking</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-work">
                        <div className="flex-typography">
                            <Typography>
                                Un site responsive de recettes de cuisine, un accès ADMIN permet d'ajouter les recettes en base.
                                <br />
                                <br />
                                <a href="https://pydonze.fr/cooking/public" target='_blank' rel="noreferrer">Lien vers le site</a>
                                <br />
                                <a href="https://github.com/pierreyvesdonze/cooking" target='_blank' rel="noreferrer" className='github-link'>Lien vers le dépôt Github</a>
                            </Typography>
                        </div>
                        <div className='work-img work-cooking'>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" className="accordion-summary">
                    <Typography><span>IMG Reducer</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-work">
                        <div className="flex-typography">
                            <Typography>
                                Application permettant de réduire la taille d'une image selon une taille personnalisée
                                <br />
                                <br />
                                <a href="https://pydonze.fr/imgreducer/public" target='_blank' rel="noreferrer">Lien vers le site</a>
                                <br />
                                <a href="https://github.com/pierreyvesdonze/imgreducer" target='_blank' rel="noreferrer" className='github-link'>Lien vers le dépôt Github</a>
                            </Typography>
                        </div>
                        <div className='work-img work-imgreducer'>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
           
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography><span>My contacts</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex-work">
                        <div className="flex-typography">
                            <Typography>
                                Simple application réalisée avec Symfony, permettant de créer, gérer des contacts et de les exporter (emails seulement) par catégorie en .csv.
                                <br />
                                <br />
                                <a href='https://pydonze.fr/mycontacts/public/' target='_blank' rel="noreferrer">Visiter le site</a>
                                <br />
                                <a href='https://github.com/pierreyvesdonze/mycontacts' target='_blank' rel="noreferrer">Visiter le dépôt Github</a>
                                <br />
                                <br />
                            </Typography>
                        </div>
                        <div className='work-img work-mycontacts'>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
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
