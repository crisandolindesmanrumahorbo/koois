"use client";
import { useProfile } from "@/app/store/profile";

export default function FacilitatorDashboard() {
  const profile = useProfile((state) => state.profile);
  return (
    <div className="p-2">
      <p>facilitator</p>
      <p>{JSON.stringify(profile)}</p>
    </div>
  );
}
