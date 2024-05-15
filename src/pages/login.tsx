import { Field } from "@/components/Field";

function Login() {
    return (
        <div className="flex flex-col gap-4">
        <Field.Text id="text" label="text" name="text" onChange={(e) => console.log(e)}  />
        <Field.Number id="number" label="number" name="number"   />
        <Field.Date id="number" label="number" name="number"  onChange={() => null}   />

        </div>
    );
}

export default Login;