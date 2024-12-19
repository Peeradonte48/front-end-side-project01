import React from "react";
import "./feature.css";

interface FeatureProp {
  title: string;
  text?: string;
}

export default function Feature({ title, text = "" }: FeatureProp) {
  return (
    <div className="gpt3__features-container__feature" role="article">
      <div className="gpt3__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
