import {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Slider from "@mui/material/Slider";
import { Chart } from "react-google-charts";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Arrow from "@mui/icons-material/NoteAltOutlined";
import ListItemText from "@mui/material/ListItemText";
import axios from 'axios';

const marks = [
  {
    value: 2010,
    label: "2010",
  },
  {
    value: 2020,
    label: "2020",
  },
  {
    value: 2021,
    label: "2021",
  },
  {
    value: 2021,
    label: "2022",
  },
];
function Import(props) {
    const[commodity,setCommodity] = useState('Wheat');
    const[year,setYear] = useState(2001);
    const[startDate,setStartDate] = useState(1980);
    const[endDate,setEndDate] = useState(2020);
    const[country,setCountry] = useState('Egypt');
    const[graphData, setGraphData] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:5000/import/pie/getFileData/'+country+'/'+year+'/'+commodity).then(res => {
            if(res.status==200) {
                let recs = res.data;             
                let fv = [['Country','Quantity(tonnes)']];
                for(let i=0;i<recs.length;i++) {
                    
                    fv.push(recs[i]);
                }
                // }
                console.log('year arr',fv);
                setGraphData(fv)
            }
        })
    },[startDate,endDate,country])
    return (
        <>
          <div>
            <Dropdown>
              <Dropdown.Toggle className="header-user" id="dropdown-basic">
                Government Representive
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                <Dropdown.Item href="/userprofile">Researcher</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          &nbsp;
          <Card>
            <Card.Body>
              <Row>
                <label style={{ "font-weight": "bold" }}>Year</label>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={20}
                  getAriaValueText=""
                  step={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Row>
            </Card.Body>
          </Card>
          &nbsp;
          <Card>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <label style={{ "font-weight": "bold" }}>Pie Chart</label>
                  <Chart
                    chartType="PieChart"
                    data={graphData}
                    width="100%"
                    height="400px"
                    legendToggle
                  />
                </Col>
                
              </Row>
            </Card.Body>
          </Card>
        </>
      );
}
export default Import;
