import ShopTitle from "@/components/common/shop-title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileForm from "@/features/account/profile/components/profile-form";
import SecurityForm from "@/features/account/profile/components/security-form";
import { getUserInfo, updatePassword } from "@/features/account/profile/services/actions";
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
      <Tabs defaultValue="personalinfo" className="mt-5">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="personalinfo">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="personalinfo">
          <div className="mt-5 rounded-sm p-4 border">
            <ShopTitle title="Profile Information" className="text-base" />
            <span className="text-xs text-muted-foreground block">
              Update your personal details and profile picture.
            </span>
            <ProfileForm data={userObj} />
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="mt-5 rounded-sm p-4 border">
            <ShopTitle title="Account Security" className="text-base" />
            <span className="text-xs text-muted-foreground block">
              Change your password to keep your account secure.{" "}
            </span>
            <SecurityForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
