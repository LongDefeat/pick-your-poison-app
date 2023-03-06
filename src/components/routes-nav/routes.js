import React from "react";
import Home from "../pages/index.js";
// import { Routes, Route } from "react-router-dom";
import Link from "next/Link";

function RoutesFunction() {
  return (
    <>
      <Link>
        <a path="/" element={Home} />
      </Link>
    </>
  );
}

export default RoutesFunction;
