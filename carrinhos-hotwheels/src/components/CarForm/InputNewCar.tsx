import { Car } from "@/types/Car";
import { useController, UseControllerProps } from "react-hook-form";

export const InputsNewCar = (props: UseControllerProps<Car>) => {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input className={`input-text border ${fieldState.invalid ? 'border-red': 'border-white'} p-3`}
                {...field}
                placeholder={props.name}
            />
            {fieldState.error && <div>{fieldState.error.message}</div>}
        </div>
    )
}