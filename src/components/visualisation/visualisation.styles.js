import { makeStyles } from "@material-ui/core";

export const useStylesVisualisation = makeStyles((theme) => ({
  root: {
    width: "100%",
    flex: 1,
    borderRadius: "0px",
  },
  iframe: {
    width: "100%",
    height: 650,
    border: "none",
    color: "#1E1E24 !important"
  },
}));