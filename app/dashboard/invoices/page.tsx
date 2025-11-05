export default function Page() {
    return (
        <video width="100%" autoPlay muted loop playsInline>
            <source src="/Bienvenida.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de vídeo.
        </video>
    );
}