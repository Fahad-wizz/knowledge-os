import SearchBar from "@/components/navbar/SearchBar";
import NotificationButton from "@/components/navbar/NotificationButton";
import UserMenu from "@/components/navbar/UserMenu";

export default function TopNavbar() {

    return (

        <header
            className="
                flex
                h-16
                items-center
                justify-between
                border-b
                border-slate-800
                bg-slate-950
                px-8
            "
        >

            <SearchBar />

            <div className="flex items-center gap-4">

                <NotificationButton />

                <UserMenu />

            </div>

        </header>

    );

}