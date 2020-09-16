import * as React from 'react';
type StepProps = {
    steps?: {
        active?: boolean,
        visited?: boolean
        label: string,
        number?: number
        disabled? : boolean
    }[]
}

type Props = {
    stepElement: React.ComponentType<any> | React.ElementType<any>,
    formSteps: {
        key: number,
        fields:
        {
            label: string,
            value: string,
            type: string,
        }[],
    }[]
    setField?: void,
} & React.HTMLAttributes<HTMLFormElement> & StepProps

export const StepForm: React.FC<Props> = ({formSteps, stepElement, steps, setField, onSubmit }) => {

    const [stepState, setStepState] = React.useState(steps);
    const [activeKey , setActiveKey] = React.useState<number>(1);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let cloneStep = [...stepState!];

        let index = cloneStep.findIndex((item) => item.active)
            if (cloneStep.length > index + 1)
            {
                cloneStep[index].active = false;
                cloneStep[index].visited = true;
                cloneStep[index+1].active = true;
                cloneStep[index+1].disabled = false;
            }

        setStepState(cloneStep);
        setActiveKey(cloneStep[index+1].number || index+2);
        // console.log(cloneStep[index+1].number || index+2);
    }

    const handleClick = (event: React.MouseEvent<any>, currentClickNumber: number) => {
        
        let cloneStep = [...stepState!];

        cloneStep = cloneStep.map((step, index) => {
            let number;
            if (step.number) {
                number = step.number;
            }
            else number = index + 1;
            step.active = false;
            step.visited = false;
            
            if (number < currentClickNumber) {
                step.visited = true;
            }
            if (number === currentClickNumber) {
                step.active = true;
            }  
            return step;
        })
        setStepState(cloneStep);
        setActiveKey(currentClickNumber);
    }
    const StepComponent: React.ElementType<any> = stepElement;
    return (
        <div>
            <StepComponent onClick={handleClick} steps={stepState}/>
            <form onSubmit={handleSubmit}>
                {
                    formSteps.map((step, index) => 
                        {
                            return (
                                <div key={index} className={`${step.key === activeKey ? 'd-block' : 'd-none'}`}>
                                    {step.fields.map((item) => {
                                        return <label key={item!.label}>
                                            {item.label}
                                            <input type={item!.type} name={item!.label} />
                                        </label>
                                    }) }
                                </div>
                            )
                        
                    })
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
