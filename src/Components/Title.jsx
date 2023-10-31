
const Title = ({children}) => {
    return (
        <div className="relative border-s-8 border-orange-400 ps-3">
            <p className=" absolute text-8xl bottom-0  opacity-5"> {children}</p>
            <h2 className=" text-5xl  font-bold">{children}</h2>
        </div>
    );
};

export default Title;