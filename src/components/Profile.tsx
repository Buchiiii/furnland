import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./Types";

export const Profile = () => {
  const [data, setdata] = useState<User | null>(null);
  const [profile, setprofile] = useState<string[] | null>(null);
  const config = {
    headers: {
      Authorization: `Bearer ${data?.token}`,
    },
  };

  const getprofile = async () => {
    try {
      const response = await axios.get(
        "https://test-furn.herokuapp.com/users/profile",
        config
      );
      setprofile(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const dataa = window.localStorage.getItem("Data");
    if (dataa) {
      setdata(JSON.parse(dataa));
    }
  }, []);
  useEffect(() => {
    if (data) {
      getprofile();
    }
  }, [data]);
  return (
    <>
      <div className="bg-light">
        <Container>
          <Row className="pt-4 pb-5">
            <Col className="bg-white shadow " lg={3}>
              <h1>Hello</h1>
            </Col>
            <Col
              className="bg-white shadow ms-lg-2 border pb-3 border-white rounded "
              lg={8}
            >
              <Col lg={12} className="border-bottom">
                <div className="pt-2">
                  <h5>Account Overview</h5>
                </div>
              </Col>
              <Row className="pt-3">
                <Col className="" lg={6}>
                  <div className="d-flex justify-content-between ps-2 pt-3 pb-2 border border-bottom">
                    <h6>ACCOUNT DETAILS</h6>
                    <button className="btn me-2 btn-md">
                      {" "}
                      <i className="bi bi-pencil-square"></i>{" "}
                    </button>
                  </div>
                  {profile ? (
                    <div className="ps-3 pt-4  border-bottom border-start border-end">
                      <p>{profile[1]}</p>
                      <p className="text-muted">{profile[0]}</p>
                      <button
                        style={{ backgroundColor: "#F66B0E" }}
                        className="mb-3 btn text-white"
                      >
                        Change Password
                      </button>
                    </div>
                  ) : (
                    <p>Loading</p>
                  )}
                </Col>
                <Col lg={6}>
                  <div className="d-flex justify-content-between ps-2 pt-3 pb-2 border border-bottom">
                    <h6>ADDRESS BOOK</h6>
                    <button className="me-2 btn btn-md">
                      {" "}
                      <i className="bi bi-pencil-square"></i>{" "}
                    </button>
                  </div>
                  <div className="ps-2 pt-4  border-bottom border-start border-end">
                    <p>Account details</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
