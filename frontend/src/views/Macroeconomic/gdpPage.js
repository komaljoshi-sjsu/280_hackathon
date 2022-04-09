import * as React from "react";
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
class Mileage extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "default",
    };
  }
  componentDidMount() {}

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
                <label style={{ "font-weight": "bold" }}>GDP</label>
                <Chart
                  chartType="AreaChart"
                  data={[
                    ["Age", "Weight"],
                    [4, 5.5],
                    [8, 12],
                  ]}
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
                    <ListItemText
                      fontSize="12"
                      primary="Note1"
                      secondary={""}
                    />
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
}

export default Mileage;
