import { useState} from "react";
import { Button, Input } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import { GrUserAdmin } from "react-icons/gr";
import { ICar } from "@/interfaces/Car";
type FormProps = {
    onAdd: (car: ICar) => void;
};

const Form = ({ onAdd }: FormProps) => {
    const [valueInput, setValueInput] = useState<string>("");
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (valueInput !== "") {
            onAdd({
                id: Math.floor(Math.random() * 1000),
                name: valueInput,
            });
            const form = e.target as HTMLFormElement;
            form.reset();
            setValueInput("");
        }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };
    return (
        <form onSubmit={onSubmit} className="border-b mb-3 p-3 flex justify-between items-center">
            <Input placeholder="car name" onChange={onHandleChange} prefix={<GrUserAdmin/>} />
            <Button type="primary" icon={<AiOutlinePlus/>}>
            </Button>
        </form>
    );
};

export default Form;