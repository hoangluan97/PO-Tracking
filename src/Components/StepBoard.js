import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import SubStep from "./SubStep";

function StepBoard({ stepArray, poStep, currentStep, updatePoStep }) {
  let highlightStep = "";
  if (currentStep) {
    highlightStep =
      "border-green-500 border-2 px-1 rounded-md bg-green-500 text-white text-[15px]";
  }
  // console.log(stepArray);
  console.log(poStep);

  let subStepContent = (step) => {
    if (currentStep) {
      return step.subStep.map((step, index) => <p key={index}>{step}</p>);
    } else {
      if (step.subStep[0])
        return (
          <SubStep
            poStep={poStep}
            stepArray={stepArray}
            step={step}
            updatePoStep={updatePoStep}
          />
        );
    }
  };
  const stepBoardContent = poStep.map((step, index) => (
    <div
      key={index}
      className={"flex flex-col items-start justify-start space-y-2 min-w-fit"}
    >
      <div className={"flex items-center justify-between space-x-2 w-full"}>
        {step.nameStep === currentStep ? (
          <div className={highlightStep}>{step.nameStep}</div>
        ) : (
          <div className="border-green-500 border-2 px-1 rounded-md">
            {step.nameStep}
          </div>
        )}
        {index !== poStep.length - 1 && (
          <div>
            <ArrowRightIcon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="ml-1">{subStepContent(step)}</div>
    </div>
  ));

  return (
    <div className="flex space-x-3 items-start justify-start p-3 min-h-fit h-full w-[100%] flex-wrap">
      {stepBoardContent}
    </div>
  );
}

export default StepBoard;
