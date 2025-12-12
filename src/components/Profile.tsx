import profilePhoto from "../assets/profile-photo.jpg"

export function Profile() {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            <div className="w-40 h-40 rounded-full bg-[#1d5c6e] p-3 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0a3a4a] p-1 flex items-center justify-center">
                    <img
                        src={profilePhoto}
                        alt="Foto de perfil"
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>
            </div>

            <h1 className="font-bold text-center text-2xl text-white pt-4">Yuri Cardoso Viana</h1>
            <strong className="text-[#d3e4ed] text-center text-base font-light tracking-wide">Engenherio de Software em formação</strong>
        </div>  
    )
}