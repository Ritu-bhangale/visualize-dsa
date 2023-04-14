import { makeStyles } from "@material-ui/core";

export const useStylesExperimentList = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FFFAFF",
    marginTop: "3rem",
    marginLeft: "5rem",
    marginRight: "5rem",
    [theme.breakpoints.down("1000")]: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "2rem",
    },
  },

  listRoot: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 5px 8px rgb(0 0 0 / 10%)",
    borderRadius: "1rem",
    color: theme.palette.primary.dark,
  },
  cardRoot: {
    marginBottom: "12vh",
    borderRadius: "4px",
    color: '090C02',
  },
  Heading:{
    [theme.breakpoints.down("900")]:{
      fontSize:[45]
    },
    [theme.breakpoints.down("550")]:{
      fontSize:[35]
    },
    [theme.breakpoints.down("375")]:{
      fontSize:[30]
    },
    [theme.breakpoints.down("330")]:{
      fontSize:[20]
    },
    [theme.breakpoints.down("240")]:{
      fontSize:[15]
    }


  }
}));