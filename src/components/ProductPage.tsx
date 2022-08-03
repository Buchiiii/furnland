import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Get } from "./Axiosoperations";
import { productProps } from "./Types";
import { loginContext, userContext } from "./usecontext";
import { useNavigate } from "react-router-dom";

export const Productpage = () => {
  const navigate = useNavigate();
  const log = useContext(loginContext);
  const users = useContext(userContext);
  const [responsedata, setresponsedata] = useState<productProps[] | null>(null);
  const getresponse = async () => {
    const response = await Get(
      "https://test-furn.herokuapp.com/item/items/?_limit=2"
    );
    setresponsedata(response?.data);
    // console.log(responsedata);
  };
  if (users) {
    if (users.user) {
      users.user.token ? console.log(users.user.token) : console.log("nothing");
    }
  }

  const token = localStorage.getItem("token") || "";
  //console.log(token)

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    }
  };

  const postdata = async (id: number) => {
    try {
      const response = await axios.post(
        `https://test-furn.herokuapp.com/item/itemSelect/${id}`,
        {},
        config
      );
      console.log(response);
    } catch (err) {}
  };
  useEffect(() => {
    getresponse()
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row gy-0">
          {responsedata ? (
            responsedata.map((element) => (
              <div className="col-6 col-lg-3 " key={element.id}>
                <div style={{ height: "400px" }}>
                  <div className="h-50 border"></div>
                  <div className="row">
                    <div className="col-12">
                      <span>{element.itemName}</span>
                    </div>
                    <div className="col-12">
                      <span>#{element.itemPrice}</span>
                    </div>
                    <div className="col-12">
                      <span className="text-muted">
                        {element.itemDescription}
                      </span>
                    </div>
                    <div className="col-12 pt-4">
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={async () => {
                            log.loggedin
                              ? await postdata(element.id)
                              : navigate("/login");
                          }}
                          style={{ backgroundColor: "#F66B0E" }}
                          className="w-50 text-white btn btn"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
};
