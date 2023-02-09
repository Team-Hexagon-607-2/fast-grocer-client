import { useContext } from "react";
import { StateContext } from "../../../contexts/AuthProvider";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Reports = () => {
  const { AllOrders, AllOrdersLoading, AllOrdersRefetch } =
    useContext(StateContext);

  return (
    <>
      <p className="ml-4 mt-3 font-bold text-lg">Sales Volume </p>
      <div className="w-[800px] h-[500px] mt-10">
        {" "}
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={AllOrders?.data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total_price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="name" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Reports;
