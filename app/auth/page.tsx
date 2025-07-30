"use client";

import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { randomUserApiUrl } from "@/const/public";
import { useAuth } from "@/context/AuthContext";
import { loginSchema } from "@/lib/validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./auth.module.scss";

type FormData = z.infer<typeof loginSchema>;

export default function AuthPage() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    const res = await fetch(randomUserApiUrl);
    const data = await res.json();
    const user = data.results[0];
    login(user);
    router.push("/dashboard");
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
          <h1 className={styles.authTitle}>Login</h1>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.formLabel}>
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone")}
            />
            {errors.phone && (
              <p className={styles.errorText}>{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
