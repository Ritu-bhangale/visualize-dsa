import { useStylesExperimentList } from "./experiment-list.styles";
import experiments from "./experiment-list.json";
import { Typography, List, Card, CardContent } from "@material-ui/core";
import NestedListItem from "../../components/nested-listitem/nested-listitem";

const ExperimentList = () => {
  // styles
  const classes = useStylesExperimentList();

  return (
    <div className={classes.root}>
      <Typography 
        className={classes.Heading} 
        align="center" 
        gutterBottom 
        color="primary" 
        variant="h4"
        style={{ fontWeight: 500, fontSize: '1rem', marginTop: '18vh',color: '#004E89'}}>
      Hey! Check out these Data Structures and Algorithms visualizations!
      </Typography>

      <Typography  
      color="secondary" 
      variant="subtitle1"
      style={{ fontWeight: 700, fontSize: '2.4rem',textAlign: "center",marginTop: '2vh',color: '#090C02',marginBottom: '10vh' }}>
        Topics Covered
      </Typography>

      <Card className={classes.listRoot} style={{ backgroundColor: '#FFFFFA', borderRadius: '4px', marginBottom: '12vh'}}>
        {experiments.map(({ name, subSection }, idx) => (
          <CardContent>
            <NestedListItem name={name} subsection={subSection} key={idx} />
          </CardContent>
        ))}
      </Card>
    </div>
  );
};

export default ExperimentList;