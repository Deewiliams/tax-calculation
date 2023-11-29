import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";

export default function Form() {
  const [salary, setSalary] = React.useState();
  let [tax, setTax] = React.useState();
  const [netSalary, setNetSalary] = React.useState();

  const calculate = () => {
    alert(salary);
    if (salary > 5000) {
      tax = (salary * 10) / 100;
    } else if (salary > 3000) {
      tax = (salary * 5) / 100;
    } else {
      tax = 0;
    }
    setTax(tax);

    const netSalaryTotal = salary - tax;
    setNetSalary(netSalaryTotal);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Employee name"
              variant="outlined"
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter salary"
              variant="outlined"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter tax"
              variant="outlined"
              type="number"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter net Salary"
              variant="outlined"
              type="number"
              value={netSalary}
              onChange={(e) => setNetSalary(e.target.value)}
            />
          </Grid>
        </Grid>

        <Button variant="contained" onClick={calculate}>
          Contained
        </Button>
      </Box>
    </Container>
  );
}
