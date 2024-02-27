import './App.css';
import {MuiTableCustom} from "./mui-custom-table/mui-table-custom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

function App() {
    const config  = {
        columns : [
            { id: 'name', label: 'Name', minWidth: 170 },
            { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
            { id: 'population', label: 'Population', minWidth: 170, align: 'right'},
            { id: 'size', label: 'Size\u00a0(km\u00b2)', minWidth: 170, align: 'right'}
            ],
        data : [
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
            {name: 'India' ,code: 'IN', population: 1324171354 , size: 3287263},
        ],
        localPagination: false
    }
  return (
    <div className="App" style={{margin: '50px'}}>
        <ThemeProvider theme={theme}>
                  <MuiTableCustom config={config} loading={true}/>
        </ThemeProvider>
    </div>
  );
}

export default App;
