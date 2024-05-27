import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import { useAuth } from "@/context/useAuth";
import { useNotifier } from "@/hooks/useNotifier";
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
  const { login, isLoggedIn } = useAuth();
  const { error } = useNotifier()
  const navigate = useNavigate()
  const { handleSubmit,
    register,
    formState: {
      errors
    } } = useForm<LoginFormsInput>({
      resolver: yupResolver(validation),
      defaultValues: {
        email: "",
        password: "",
      }
    });

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     navigate('/home')
  //   }
  // }, [navigate])



  async function handleLogin(form: LoginFormsInput) {
    try {
      await login(form.email, form.password);
      navigate('/home'); // Navigate to home on successful login
    } catch (err: any) {
      error("Invalid email or password");
    }
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
