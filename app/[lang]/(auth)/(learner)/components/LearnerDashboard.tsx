"use client";
import { useProfile } from "@/app/store/profile";

export default function LearnerDashboard() {
  const profile = useProfile((state) => state.profile);
  return (
    <div className="p-2">
      <p>Learner</p>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
}
