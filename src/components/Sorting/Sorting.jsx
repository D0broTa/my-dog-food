import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
  return (
    <Box sx={{margin: '10px 0 10px 0'}}>
      <ButtonGroup variant="text" aria-label="text button group" >
        <Button>Популярные</Button>
        <Button>Новинки</Button>
        <Button>Сначала дешевые</Button>
        <Button>Сначала дорогие</Button>
        <Button>По рейтингу</Button>
        <Button>По скидке</Button>
      </ButtonGroup>
    </Box>
  );
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Sorting() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Популярные" {...a11yProps(0)} />
//           <Tab label="Новинки" {...a11yProps(1)} />
//           <Tab label="Сначала дешевые" {...a11yProps(2)} />
//           <Tab label="Сначала дорогие" {...a11yProps(3)} />
//           <Tab label="По рейтингу" {...a11yProps(4)} />
//           <Tab label="По скидке" {...a11yProps(5)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Популярные
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Новинки
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Сначала дешевые
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         Сначала дорогие
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         По рейтингу
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         По скидке
//       </TabPanel>
//     </Box>
//   );
// }