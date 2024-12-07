"use client";

import React, { useState } from "react";
import Landing1 from "../component/ladingpage/landing1";
import Landing2 from "../component/ladingpage/landing2";
import Landing3 from "../component/ladingpage/landing3";
import Landing4 from "../component/ladingpage/landing4";
import Point from "../component/ladingpage/point";
import Nav from "../component/nav";

function Page() {
  const [page, setPage] = useState("landing1");
  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-col h-[80vh] justify-center">
        {page === "landing1" && (
          <Landing1 onClick={() => setPage("landing2")} />
        )}
        {page === "landing2" && (
          <Landing2
            onClick1={() => setPage("landing3")}
            onBack={() => setPage("landing1")}
          />
        )}
        {page === "landing3" && (
          <Landing3
            onClick2={() => setPage("landing4")}
            onBack1={() => setPage("landing2")}
          />
        )}
        {page === "landing4" && (
          <Landing4 onBack2={() => setPage("landing3")} />
        )}
        <Point value={page}></Point>
      </div>
    </div>
  );
}

export default Page;
