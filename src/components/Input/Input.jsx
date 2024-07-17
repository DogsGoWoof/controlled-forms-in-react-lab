const Input = ({title, author, dataType, onChangeFunc}) => {
    // const Input = (props) => {
    // console.log(props);
    return (
        <>
            <label htmlFor="{dataType}">{dataType}:</label>
            <input
                id={dataType}
                name={dataType}
                value={dataType === "title" ? title : author}
                onChange={onChangeFunc}
                type="text"
            />
        </>
    );
}

export default Input;