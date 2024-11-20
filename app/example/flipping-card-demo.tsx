import { FlippingCard, FlippingCardBack, FlippingCardFront } from "~/registry/flipping-card";

export default function FlippingCardDemo() {
	return (
		<div className="flex flex-col items-center justify-center">
			<FlippingCard>
				<FlippingCardFront>
					<div className="w-[200px] aspect-[3/4] overflow-hidden rounded-md">
						<img
							className="object-cover w-full h-full"
							src="https://images.unsplash.com/photo-1726083218617-6b8a0000e574?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
					</div>
				</FlippingCardFront>
				<FlippingCardBack>
					<div className="w-[200px] aspect-[3/4] overflow-hidden rounded-md">
						<img
							className="object-cover w-full h-full"
							src="https://images.unsplash.com/photo-1731530357802-08d982917720?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt=""
						/>
					</div>
				</FlippingCardBack>
			</FlippingCard>

			<h3 className="text-center text-xl mt-2 font-semibold">Hover over the card</h3>
		</div>
	);
}
