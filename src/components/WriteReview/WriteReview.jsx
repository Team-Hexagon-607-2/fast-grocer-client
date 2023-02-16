import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { StateContext } from "./../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const WriteReview = () => {
  const { state } = useLocation();
  const { user } = useContext(StateContext);
  const [comment, setComment] = useState("");
  const date = moment(state?.deliveryTime).format("LLL");
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);
  const navigate = useNavigate();
  const handleSubmit = (product) => {
    console.log(product);
    const data = {
      productId: product?._id,
      productName: product?.name,
      customerName: user?.displayName,
      customerEmail: user?.email,
      feedback: comment,
      rating: value,
    };

    fetch("https://fg-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("review submitted");
        }
      })
      .catch((error) => toast.error(error));
    navigate("/my-reviews");
  };

  return (
    <div className="w-11/12 mx-auto bg-slate-50">
      <p className="text-sm font-bold text-slate-700 m-4">
        Delivery Time: {date}
      </p>

      <div>
        {state?.order_products?.map((product) => (
          <div key={product?._id} className="flex flex-col gap-6">
            <div className="flex flex-row mt-4 gap-3 gap-y-[20px] ">
              <img
                src={product?.imageUrl}
                className="w-14 h-14 object-contain"
              alt=""/>
              <div>
                <p className="text-sm">{product?.name}</p>

                <div>
                  <div className="flex flex-row items-center mt-3">
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        // name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </Box>
                  </div>
                  <div className="flex-col flex">
                    <input
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write Your Review"
                      className="border-slate-500 border w-[300px] outline-none  py-3 px-10"
                    />
                    <button
                      onClick={() => handleSubmit(product)}
                      className="btn btn-warning w-[100px] mt-2"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriteReview;
