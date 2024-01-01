function Button(props) {
	const { onClick, children, title, disabled = false } = props;
	return (
		<button
			className="button"
			{...props}
			onClick={onClick}
			disabled={disabled}
			title={title}
		>
			{children}
		</button>
	);
}
export default Button;
