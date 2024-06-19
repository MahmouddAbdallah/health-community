import { useState } from "react";

const ModeIcon = () => {
    const mode = localStorage.getItem("mode")
    const [darkmode, setDarkmode] = useState(mode);

    return (
        <label className="block relative w-[60px] h-[30px]">
            <input
                type="checkbox"
                defaultChecked={mode == "dark" ? true : false}
                className="opacity-0 w-0 h-0 peer"
            />
            <span className=" absolute  cursor-pointer  top-0  left-0  right-0  bottom-0  bg-white-Smoke_White  duration-500  rounded-[30px] before:absolute  before:h-[22px]  before:w-[22px]  before:rounded-[20px]  before:left-[4px] before:top-[50%] before:duration-500 before:translate-y-[-50%] before:bg-gradient-to-bl before:from-modeIcon-orange before:to-modeIcon-pink before:peer-checked:left-[calc(100%-25px);] dark:before:peer-checked:from-[#303136] dark:before:peer-checked:to-[#303136] dark:before:peer-checked:shadow-[inset_-3px_-2px_5px_-2px_#8983f7,inset_-10px_-4px_0_0_#a3dafb] peer-checked:bg-[#303136]"
                onClick={() => {
                    if (darkmode == "dark") {
                        document.body.classList.remove("dark");
                        setDarkmode("light");
                        localStorage.setItem("mode", "light")
                    } else {
                        document.body.classList.add("dark");
                        setDarkmode("dark");
                        localStorage.setItem("mode", "dark")
                    }
                }}>
            </span>
        </label>
    )
}

export default ModeIcon