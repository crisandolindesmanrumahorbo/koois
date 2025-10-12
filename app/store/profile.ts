import { create } from "zustand";
import { RolePermission } from "../[lang]/(auth)/layout";

export interface IProfile {
  role_id: string;
  role_permissions: Array<RolePermission>;
}
export type ProfileStore = {
  profile?: IProfile;
  setProfile: (data: IProfile) => void;
};

export const useProfile = create<ProfileStore>((set) => ({
  profile: undefined,
  setProfile: (data) => {
    set({
      profile: data,
    });
  },
}));
