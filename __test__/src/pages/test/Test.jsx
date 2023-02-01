import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useImmer } from "use-immer";

// import "Common/styles/components/_nameTag.scss";

export default function Test() {
  return (
    <div class="table-cont">
      <table>
        <thead>
          <tr>
            <th>Student number</th>
            <th>Applicant name</th>
            <th>Membership payment fee RN</th>
            <th>Comments</th>
            <th>Accept/Reject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20-00000</td>
            <td>Mark Fernan Simeon</td>
            <td>21317428</td>
            <td>
              <textarea
                name="Comments-Membership"
                id=""
                cols="30"
                rows="2"
              ></textarea>
            </td>
            <td>
              <button class="acceptm-btn">Accept</button>
              <button class="rejectm-btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
