import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FaceIcon from '@mui/icons-material/Face';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LanguageIcon from '@mui/icons-material/Language';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Cv from './components/CV';
import Work from './components/Work';
import Contact from './components/Contact';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className='app'>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label={<FaceIcon />} {...a11yProps(0)} className="tab-label" style={{ minWidth: "20%" }} />
						<Tab label={<SettingsSuggestIcon />} {...a11yProps(1)} className="tab-label" style={{ minWidth: "20%" }} />
						<Tab label={<ListAltIcon />} {...a11yProps(2)} className="tab-label" style={{ minWidth: "20%" }} />
						<Tab label={<LanguageIcon />} {...a11yProps(3)} className="tab-label" style={{ minWidth: "20%" }} />
						<Tab label={<ContactMailIcon />} {...a11yProps(4)} className="tab-label" style={{ minWidth: "20%" }} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<Presentation />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Skills />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Cv />
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Work />
				</TabPanel>
				<TabPanel value={value} index={4}>
					<Contact />
				</TabPanel>
			</Box>
		</div>

	);
}
