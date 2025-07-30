"use client";

import { Loading } from "@/components/ui/Loading/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./dashboard.module.scss";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.dashboardWrapper}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
