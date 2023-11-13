import React from "react";
import styled from "styled-components";
export default function TimeLine() {
  return (
    <TimeLineWrapper>
      <div class="timeline-item">
        <p>Emonics</p>
        <h2>Year 2</h2>
        <p>Event description goes here.</p>
      </div>

      <div class="timeline-item-right">
        <p>Emonics</p>
        <h2>Year 2</h2>
        <p>Event description goes here.</p>
        <div className="tech">
          Tech stack- <br />
          <div className="tech-item">Java|React</div>
        </div>
      </div>

      <div class="timeline-item">
        <p>Emonics</p>
        <h2>Year 2</h2>
        <p>Event description goes here.</p>
        <div className="tech">
          Tech stack<br />
          <div className="tech-item">Java|React</div>
        </div>
      </div>

      <div class="timeline-item-right">
        <p>Emonics</p>
        <h2>Year 2</h2>
        <p>Event description goes here.</p>
        <div className="tech">
          Tech stack- <br />
          <div className="tech-item">Java|React</div>
        </div>
      </div>
    </TimeLineWrapper>
  );
}

const TimeLineWrapper = styled.div`
  position: relative;
  margin: 20px 0;

  padding-left: 20px;
  display: flex;
  flex-direction: column;

  .timeline-item {
    position: relative;
    padding: 10px 20px;
    border-right: 2px solid #333;
    margin-bottom: 20px;
    -webkit-align-self: start;
    -ms-flex-item-align: start;
    align-self: start;
    border: 1px solid #f5deb32e;
    border-radius: 11px;
    background-color: black;
    .tech {
      position: absolute;
      left: 10px;
      color: #86ff15;
      line-height: 16px;
      margin-top: 30px;
      font-family: "Spline Sans Mono", sans-serif;
    }
    .tech-item {
      color: #676060;
      font-size: 12px;
      text-align: start;
    }
  }
  .timeline-item-right {
    position: relative;
    padding: 10px 27px 10px 27px;
    border-left: 2px solid #333;
    margin-bottom: 20px;
    align-self: end;
    border: 1px solid wheat;
    border: 1px solid #f5deb32e;
    border-radius: 11px;
    background-color: black;
    color: white;
    .tech {
      position: absolute;
      right: 10px;
      color: red;
      line-height: 16px;
      margin-top: 30px;
      font-family: "Spline Sans Mono", sans-serif;
    }
    .tech-item {
      color: #705555;
      font-size: 12px;
      text-align: end;
    }
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    font-family: "Spline Sans Mono", sans-serif;
  }

  p {
    margin: 10px 0;
    font-family: "Spline Sans Mono", sans-serif;
  }
`;