import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "demo@example.com",
  password: "12345678",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don&#39;t have an account
          <Link
            className="ml-2 font-bold text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
        <div className="mt-4 rounded-lg bg-muted/50 p-4 text-sm">
          <p className="font-medium text-primary">
            可直接點擊「Sign In」按鈕登入測試
          </p>
          <div className="mt-2 text-left">
            <p>
              測試帳號：<span className="font-mono">demo@example.com</span>
            </p>
            <p>
              測試密碼：<span className="font-mono">12345678</span>
            </p>
          </div>
        </div>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
