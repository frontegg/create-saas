import * as React from 'react';
type StepProps = {
    steps?: {
        active?: boolean,
        visited?: boolean
        label: string,
        number?: number
    }[]
}

type Props = {
    stepElement: React.ComponentType<any> | React.ElementType<any>,
    fields:
        {
            label: string,
            value: string,
            type: string,
        }[],
    setField?: void,
} & React.HTMLAttributes<HTMLFormElement> & StepProps

export const StepForm: React.FC<Props> = ({steps, stepElement, fields, setField, onSubmit }) => {

    const [stepState, setStepState] = React.useState(steps);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let cloneStep = [...stepState!];

        let index = cloneStep.findIndex((item) => item.active)
            if (cloneStep.length > index + 1)
            {
                cloneStep[index].active = false;
                cloneStep[index].visited = true;
                cloneStep[index+1].active = true;
            }

        setStepState(cloneStep);
    }
    // const updateField = (event: any) => {
    //     console.log(event)
    //     console.log(setField)
    //     const value, label
    //     setField(label, value)
    // }
    const StepComponent: React.ElementType<any> = stepElement;
    return (
        <div>
            <StepComponent steps={stepState}/>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((item) => {
                        return (
                            <label key={item!.label}>
                                {item.label}
                                <input type={item!.type} value={item!.value} name={item!.label} />
                            </label>
                        )
                    })
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
