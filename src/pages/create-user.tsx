import Container from "@/components/Container";
import FieldErrorMessage from "@/components/Field/error-message";
import axios from 'axios';

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, ref } from 'yup';
import { ToastContainer } from "react-toastify";
import { useNotifier } from "@/hooks/useNotifier";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CreateUser = {
    email: string;
    password: string;
    confirmPassword: string;
    birth_date: string;
    name: string;
}

const validation = object().shape({
    email: string().email("Insira um e-mail válido").required("Campo obrigatório"),
    password: string().required("Campo obrigatório"),
    birth_date: string().required("Campo obrigatório"),
    name: string().required("Campo obrigatório"),
    confirmPassword: string().required("Campo obrigatório").oneOf([ref('password'), ""], 'As senhas devem ser iguais')
})

function CreateUserPage() {
    const { success, error } = useNotifier()
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home')
        }
    })

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
            mode: 'onChange',
            defaultValues: {
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
                birth_date: ""
            }
        });

    async function handleRegisterUser(form: Omit<CreateUser, "confirmPassword">) {

        const { birth_date, email, name, password } = form;

        if (!birth_date || !email || !name || !password) {
            error('Preencha todos os campos')
            return
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_ENVIRONMENT}/user`, {
                birth_date,
                email,
                name,
                password
            })

            if (response.status === 201) {
                success('Usuário cadastrado com sucesso')
                navigate('/')
            }
        } catch (err) {
            error('Erro ao cadastrar usuário')
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

                        <Field.Date id="birth_date" name="birth_date" label="Data de Nascimento" register={register("birth_date")} />
                        <FieldErrorMessage error={errors} field="birth_date" />

                        <Field.Text id="email" name="email" label="E-mail" type="text" register={register("email")} />
                        <FieldErrorMessage error={errors} field="email" />

                        <Field.Text id="password" name="password" label="Senha" type="password" register={register("password")} />
                        <FieldErrorMessage error={errors} field="password" />

                        <Field.Text id="confirmPassword" name="confirmPassword" label="Confirme a senha" type="password" register={register("confirmPassword")} />
                        <FieldErrorMessage error={errors} field="confirmPassword" />

                        <Button.Primary type="submit"
                            disabled={isSubmitting}
                        >Cadastrar</Button.Primary>
                        <Button.Primary type="submit" onClick={() => navigate("/")}>Voltar</Button.Primary>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </Container>
    );
}

export default CreateUserPage;
