import profilePhoto from "../assets/profile-photoo.jpg"

export function Sidebar() {
    return (
        <aside className="h-screen bg-[#0D2139] flex flex-1 flex-col justify-between">

            <div className="w-full flex flex-col justify-center items-center p-2 md:py-8">
                
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1d5c6e] p-2 md:p-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#0a3a4a] p-1 flex items-center justify-center">
                        <img
                            src={profilePhoto}
                            alt="Foto de perfil"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>

                <h1 className="font-bold text-center text-base md:text-2xl text-white pt-4">Yuri Cardoso Viana</h1>
                <strong className="text-[#d3e4ed] text-center text-xs md:text-base font-light">Engenherio de Software em formação</strong>
            </div>

        </aside>
    )
}