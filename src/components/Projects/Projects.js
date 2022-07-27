import {
  Box,
  Container,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import webOne from "../../img/webOne.png";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    padding: 0,
  },
  projects: {
    height: 900,
    padding: "100px 0",
    backgroundColor: "#f5f5f5",
  },
  title: {
    color: "#444649",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "#444649",
  },
  tabs: {
    marginTop: 100,
    width: 1200,
  },
  webImg: {
    width: "390px",
    height: "300px",
  },
  gridCont: {
    marginTop: 50,
  },
  gridItem: {
    width: 390,
    height: 300,
  },
}));
export const Projects = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.projects} id="projects">
      <Container className={classes.bigCont}>
        {/* Title */}
        <Typography align="center" className={classes.title}>
          Projects
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline} />
        </Box>
        <Box className={classes.center}>
          <Box className={classes.tabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="secondary"
              scrollButtons="auto"
            >
              <Tab label="ALL" {...a11yProps(0)} />
              <Tab label="REACT-JS" {...a11yProps(1)} />
              <Tab label="JAVASCRIPT" {...a11yProps(2)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid container className={classes.gridCont}>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webOne} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webOne} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Box className={classes.webBack}>
                    <img src={webOne} alt="crypto" className={classes.webImg} />
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
