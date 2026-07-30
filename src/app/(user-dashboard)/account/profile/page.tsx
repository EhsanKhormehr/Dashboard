import ShopTitle from "@/components/common/shop-title";
import ProfileForm from "@/features/account/profile/components/profile-form";
import { getUserInfo } from "@/features/account/profile/services/actions";
import React from "react";

const Profile = async () => {
  const user = await getUserInfo();

  const userObj = {
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    email: user.email,
    phoneNumber: user.phoneNumber ?? "",
    userName: user.userName,
  };
  
  return (
    <div className="bg-surface shadow-card rounded-2xl  mt-5 px-4 py-8 max-w-6xl mx-auto">
      <ShopTitle title="Profile" />
      <span className="text-xs text-muted-foreground">
        Manage your personal information.
      </span>
      <div className="mt-5 rounded-sm p-4 col-span-12 lg:col-span-8 border">
        <ShopTitle title="Profile Information" className="text-base" />
        <span className="text-xs text-muted-foreground block">
          Update your personal details and profile picture.
        </span>
        <ProfileForm data={userObj} />
      </div>
    </div>
  );
};

export default Profile;
