import { useState,useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Input, Textarea } from "./Fields";
import { Formik, Form } from "formik";
import { User,vendorProps } from "./Types";
import {productProps} from "./Types";
import Spinner from 'react-bootstrap/Spinner';

import * as Yup from "yup";
import axios from "axios";
export const Vendor = () => {
  const [add, setadd] = useState(false);
  const [show, setshow] = useState(true);
  const [data, setdata] = useState<User | null>(null);
  const [vendoritems,setvendoritems]=useState<productProps[] | null>(null)

  const initialvalues = {
    itemName: "",
    itemType: "",
    itemCategory: "",
    itemPrice: "",
    itemDescription: "",
    imageUrl: "",
    deliveryEstimation: "",
  };

  const validate = Yup.object({});
  const configg = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data?.token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };
  const getVendorItems=async()=>{
    try{
      const response = await axios.get(`https://test-furn.herokuapp.com/item/vendor/${data?.id}`,configg);
      console.log(response);
      setvendoritems(response.data);
    }catch(err){
      console.log(err);
    }
  }
  const submit=async(values:vendorProps)=>{
    try{
        const response = await axios.post(
          "https://test-furn.herokuapp.com/item/itemCreation",
          {
      itemName: values.itemName,
    itemType: values.itemType,
    itemCategory: values.itemCategory,
    itemPrice: values.itemPrice,
    itemDescription: values.itemDescription,
    imageUrl: values.imageUrl,
    deliveryEstimation: values.deliveryEstimation
          },
          configg
        );
        //navigate("/")
        console.log(response);
     
        

    }catch(err){
      console.log(err);
      
    }
  }
  useEffect(() => {
    const dataa = window.localStorage.getItem("Data");
    if (dataa) {
      setdata(JSON.parse(dataa));
    }

    
  }, []);
  useEffect(()=>{
    if(data){
      getVendorItems()
    }
  },[data])
  return (
    <>
      {show ? (
        <>
        <div className="text-end p-2">
          <button
            onClick={() => {
              setshow(false);
              setadd(true);
            }}
            style={{ backgroundColor: "#F66B0E" }}
            className="btn text-white"
          >
            Add New Item
          </button>
        </div>
        {vendoritems ? <>
        {vendoritems.length > 0 ? <>
          <Row className="p-3">
                { vendoritems.map((element)=>(
                    <Col key={element.id} lg={12} className="mb-3 rounded border d-flex">
                        <div className="w-25">
                         <span>Hello</span>
                        </div>
                        <div className="p-2 d-flex flex-column pb-3  w-75">
                            <span className="mb-1">{element.itemName}</span>
                            <span className="mb-3 text-muted">{element.itemDescription}</span>
                            
                        </div>
                    </Col>
                ))}
           </Row>
        </> :<p>You dont have any item</p>}</> :<div className="text-center"><Spinner animation="border"/></div> }
        </>
        
      ) : null}
      {add ? (
        <>
          <div className="p-2">
            <button
              className="btn btn-light"
              onClick={() => {
                setshow(true);
                setadd(false);
              }}
            >
              Go back
            </button>
          </div>
          <Formik
            initialValues={initialvalues}
            validationSchema={validate}
            onSubmit={async(value,props) => {
              await submit(value);
              props.resetForm();

            }}
          >
            {(formikprops) => {
              return (
                <Form>
                  <Row className="p-2">
                  <Col lg={12} className="">
                      <Row className="justify-content-center">
                        <Col lg={6}>
                          <div className="">
                            <Input
                              name="imageUrl"
                              type="file"
                              label="Image"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                      <Input name="itemName" type="text" label="Item Name" />
                    </Col>
                    <Col lg={6}>
                      <Input name="itemType" type="text" label="Item Type" />
                    </Col>
                    <Col lg={6}>
                      <Input
                        name="itemCategory"
                        type="text"
                        label="Item Category"
                      />
                    </Col>
                    <Col lg={6}>
                      <Input name="itemPrice" type="text" label="Item Price" />
                    </Col>
                    <Col lg={12} className="">
                      <Row className="justify-content-center">
                        <Col lg={6}>
                          <div className="">
                            <Input
                              name="deliveryEstimation"
                              type="text"
                              label="Delivery Estimation"
                            />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                   
                    <Col lg={12}>
                      <Textarea
                        name="itemDescription"
                        label="Item Description"
                        type="textarea"
                      />
                    </Col>
                    <Col>
                      <div className="text-end p-2">
                        <button
                          type="button"
                          onClick={() => {
                            setshow(true);
                            setadd(false);
                          }}
                          className="btn me-2 btn-light"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Add
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </>
      ) : null}
    </>
  );
};
