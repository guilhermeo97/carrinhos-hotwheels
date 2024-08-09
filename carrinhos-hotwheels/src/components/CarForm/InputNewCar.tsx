import { Car } from "@/types/Car";
import { useController, UseControllerProps } from "react-hook-form";

export const InputsNewCar = (props: UseControllerProps<Car>) => {
    const { field, fieldState } = useController(props);

    return (
        <div>
            <input className={`border ${fieldState.invalid ? 'border-red': 'border-white'} p-3`}
                {...field}
                placeholder={props.name}
            />
        </div>
    )
}