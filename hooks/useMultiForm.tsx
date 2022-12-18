import { ReactElement, useState } from 'react'
const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setcurrentStepIndex] = useState(0)

  function nextStep() {
    setcurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function backStep() {
    setcurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    backStep,
  }
}

export { useMultiStepForm }
