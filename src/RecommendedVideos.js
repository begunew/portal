import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Welcome to Portal</h2>
            <p>
                1. First Online Registration Period: June 10, 2020 (8 a.m.) to
                June 19, 2020 (4:30 p.m.)
            </p>
            <p>
                2. Second Online Registration Period: August 24, 2020 (8 a.m.)
                to August 31, 2020 (4:30 p.m.)
            </p>
            <p> 3.Add/Drop Period: 1) August 31, 2020 (8 a.m.) to September</p>
            <p>
                4. 2020 (Paper Add by 4:30 p.m., Online Add/Drops by 4:30 p.m.)
                2) You may drop or add a course through WISE without the
                instructor's signature. NOTE: You may use a "Course Change Form"
                ONLY when a course is full and there are no open seats
                available. Please contact your department Secretary.
            </p>
            <p>
                5. Late Registration with Late Fee (10,000 MNT): 1) September 7,
                2020 (8 a.m.) to September 11, 2020 (4 p.m.). 2) September 11,
                2020 is the hard deadline for tuition fee payment. Please be
                informed that late payment cannot be accepted. 3) No course drop
                is available during the late registration. 4) Unregistered
                students are allowed to take classes during the late
                registration period.
            </p>
            <p>
                6. Course Withdrawal Period: 1) From Week 3 to Week 4, September
                14, 2020 to September 25, 2020 (5 p.m.) 2) Students Should
                Maintain a full-time status (a minimum of 12 credits) after
                withdrawal.
            </p>
        </div>
    );
}

export default RecommendedVideos;
