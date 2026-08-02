import { useAuth } from "@/context/AuthContext";

export default function UserMenu() {

    const { user } = useAuth();

    return (

        <div className="flex items-center gap-3">

            <div
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                    font-bold
                "
            >

                {user?.fullName?.charAt(0)}

            </div>

            <div>

                <p className="font-medium">

                    {user?.fullName}

                </p>

                <p className="text-xs text-slate-400">

                    {user?.email}

                </p>

            </div>

        </div>

    );

}