import { SVG, Path } from '@wordpress/primitives';

const calender = (
	<SVG
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M4.5 7C3.94772 7 3.5 7.44772 3.5 8C3.5 8.55228 3.94772 9 4.5 9V7ZM20.5 9C21.0523 9 21.5 8.55228 21.5 8C21.5 7.44772 21.0523 7 20.5 7V9ZM5.5918 19.782L6.04579 18.891L6.04579 18.891L5.5918 19.782ZM4.71799 18.908L3.82698 19.362L3.82698 19.362L4.71799 18.908ZM20.2822 18.908L19.3912 18.454L20.2822 18.908ZM19.4078 19.782L18.9538 18.891L19.4078 19.782ZM19.4078 4.21799L19.8618 3.32698L19.8618 3.32698L19.4078 4.21799ZM20.2822 5.09204L19.3912 5.54603L19.3912 5.54603L20.2822 5.09204ZM5.5918 4.21799L6.04579 5.10899L5.5918 4.21799ZM4.71799 5.09204L5.60899 5.54603L4.71799 5.09204ZM16.2071 12.7071C16.5976 12.3166 16.5976 11.6834 16.2071 11.2929C15.8166 10.9024 15.1834 10.9024 14.7929 11.2929L16.2071 12.7071ZM11.5 16L10.7929 16.7071C11.1834 17.0976 11.8166 17.0976 12.2071 16.7071L11.5 16ZM10.2071 13.2929C9.81658 12.9024 9.18342 12.9024 8.79289 13.2929C8.40237 13.6834 8.40237 14.3166 8.79289 14.7071L10.2071 13.2929ZM17.5 2C17.5 1.44772 17.0523 1 16.5 1C15.9477 1 15.5 1.44772 15.5 2H17.5ZM15.5 4C15.5 4.55228 15.9477 5 16.5 5C17.0523 5 17.5 4.55228 17.5 4H15.5ZM9.5 2C9.5 1.44772 9.05228 1 8.5 1C7.94772 1 7.5 1.44772 7.5 2H9.5ZM7.5 4C7.5 4.55228 7.94772 5 8.5 5C9.05228 5 9.5 4.55228 9.5 4H7.5ZM4.5 9H20.5V7H4.5V9ZM7.7002 5H17.3002V3H7.7002V5ZM19.5 7.19995V16.8H21.5V7.19995H19.5ZM17.3002 19H7.7002V21H17.3002V19ZM5.5 16.8V7.19995H3.5V16.8H5.5ZM7.7002 19C7.12367 19 6.75127 18.9992 6.46782 18.9761C6.19598 18.9538 6.09519 18.9161 6.04579 18.891L5.13781 20.673C5.51623 20.8658 5.90959 20.9371 6.30496 20.9694C6.68873 21.0008 7.15662 21 7.7002 21V19ZM3.5 16.8C3.5 17.3435 3.49922 17.8113 3.53057 18.195C3.56287 18.5904 3.63418 18.9836 3.82698 19.362L5.60899 18.454C5.58381 18.4046 5.54613 18.3039 5.52393 18.0322C5.50078 17.7488 5.5 17.3765 5.5 16.8H3.5ZM6.04579 18.891C5.85778 18.7952 5.70494 18.6424 5.60899 18.454L3.82698 19.362C4.11452 19.9264 4.57317 20.3853 5.13781 20.673L6.04579 18.891ZM19.5 16.8C19.5 17.3766 19.4993 17.7489 19.4762 18.0323C19.454 18.3041 19.4163 18.4047 19.3912 18.454L21.1732 19.362C21.3661 18.9835 21.4373 18.5902 21.4696 18.1949C21.5008 17.8112 21.5 17.3434 21.5 16.8H19.5ZM17.3002 21C17.8438 21 18.3115 21.0008 18.6951 20.9694C19.0904 20.9371 19.4835 20.8657 19.8618 20.673L18.9538 18.891C18.9043 18.9162 18.8036 18.9539 18.5321 18.9761C18.2489 18.9992 17.8767 19 17.3002 19V21ZM19.3912 18.454C19.2956 18.6417 19.1425 18.7948 18.9538 18.891L19.8618 20.673C20.4257 20.3856 20.8853 19.927 21.1732 19.362L19.3912 18.454ZM17.3002 5C17.8768 5 18.2489 5.00078 18.5321 5.02393C18.8036 5.04611 18.9043 5.08377 18.9538 5.10899L19.8618 3.32698C19.4835 3.13421 19.0904 3.06288 18.6951 3.03057C18.3115 2.99922 17.8437 3 17.3002 3V5ZM21.5 7.19995C21.5 6.6565 21.5008 6.1887 21.4695 5.80511C21.4373 5.40983 21.3661 5.01653 21.1732 4.63805L19.3912 5.54603C19.4164 5.59537 19.454 5.69598 19.4762 5.96767C19.4993 6.25105 19.5 6.6233 19.5 7.19995H21.5ZM18.9538 5.10899C19.1424 5.20508 19.2956 5.35828 19.3912 5.54603L21.1732 4.63805C20.8854 4.07315 20.4259 3.61439 19.8618 3.32698L18.9538 5.10899ZM7.7002 3C7.15663 3 6.68874 2.99922 6.30498 3.03057C5.90962 3.06286 5.51624 3.13416 5.13781 3.32698L6.04579 5.10899C6.09517 5.08383 6.19595 5.04613 6.4678 5.02393C6.75126 5.00078 7.12365 5 7.7002 5V3ZM5.5 7.19995C5.5 6.6234 5.50078 6.25114 5.52393 5.96783C5.54612 5.6962 5.5838 5.59549 5.60899 5.54603L3.82698 4.63805C3.63419 5.01642 3.56287 5.40961 3.53057 5.80495C3.49922 6.18861 3.5 6.6564 3.5 7.19995H5.5ZM5.13781 3.32698C4.57306 3.61473 4.11447 4.07382 3.82698 4.63805L5.60899 5.54603C5.705 5.35761 5.85788 5.20474 6.04579 5.10899L5.13781 3.32698ZM14.7929 11.2929L10.7929 15.2929L12.2071 16.7071L16.2071 12.7071L14.7929 11.2929ZM12.2071 15.2929L10.2071 13.2929L8.79289 14.7071L10.7929 16.7071L12.2071 15.2929ZM15.5 2V4H17.5V2H15.5ZM7.5 2V4H9.5V2H7.5Z"
			fill="currentColor"
		/>
	</SVG>
);

export default calender;
