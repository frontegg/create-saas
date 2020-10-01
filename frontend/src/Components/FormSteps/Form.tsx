import React from 'react';
type StepProps = {
  steps?: {
    active?: boolean;
    visited?: boolean;
    label: string;
    number?: number;
    disabled?: boolean;
  }[];
};

type Props = {
  stepElement: React.ComponentType<any> | React.ElementType<any>;
  formSteps: {
    key: number;
    fields: {
      label: string;
      value: string;
      type: string;
      placeholder: string;
    }[];
  }[];
  setField?: void;
} & React.HTMLAttributes<HTMLFormElement> &
  StepProps;

export const StepForm: React.FC<Props> = ({ formSteps, stepElement, steps, setField, onSubmit }) => {
  const formStepsInitialState: { [key: string]: any } = {};
  formSteps.map((step, index) => {
    return step.fields.map((field) => {
      return (formStepsInitialState[step.key + field.label] = field.value);
    });
  });
  const [inputFields, setInputFields] = React.useState(formStepsInitialState);
  const [stepState, setStepState] = React.useState(steps);
  const [activeKey, setActiveKey] = React.useState<number>(1);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cloneStep = [...stepState!];

    const index = cloneStep.findIndex((item) => item.active);
    if (cloneStep.length > index + 1) {
      cloneStep[index].active = false;
      cloneStep[index].visited = true;
      cloneStep[index + 1].active = true;
      cloneStep[index + 1].disabled = false;
    }

    setStepState(cloneStep);
    setActiveKey(cloneStep[index + 1].number || index + 2);
  };

  const handleClick = (event: React.MouseEvent<any>, currentClickNumber: number) => {
    let cloneStep = [...stepState!];

    cloneStep = cloneStep.map((step, index) => {
      const num = step.number ? step.number : index + 1;
      step.active = num === currentClickNumber;
      step.visited = num < currentClickNumber;

      return step;
    });
    setStepState(cloneStep);
    setActiveKey(currentClickNumber);
  };
  const StepComponent: React.ElementType<any> = stepElement;
  return (
    <div>
      <StepComponent onClick={handleClick} steps={stepState} />
      <form onSubmit={handleSubmit}>
        {formSteps.map((step, index) => {
          return (
            <div key={index} className='d-flex flex-column'>
              {step.key === activeKey &&
                step.fields.map((item) => {
                  return (
                    <label key={item.label}>
                      {item.label}
                      <input
                        required
                        className='w-100 mt-2 form-control'
                        type={item.type}
                        name={item.label}
                        value={inputFields[step.key + item.label]}
                        onChange={(event) => {
                          setInputFields({
                            ...inputFields,
                            [step.key + item.label]: event.currentTarget.value,
                          });
                        }}
                        placeholder={item!.placeholder}
                      />
                    </label>
                  );
                })}
            </div>
          );
        })}
        <input className='btn btn-primary' type='submit' value='Submit' />
      </form>
    </div>
  );
};
