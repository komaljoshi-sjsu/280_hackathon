import * as React from "react";
import { useState, useEffect } from "react";
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
import backendServer from "../../webConfig";
import axios from "axios";
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

function GdpGrowth(props) {
  const [page, setPage] = useState("gdpGrowth");
  const [year, setYear] = useState([]);
  const [val, setVal] = useState([]);
  const [startDate, setStartDate] = useState(2012);
  const [endDate, setEndDate] = useState(2020);
  const [country, setCountry] = useState("India");
  const [headerType, setHeaderType] = useState("GDP growth");
  const [type, setType] = useState("gdp");
  const [graphData, setGraphData] = useState([]);
  const [value2, setValue2] = React.useState([0, 15]);
  const minDistance = 15;

  const years = [
    {
      value: 0,
      label: "1960",
    },
    {
      value: 15,
      label: "1970",
    },
    {
      value: 30,
      label: "1980",
    },
    {
      value: 45,
      label: "1990",
    },

    {
      value: 60,
      label: "2000",
    },

    {
      value: 75,
      label: "2010",
    },
    {
      value: 90,
      label: "2020",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
      setStartDate(years.find((p) => p.value === value2[0]).label);
      setEndDate(years.find((p) => p.value === value2[1]).label);
    }
  };
  useEffect(() => {
    axios
      .get(
        `${backendServer}/macro/getFileData/${startDate}/${endDate}/${headerType}/${type}/${country}`
      )
      .then((res) => {
        if (res.status == 200) {
          let recs = res.data;

          let fv = [["Year", "GDP"]];
          for (let i = 0; i < recs.length; i++) {
            fv.push(recs[i]);
          }
          // }
          console.log("year arr", fv);
          setGraphData(fv);
        }
      });
  }, [startDate, endDate, headerType, type, country]);
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
              getAriaLabel={() => "Minimum distance shift"}
              value={value2}
              label={valuetext}
              onChange={handleChange2}
              valueLabelDisplay="on"
              step="15"
              getAriaValueText={valuetext}
              disableSwap
              mark={years}
            />
          </Row>
        </Card.Body>
      </Card>
      &nbsp;
      <Card>
        <Card.Body>
          <Row>
            <Col md={8}>
              <label style={{ "font-weight": "bold" }}>GDP % Growth</label>
              <Chart
                chartType="AreaChart"
                data={graphData}
                width="100%"
                height="400px"
                legendToggle
              />
            </Col>
            <Col md={4}>
              <label style={{ "font-weight": "bold" }}>Annotations</label>
              <List>
                <ListItem>
                  <ListItemIcon size="sm">
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText fontSize="12" primary="Note1" secondary={""} />
                </ListItem>
              </List>
              <Button size="small" sx={{ fontSize: 12 }}>
                + Add Annotation
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
export default GdpGrowth;
/*class GdpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "default",
      annotations: [],
      date1: "2010",
      date2: "2012",
      value: [2010, 2012],
      type: "gdp",
      country: "India",
      data: [],
      years: [],
      headerType: "GDP growth",
    };
  }
  componentDidMount() {
    this.handleLogin();
  }
  addAnnotation = () => {
    //add annotation in state array
  };
  valuetext = (value) => {
    return `${years}°C`;
  };

  handleYear1 = (e, data) => {
    this.setState({
      value: data,
    });
  };

  handleLogin = (e) => {
    const { type, country, date1, date2, headerType } = this.state;
    axios
      .get(
        `${backendServer}/macro/getFileData/${date1}/${date2}/${headerType}/${type}/${country}`
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          let yearArr = [];
          let valArr = [];
          for (let i = 0; i < response.data.length; i++) {
            let rec = response.data[i];
            yearArr.push(rec[0]);
            valArr.push(rec[1]);
          }
          this.setState({
            data: [["gdp", "year"], yearArr, valArr],
          });
        } else {
          this.setState({ errorMsg: response.data });
        }
      })
      .catch((err) => {
        this.setState({ errorMsg: err });
      });
  };

  processData = (data) => {
    let years = [];
    let gdp = [];
    for (let i = 0; i < data.length; i++) {
      years[i] = parseInt(data[i].Year);
      gdp[i] = parseInt(data[i].val);
    }
    this.setState({
      data: [["GDP", "Year"], years, gdp],
    });
  };
  handleYear2 = () => {};
  render() {
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
                getAriaLabel={() => "Temperature range"}
                value={this.state.value}
                onChange={this.handleYear1}
                valueLabelDisplay="on"
                getAriaValueText={this.valuetext}
                step={10}
                marks={this.state.years}
              />
            </Row>
          </Card.Body>
        </Card>
        &nbsp;
        <Card>
          <Card.Body>
            <Row>
              <Col md={8}>
                <label style={{ "font-weight": "bold" }}>GDP</label>
                <Chart
                  chartType="LineChart"
                  data={this.state.data}
                  width="100%"
                  height="400px"
                />
              </Col>
              <Col md={4}>
                <label style={{ "font-weight": "bold" }}>Annotations</label>

                <List>
                  <ListItem>
                    <ListItemIcon size="sm">
                      <Arrow />
                    </ListItemIcon>
                    <ListItemText
                      fontSize="12"
                      primary="Note1"
                      secondary={""}
                    />
                  </ListItem>
                </List>
                <Button
                  size="small"
                  sx={{ fontSize: 12 }}
                  onClick={this.addAnnotation}
                >
                  + Add Annotation
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default GdpPage;*/
