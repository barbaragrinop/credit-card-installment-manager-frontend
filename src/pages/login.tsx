import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <Container isLoggedIn={false}>
            <div className="h-full flex flex-col justify-center">
                <h1 className="text-center">Login</h1>
                <div className=" flex justify-center items-center">
                    <form className="flex flex-col gap-3  w-72 items-end">
                        <Field.Text name="email" id="email" label="E-mail"/>
                        <Field.Text name="password" id="password" label="Password" type="password" />

                        <Button.Primary
                            onClick={() => {
                                navigate('/home')
                            }}
                        >Entrar</Button.Primary>

                    </form>
                </div>
            </div>
        </Container>
    );
}

export default LoginPage;
