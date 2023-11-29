import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function Form() {
  const [salary, setSalary] = React.useState();
  let [tax, setTax] = React.useState();
  const [netSalary, setNetSalary] = React.useState();
  const [taxPercentage, setTaxPercentage] = React.useState();

  const calculate = () => {
    tax = (salary * taxPercentage) / 100;
    setTax(tax);
    const netSalaryTotal = salary - tax;
    setNetSalary(netSalaryTotal);
  };

  React.useEffect(() => {
    calculate();
  }, [taxPercentage, salary, tax, netSalary]);

  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Tax Calculation</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label>Employee name</label>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Employee name"
              variant="outlined"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <label>Salary</label>
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
          <Grid item xs={6}>
            <label>Tax percentage %</label>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter tax percentage"
              variant="outlined"
              type="number"
              value={taxPercentage}
              onChange={(e) => setTaxPercentage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Tax</label>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter tax"
              variant="outlined"
              type="number"
              disabled
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <label>Net salary</label>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Enter net Salary"
              variant="outlined"
              type="number"
              disabled
              value={netSalary}
              onChange={(e) => setNetSalary(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
