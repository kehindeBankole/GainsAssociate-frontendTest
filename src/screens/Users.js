import React, { useEffect, useState, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TopBar from "../components/topbarhome/TopBar";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router";
import { useQuery} from "react-query";
import { Bar } from "react-chartjs-2";
import Container from "@material-ui/core/Container";
import Localbase from "localbase";

let db = new Localbase("db");

const useStyles = makeStyles((theme) => ({
  root: {},
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  content: {
    width: "100%",
  },
}));

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

function Users() {
  const [state, setstate] = useState([]);
  const [demandlinux, setdemandlinux] = useState([]);
  const [demandwindows, setdemandwindows] = useState([]);

  const d = useRef()
  let history = useHistory();
  const classes = useStyles();
  const { isLoading, error, data, isFetching } = useQuery(
    "repoData",
    () =>
      fetch("https://kehindebankole.github.io/data/data.json").then((res) =>
        res.json()
      ),
    { refetchOnWindowFocus: false,
    //   enabled:false,
    // initialData:()=>{
    //   // return queryCache.find('repoData')
    //   console.log(queryClient.getQueryData('repoData'))
    // }
    }
  );
  if (isLoading) console.log("loading");

  useEffect(() => {
    if (data) {
      data.map((elem) => db.collection("users").add(elem));
    }
  }, [data]);


  function handle() {
    db.collection("users")
      .get()
      .then((users) => {
        setstate(users);
      });
    db.collection("users")
      .doc({ pricing: {} })
      .get()
      .then((document) => {
        console.log(document);
      });
  }
  window.addEventListener("load", () => {
    if (data) db.collection("users").set(data);
  });

  if (isFetching) console.log("bg fetching");
  if (error) console.log(" failed due to reasons");




  function getprice() {
    db.collection("users")
      .get()
      .then((users) => {
        //console.log(users);
        users.filter((d) =>
          d.pricing["af-south-1"]
            ? setdemandlinux((prev) => [
                ...prev,
                d.pricing["af-south-1"].linux.ondemand,
              ])
            : "not available for this region"
        );
        users.filter((d) =>
          d.pricing["af-south-1"]
            ? setdemandwindows((prev) => [
                ...prev,
                d.pricing["af-south-1"].mswin.ondemand,
              ])
            : "not available for this region"
        );
      });
  }

  useEffect(() => {
    db.collection("users")
      .get()
      .then((users) => {
        users.filter((d) =>
          d.pricing["af-south-1"]
            ? setdemandlinux((prev) => [
                ...prev,
                d.pricing["af-south-1"].linux.ondemand,
              ])
            : "not available for this region"
        );
        users.filter((d) =>
          d.pricing["af-south-1"]
            ? setdemandwindows((prev) => [
                ...prev,
                d.pricing["af-south-1"].mswin.ondemand,
              ])
            : "not available for this region"
        );
      });

  }, []);
  const datas = {
    labels: ["1", "2", "3", "4", "5", "6", "7", 8],
    datasets: [
      {
        label: "linux",
        data: demandlinux
          ? demandlinux
          : ["1", "2", "3", "4", "5", "6", "7", 8, 9, 10, 11],
        backgroundColor: "#26c6da",
      },
      {
        label: "windows",
        data: demandwindows
          ? demandwindows
          : ["1", "2", "3", "4", "5", "6", "7", 8, 9, 10, 11],
        backgroundColor: "#816ad6",
      },
    ],
  };

  return (
    <div className={classes.root}>
      {/* {data &&
        data.map((d) => (
          <div style={{ display: "block" }}>
            <p style={{ display: "block", fontSize: "20px" }}>{d.ECU}</p>
          </div>
        ))} */}
      {state &&
        state.map((d, index) => (
          <div style={{ display: "block" }} key={index}>
            {/* <p style={{ display: "block", fontSize: "20px" }}>{d.ECU}</p> */}
          </div>
        ))}
      <Container>
        <main className={classes.content}>
          <TopBar title="Users" subtitle={history.location.pathname} />
          <Divider />
          <button onClick={handle}>click</button>
          <button onClick={getprice}>price</button>
          <select>
            <option value={"linux"}> linux demand</option>
            <option value={"mswin"}> windows demand</option>
          </select>
          <Bar data={datas} options={options} />
        </main>
      </Container>
    </div>
  );
}

export default Users;
