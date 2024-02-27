import { FormEvent } from "react";

export const PageSimpleForm = () => {
	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		console.log(data);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<fieldset className="w-full rounded border border-gray-500 p-4 sm:w-40">
				<legend>New Employee</legend>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="firstName">
						First Name:
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						required
					/>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="lastName">
						Last Name:
					</label>
					<input type="text" id="lastName" name="lastName" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="age">
						Age:
					</label>
					<input type="number" id="age" name="age" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="hireDate">
						Hire Date:
					</label>
					<input type="date" id="hireDate" name="hireDate" required />
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="employeeNumber">
						Employee Number:
					</label>
					<div>
						<input
							type="text"
							id="employeeNumber"
							name="employeeNumber"
							pattern="^[DSM]-\d{4}$"
							required
						/>
						<p className="text-sm">e.g. D-2832, S-7771, M-8123</p>
					</div>
				</div>

				<div className="mb-4 flex gap-2">
					<label className="w-[10rem]" htmlFor="notes">
						Notes:
					</label>
					<textarea id="notes" name="notes"></textarea>
				</div>

				<div className="mt-5 flex justify-end pr-3">
					<button className="rounded bg-slate-700 p-2 text-white transition hover:bg-slate-900">
						Add Employee
					</button>
				</div>
			</fieldset>
		</form>
	);
};