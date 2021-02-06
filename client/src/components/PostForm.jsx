import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PostForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    year: "",
    make: "",
    model: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Year</InputLabel>
        <Select
          native
          value={state.year}
          onChange={handleChange}
          label="Year"
          inputProps={{
            name: "year",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>2019</option>
          <option value={20}>2020</option>
          <option value={30}>2021</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Make</InputLabel>
        <Select
          native
          value={state.make}
          onChange={handleChange}
          label="Make"
          inputProps={{
            name: "make",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Subaru</option>
          <option value={20}>BMW</option>
          <option value={30}>Mercedes</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Model</InputLabel>
        <Select
          native
          value={state.model}
          onChange={handleChange}
          label="Model"
          inputProps={{
            name: "model",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>WRX</option>
          <option value={20}>STI</option>
          <option value={30}>Forester</option>
        </Select>
      </FormControl>
    </div>
  );
}
