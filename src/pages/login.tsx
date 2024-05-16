import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";

function Login() {
    return (
        <Container isLoggedIn={false}>
            <div className="h-full flex flex-col bg-gray-200">
                <h1 className="text-center">Login</h1>
                <div className="flex-grow flex justify-center items-center">
                    <div className="flex flex-col gap-3  w-72 items-end">
                        <Field.Text name="email" id="email" label="E-mail" />
                        <Field.Text name="password" id="password" label="Password" type="password" />
                        <Button.Primary>Entrar</Button.Primary>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Login;
