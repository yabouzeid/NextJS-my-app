"use client";
import { useEffect, useState } from "react";

export default function Todo() {
	const [todo, setTodo] = useState({});
	useEffect(() => {
		const asyncFn = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			const result = await response.json();
			setTodo(result);
		};
		asyncFn();
	}, []);
	return (
		<div>
			<h3>{todo.title}</h3>
		</div>
	);
}
