import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import { LoginFormsInput } from "@/types/login-forms-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { object, string } from 'yup';

const validation = object().shape({
  email: string().email("Must be a valid e-mail").required("E-mail is required"),
  password: string().required("Password is required")
})

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate()
  const { handleSubmit, 
    register, 
    getValues,
    formState: {
      errors
    } } = useForm<LoginFormsInput>({ 
      resolver: yupResolver(validation), 
      defaultValues: {
        email: "",
        password: "",
      }
    });

  // const navigate = useNavigate();

  async function handleLogin(form: LoginFormsInput) {
    let result = await login(form.email, form.password)
    console.log('resultasdasd', result)

    // if(result) {
    //   navigate('/home')
    // }

    console.log('form', form)
  }

  
  return (
    <Container>
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-center">Login</h1>
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-3 w-72 items-end"
            onSubmit={handleSubmit(handleLogin)}>
            <Field.Text id="email" name="email" label="E-mail" type="text" register={register("email")} />
            {errors && errors.email && <small className="text-red-500">{errors.email.message}</small>}
            <Field.Text id="password" name="password" label="Password" type="password" register={register("password")} />
            {errors && errors.password && <small className="text-red-500">{errors.password.message}</small>}
            <Button.Primary type="submit">Entrar</Button.Primary>
            <Button.Primary type="submit" onClick={() => {
              navigate('/create-user')
            
            }}>Cadastrar</Button.Primary>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
