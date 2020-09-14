import * as React from 'react';

type Props = {
    fields:
        {
            label: string,
            value: string,
            type: string,
        }[],
    setField: void
}

export const Form: React.FC<Props> = ({ fields, setField }) => {


    // const updateField = (event: any) => {
    //     console.log(event)
    //     console.log(setField)
    //     const value, label
    //     setField(label, value)
    // }

    return (
        <div>
            <form>
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
