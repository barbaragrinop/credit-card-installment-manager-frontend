import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import FieldErrorMessage from "@/components/Field/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, ref, date } from 'yup';
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import { useNotifier } from "@/hooks/useNotifier";
import { useNavigate } from "react-router-dom";

type CreateUser = {
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: Date;
    name: string;
}

const validation = object().shape({
    email: string().email("Must be a valid e-mail").required("E-mail is required"),
    password: string().required("Password is required"),
    birthDate: date().required("Birth Date is required").max(new Date(), "Birth Date must be in the past"),
    name: string().required("Name is required"),
    confirmPassword: string().required("Confirm Password is required").oneOf([ref('password'), ""], 'Passwords must match')
})

function CreateUserPage() {
    const { success, error } = useNotifier()
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        getValues,
        formState: {
            errors,
            isDirty,
            isSubmitting,
        } } = useForm<CreateUser>({
            resolver: yupResolver(validation),
            mode: 'onChange'
        });

    async function handleRegisterUser(form: Omit<CreateUser, "confirmPassword">) {
        try {
            let result = await axios.post(`${import.meta.env.VITE_ENVIRONMENT}/user`, form)

            if (result.status === 201) {
                success('Usuário criado com sucesso!')
            }

        } catch (err: any) {
            console.log('error', err?.response?.data)
            error(err?.response?.data || '');
        }
    }

    return (
        <Container >
            <div className="h-full flex flex-col justify-center">
                <h1 className="text-center">Login</h1>
                <div className="flex justify-center items-center">
                    <form className="flex flex-col gap-3 w-72 items-end"
                        onSubmit={handleSubmit(handleRegisterUser)}>
                        <Field.Text id="name" name="name" label="Name" type="text" register={register("name")} />
                        <FieldErrorMessage error={errors} field="name" />

                        <Field.Date id="birthDate" name="birthDate" label="Data de Nascimento" register={register("birthDate")} />
                        <FieldErrorMessage error={errors} field="birthDate" />

                        <Field.Text id="email" name="email" label="E-mail" type="text" register={register("email")} />
                        <FieldErrorMessage error={errors} field="email" />

                        <Field.Text id="password" name="password" label="Senha" type="password" register={register("password")} />
                        <FieldErrorMessage error={errors} field="password" />

                        <Field.Text id="confirmPassword" name="confirmPassword" label="Confirme a senha" type="password" register={register("confirmPassword")} />
                        <FieldErrorMessage error={errors} field="confirmPassword" />

                        <Button.Primary type="submit" onClick={() => console.log("getvaIUS", getValues())}>Cadastrar</Button.Primary>
                        <Button.Primary type="submit" onClick={() => navigate("/")}>Voltar</Button.Primary>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </Container>
    );
}

export default CreateUserPage;
