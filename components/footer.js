export default function Footer({ events }) {
	return (
		<footer className='flex flex-col items-center justify-center gap-2 text-gray-500 py-5'>
			<h5>That`s all Folks</h5>
			<p>Made by S.McArrow just for fun</p>
			<p>© {new Date().getFullYear()} All rights reserved</p>
		</footer>
	)
}
