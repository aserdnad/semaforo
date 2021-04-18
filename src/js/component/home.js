import React, { useState } from "react";

export function Home() {
	const [activo, setActivo] = useState("");

	const cambiarLuz = color => {
		setActivo(color);
	};

	return (
		<main>
			<div className="caja">
				<div
					className={`rojo${activo === "rojo" ? " activo" : ""}`}
					onClick={e => cambiarLuz(e.target.className)}></div>
				<div
					className={`amarillo${
						activo === "amarillo" ? " activo" : ""
					}`}
					onClick={e => cambiarLuz(e.target.className)}></div>
				<div
					className={`verde${activo === "verde" ? " activo" : ""}`}
					onClick={e => cambiarLuz(e.target.className)}></div>
			</div>
		</main>
	);
}
