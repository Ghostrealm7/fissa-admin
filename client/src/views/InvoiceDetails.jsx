import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function InvoiceDetails() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then(() => {
      const imgDate = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };

  const navigateRegister = () => {
    navigate(`/createmedicalreport/${id}`);
  };
  // Very important to set useState([]) or ({}) parameter properly...make sure you know what data you will be receiving.
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/api/invoice/${id}`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  console.log(userData);
  return (
    <>
      <div ref={pdfRef} className="flex gap-4">
        <div className="p-4 flex-1 w-40 bg-white shadow-sm justify-around items-center basis-full">
          <div className="flex flex-col items-left justify-center pb-2">
            {/* <div className="rounded h-28 w-28 flex items-center justify-center bg-gray-800">
              <TbListDetails className="text-7xl text-white" />
            </div> */}
            <h1 className="text-xl text-gray-500 font-bold pt-2">
              FISSA CUSTOMER INVOICE
            </h1>
            <h1 className="text-lg text-gray-500 font-bold pt-2">
              Invoice Details
            </h1>
          </div>
          {userData.map((user, index) => (
            <div className="" key={index}>
              <p className="text-sm text-gray-500 ">
                Invoice ID: {user.invoice_id}
              </p>
              <p className="text-sm text-gray-500 ">Issued To: {user.name}</p>
              <p className="text-sm text-gray-500 pb-1">
                Issue Date: {format(new Date(user.issue_date), "dd MMM yyyy")}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Address: {user.address}
              </p>
              <p className="text-sm text-gray-500">
                IP Address: {user.ip_address}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Payment Method: {user.payment_method}
              </p>
              <p className="text-sm text-gray-500">
                Transaction ID: {user.transaction_id}
              </p>
              <p className="text-sm text-gray-500">
                Settlement Date:{" "}
                {format(new Date(user.settlement_date), "dd MMM yyyy")}
              </p>
              <p className="text font-bold text-gray-500 mt-4">
                Amount: {user.amount}
              </p>

              {/* {user.status == "active" ? (
                <p className="text-sm text-gray-500 mt-2">
                  Status: {user.status}{" "}
                  <FaCircle className="inline text-green-500" />
                </p>
              ) : (
                <p className="text-sm text-gray-500 mt-2">
                  Status: {user.status}{" "}
                  <FaCircle className="inline text-red-500" />
                </p>
              )} */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <div className="pt-4">
          <button className="flex py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700">
            <div className="">
              <p className="">Edit Details</p>
            </div>
          </button>
        </div>
        <div className="pt-4">
          <button
            onClick={downloadPDF}
            className="flex py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
          >
            <div className="">
              <p className="">Download PDF</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
