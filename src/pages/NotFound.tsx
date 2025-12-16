export function NotFound() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-4xl">Op's! Essa página não existe.</h1>
            <a className="text-2xl font-bold text-[#0D2139] hover:text-[#437dc4] transition ease-linear" href="/">Voltar ao início.</a>
        </div>
    )
}