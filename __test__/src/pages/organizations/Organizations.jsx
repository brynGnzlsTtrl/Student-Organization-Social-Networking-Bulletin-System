import React from "react";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";
import axios from "axios";

import NameTag from "../../../common/components/NameTag.jsx";

const OrgId = {
  BPSUACIOP: "63d32d15d18ad03d7bbbe042",
  BPSUACP: "63d32ef188f7c7250071b79f",
  BPSUTRISKELION: "63d33d8f19dbc696255e875e",
  BPSUSOIES: "63d33e188be7396f2985d456",
  BPSUSOMES: "63d33f3104299b2e65a9e440",
  BPSUSSITE: "63d33f85ffc29bd3e6618a2f",
  BPSUDOST: "63d323d709a17736e5728637",
  BPSUCSIE: "63d33fe9f61ad2d9124f3769",
  BPSUHMD: "63d3403d376f3c100223df4d",
  BPSUIMOTM: "63d3408d0aa913c3d52da669",
  BPSUIOEEOTP: "63d3411fdc4b8276e1d14d1b",
  BPSUIOSIEEOTP: "63d34199aba0b38aa74ddca4",
  BPSUPIOCV: "63d3426edc63654d207536c8",
  BPSUPNUSABC: "63d342e8e3f287e3031e6e00",
  BPSUUAOFTPSA: "63d3433d59a774a2be2f6015",
};
let hypenStart = window.location.href.indexOf("-") + 1;
let ampersandEnd = window.location.href.indexOf("&") + 1;

console.log("outsideFunctoin");
export default function Organizations() {
  const [id, setIds] = useImmer({ orgId: "", userId: "" });
  const [userData, setUserData] = useImmer({
    fullName: "",
    position: "",
  });
  useEffect(() => {
    setIds((draft) => {
      draft.orgId = window.location.href.slice(hypenStart, ampersandEnd - 1);
      draft.userId = window.location.href.slice(ampersandEnd);
    });
    axios
      .post("/query/getUser", { id: window.location.href.slice(ampersandEnd) })
      .then((res) => {
        const { firstName, lastName, organizations } = res.data;
        console.log(res.data);

        setUserData((draft) => {
          draft.fullName = `${firstName} ${lastName}`;
        });
        let highestPosition = "Member"
        if (organizations.length !== 0) {
          organizations.map((e) => {
            if (e.position !== "Adviser") {
              if (e.position != "President") {
                if (
                  e.position === "Officer" &&
                  userData.position !== "President"
                ) {
                  highestPosition = "Officer";
                }
              } else highestPosition = "President";
            } else highestPosition = "Adviser"
          });
        } 
        setUserData((draft) => {
          draft.position = highestPosition;
        });
      });
    console.log(id.userId);
  }, []);
  console.log(id.userId, " User Id");
  console.log(userData);

  return (
    <>
      {/* <div className="header" style={{position: "sticky", top: "0", zIndex: "3"}}>
        <a href={`/org-${OrgId.org}&${id}`}>Student Organization Bulletin</a>
        <div className="header-right">
          <h4>
            Bataan Peninsula State University
            <br />
            Main Campus
          </h4>
        </div>
        <div className="logo">
          <img
            src={require("Assets/svg/bpsulogo.svg")}
            alt="bpsu logo"
            style={{ width: "75px", height: "75px" }}
          />
        </div>
      </div> */}
      <NameTag id={id} userData={userData} />
      <div className="orgs-page">
        <img
          src={require("Assets/svg/org-page-bg.svg")}
          width="100%"
          alt="org event image"
        />
      </div>
      <div className="txt1">
        <a
          className="apply-button"
          style={{ textDecoration: "none", color: "antiquewhite" }}
          href=""
        >
          <h1>Accredited Organizations </h1>
        </a>
      </div>
      <div id="orgs-jumphere" className="org-row-1">
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUACIOP}&${id.userId}`}>
            <img
              src={require("Assets/svg/AmericanConcreteInstituteofthePhilippines-BPSUStudentChapter.svg")}
              alt="American Concrete Institute of the Philippines-BPSU StudentChapter logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUACP}&${id.userId}`}>
            <img
              src={require("Assets/svg/AsociaciondeComadronasPeninsulares.svg")}
              alt="Asociacion de Comadronas Peninsulares logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUTRISKELION}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSUMainCampusTriskelion.svg")}
              alt="BPSU College Red Cross Youth Council logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.org}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSUCollegeRedCrossYouthCouncil.svg")}
              alt="BPSU Main Campus Triskelion logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <div className="org-row-2">
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUSOIES}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSUSocietyofIndustrialEngineeringStudents.svg")}
              alt="BPSU Society of Industrial Engineering Students logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUSOMES}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSUSocietyofMechanicalEngineeringStudents.svg")}
              alt="BPSU Society of Mechanical Engineering Students logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUSSITE}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSUStudentSocietyonInformationTechnologyEducation.svg")}
              alt="BPSU Student Society on Information Technology Education logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUDOST}&${id.userId}`}>
            <img
              src={require("Assets/svg/BPSU-DOSTOrganizationofScholars.svg")}
              alt="BPSU-DOST Organization of Scholars logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <div className="org-row-3">
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUCSIE}&${id.userId}`}>
            <img
              src={require("Assets/svg/Care,Save,ImmortalizeEarth.svg")}
              alt="Care, Save, Immortalize Earth logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUHMD}&${id.userId}`}>
            <img
              src={require("Assets/svg/HMDiversity.svg")}
              alt="HM Diversity logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUIMOTM}&${id.userId}`}>
            <img
              src={require("Assets/svg/InnovativeMoversofTourismManagement.svg")}
              alt="Innovative Movers of Tourism Management logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUIOEEOTP}&${id.userId}`}>
            <img
              src={require("Assets/svg/InstituteofElectronicsEngineersofthePhilippines-BPSUStudentChapter.svg")}
              alt="Institute of Electronics Engineers of the Philippines- BPSU Student Chapter logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
      </div>
      <br />
      <div className="org-row-4">
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUIOSIEEOTP}&${id.userId}`}>
            <img
              src={require("Assets/svg/InstituteofIntegratedElectricalEngineersofthePhilippines,Inc.-BPSUStudentGovernment.svg")}
              alt="Institute of Integrated Electrical Engineers of the Philippines, Inc.- BPSU Student Government logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUPIOCV}&${id.userId}`}>
            <img
              src={require("Assets/svg/PhilippineInstituteofCivilEngineers-BPSUStudentChapter.svg")}
              alt="Philippine Institute of Civil Engineers- BPSU Student Chapter logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUPNUSABC}&${id.userId}`}>
            <img
              src={require("Assets/svg/PhilippineNursingStudentsAssociationBataanChapter.svg")}
              alt="Philippine Nursing Students Association Bataan Chapter logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
        <div className="org-column">
          <a href={`/org-${OrgId.BPSUUAOFTPSA}&${id.userId}`}>
            <img
              src={require("Assets/svg/UnitedArchitectsofthePhilippinesStudentAuxiliary-BPSU.svg")}
              alt="United Architects of the Philippines Student Auxiliary- BPSU logo"
              className="org-logos"
              style={{ width: "300px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
