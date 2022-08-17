export const Layout = (props) => {
    return (
        <div className={"flex flex-col items-center px-2 mx-auto max-w-2xl min-h-screen"}>
            {props.children}
        </div>
    )
};