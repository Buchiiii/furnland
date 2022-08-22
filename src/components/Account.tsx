import { Row, Col, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Input } from "./Fields";
import * as Yup from "yup";
import Spinner from 'react-bootstrap/Spinner';

import axios from "axios";
import { User } from "./Types";
export const Account = () => {
  const [data, setdata] = useState<User | null>(null);
  const [addressinformation, setaddressinformation] = useState<
    { country: string; address: string }[] | null
  >(null);
  const [istrue, setistrue] = useState(true);
  const [address, setaddress] = useState(false);
  const [show, setshow] = useState(false);
  const [profile, setprofile] = useState<string[] | null>(null);

  const initialvalues = {
    country: "",
    address: "",
  };

  const validate = Yup.object({
    country: Yup.string(),
    address: Yup.string(),
  });

  const handleshow = () => {
    setshow(true);
  };

  const handlehide = () => {
    setshow(false);
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data?.token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  const postaddress = async (submit: { country: string; address: string }) => {
    try {
      const response = await axios.post(
        "https://test-furn.herokuapp.com/users/currentUser/newAddress",
        {
          country: submit.country,
          address: submit.address,
        },
        config
      );
      //navigate("/")
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const getaddress = async () => {
    try {
      const response = await axios.get(
        "https://test-furn.herokuapp.com/users/currentUser/addressbook",
        config
      );
      console.log(response);
      setaddressinformation(response.data);
    } catch (err) {
      console.log(err);
    }
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
      if(data.role ===1){
        getaddress();
      }
      
    }
  }, [data]);

  return (
    <>
      {istrue ? (
        <>
          <Col lg={12} className="border-bottom">
            <div className="pt-2">
              <h5>Account Overview</h5>
            </div>
          </Col>
          <Row className="pt-3">
            <Col className="" lg={data && data.role === 3 ? 12 : 6}>
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
                <div className="pt-5 text-center"><Spinner animation="border"/></div>
              )}
            </Col>
            {data && data.role === 1 ? 
            <Col lg={6}>
              <>
                <div className="d-flex justify-content-between ps-2 pt-3 pb-2 border border-bottom">
                  <h6>ADDRESS BOOK</h6>
                  <button
                    onClick={() => {
                      setistrue(false);
                      setaddress(true);
                    }}
                    className="me-2 btn btn-md"
                  >
                    {" "}
                    <i className="bi bi-pencil-square"></i>{" "}
                  </button>
                </div>
                {addressinformation ? (
                  <>
                    {addressinformation && addressinformation.length > 0 ? (
                      <div className="ps-2 pt-4  border-bottom border-start border-end">
                        <p>Your default shpping address is:</p>
                        <p>{addressinformation[0].address}</p>
                        <p className="text-muted">
                          {addressinformation[0].country}
                        </p>
                      </div>
                    ) : (
                      <div className="ps-2 pt-4  border-bottom border-start border-end">
                        <p>You have no default address</p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="pt-5 text-center"><Spinner animation="border"/></div>
                )}
              </>
            </Col>
            :null}
          </Row>{" "}
        </>
      ) : null}
      {address ? (
        <>
          <Col>
            <div className="">
              <button
                onClick={() => {
                  setistrue(true);
                  setaddress(false);
                }}
                style={{ backgroundColor: "#F66B0E" }}
                className="bg-light shadow mt-2 btn"
              >
                Go back
              </button>
            </div>
            <div className="text-end">
              <button
                onClick={() => {
                  handleshow();
                }}
                style={{ backgroundColor: "#F66B0E" }}
                className="btn text-white"
              >
                Add New Address
              </button>
            </div>
            <Row className="mt-3">
            {addressinformation && addressinformation.map((element,index)=>(
              <Col lg={6} className="mb-3"  >
                 <div className="pt-2 border-top border-start border-end text-center">
                  <h5>Address {index + 1}</h5>
                  </div>
                  
                <div className="ps-3 border">
                 
                  
                <p>{element.address}</p>
                <p>{element.country}</p>
                <div className="text-end p-2" >
                  <button type="button" className="btn btn-sm  btn-danger"><span><i className="bi bi-trash3"></i></span></button>
                </div>
                </div>
              </Col>
            ))}
            </Row>
          </Col>
        </>
      ) : null}

      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={async (value, props) => {
          await postaddress(value);
          await getaddress()
          props.resetForm();
          handlehide();
        }}
      >
        {(formikprops) => {
          return (
            <Modal
              show={show}
              onHide={() => {
                handlehide();
                formikprops.resetForm();
              }}
            >
              <Form>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Input name="country" type="text" label="Country" />
                  <Input name="address" type="text" label="Address" />
                </Modal.Body>
                <Modal.Footer>
                  <button
                    onClick={() => {
                      handlehide();
                      formikprops.resetForm();
                    }}
                    type="button"
                    className="btn btn-light"
                  >
                    Cancel
                  </button>
                  <input
                    type="submit"
                    value="Add"
                    className="btn btn-primary"
                  />
                </Modal.Footer>
              </Form>
            </Modal>
          );
        }}
      </Formik>
    </>
  );
};
