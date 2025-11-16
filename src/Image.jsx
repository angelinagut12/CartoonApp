function Image({ src, width, alt}) {
    return (
        <img 
            src={src}
            width={width}
            height={175}
            alt={alt}
            style={{
                borderRadius: "25%",
                objectFit: "cover",
                border: "4px solid #6ea3c7ff",
                margin: "10px", 
            }} />
    );
}
export default Image;