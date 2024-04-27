import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";


const DropDownProfile = () => {
    const {user, logOut} = useContext(AuthContext)
    // console.log(user)
    const notify = () => toast.warning("Successfully LogOut!");
    const handleLogOut = async () => {
        await logOut();
        notify();
      };
    return (
        <div className="flex flex-col dropDownProfile z-[99]">
            <ul className="flex items-start flex-col gap-1">
                <li className="font-medium min-w-[100px]">{user?.displayName}</li>
                <li><button onClick={handleLogOut} className="btn btn-sm bg-[#00BA9C] text-white">Logout</button></li>
            </ul>
        </div>
    );
};

export default DropDownProfile;