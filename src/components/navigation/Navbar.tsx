import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import { NavLink } from 'react-router'
import ContactForm from '../ContactForm'
import LanguageDropdown from '../LanguageDropdown'


export default function Navbar() {
    return (
        <div className='w-screen'>
            <NavigationMenu className='w-full flex gap-2 justify-between pl-4 pr-8 pt-2 pb-2'>
                <NavigationMenuList className='gap-4'>
                    <NavigationMenuItem>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-600 font-semibold underline' : ''}>Home</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavLink to={'/lic'} className={({ isActive }) => isActive ? 'text-blue-600 font-semibold underline' : ''}>LIC</NavLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Term Life</NavigationMenuLink>
                            <NavigationMenuLink>Term Life</NavigationMenuLink>
                            <NavigationMenuLink>Term Life</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <NavLink to={'/private-insurance'} className={({ isActive }) => isActive ? 'text-blue-600 font-semibold underline' : ''}>Private Insurances</NavLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-blue-600 font-semibold underline' : ''}>Blog</NavLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ContactForm buttonName='Contact Us' />
                    </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuItem>
                    <LanguageDropdown />
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    )
}
