import './App.css';
import {MuiTableCustom} from "./mui-table-custom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

function App() {
  return (
    <div className="App" style={{margin: '50px'}}>
        <ThemeProvider theme={theme}>
                  <MuiTableCustom/>
        </ThemeProvider>
    </div>
  );
}

export default App;
